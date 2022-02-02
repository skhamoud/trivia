import { useCallback, useEffect, useState } from "react";
import quizApi from "../data/quiz.api";
import useQuizStore from "../store";

export default function useGetQuestions() {
  const setQuestions = useQuizStore(
    useCallback((state) => state.setQuestions, [])
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchQuestions();

    async function fetchQuestions() {
      const errMsg = "Error fetching quiz data!";
      try {
        setLoading(true);
        const data = await quizApi.getQuestions();
        if (data?.results) {
          setQuestions(data.results);
        } else {
          setError(errMsg);
        }
      } catch (err) {
        setError(errMsg);
      } finally {
        setLoading(false);
      }
    }
  }, [setQuestions]);

  return { loading, error };
}
