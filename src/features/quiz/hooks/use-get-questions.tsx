import { useCallback, useEffect, useRef, useState } from "react";
import quizApi from "../data/quiz.api";
import useQuizStore from "../store";

type LazyFetchOptions = {
  onComplete?: () => void;
};
type UseGetQuestionsParams = {
  lazy?: boolean;
};

/** Fetches the quiz and populates the store with normalized data.
 * Also supports a lazy variant that exposes a function to fetch it on-demand as well.
 * ```
 *  useGetQuestions()  // fetch and populate store
 *
 *  const {fetchQuestions, loading, error} = useGetQuestions({lazy:true}) // get lazy variant
 * ```
 */
export default function useGetQuestions(
  { lazy = false } = {} as UseGetQuestionsParams
) {
  const [shouldFetch, setShouldFetch] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const setQuestions = useQuizStore(
    useCallback((state) => state.setQuestions, [])
  );
  const lazyFetchOptionsRef = useRef<LazyFetchOptions>();

  const lazyFetch = useCallback((lazyFetchOptions?: LazyFetchOptions) => {
    lazyFetchOptionsRef.current = lazyFetchOptions;
    setShouldFetch(true);
  }, []);

  useEffect(() => {
    // trigger lazy fetch or re-fetch
    if (shouldFetch) {
      fetchQuestions();
    }
    // trigger initial call only if not the lazy variant
    if (!lazy) {
      fetchQuestions();
    }

    async function fetchQuestions() {
      setLoading(true);
      const errMsg = "Error fetching quiz data!";
      try {
        const data = await quizApi.getQuestions();
        if (data?.results) {
          setQuestions(data.results);
          lazyFetchOptionsRef?.current?.onComplete();
        } else {
          setError(errMsg);
        }
      } catch (err) {
        setError(errMsg);
      } finally {
        setShouldFetch(false);
        setLoading(false);
      }
    }
  }, [lazy, shouldFetch, setQuestions]);

  return { fetchQuestions: lazyFetch, loading, error };
}
