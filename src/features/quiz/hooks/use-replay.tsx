import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import useGetQuestions from "./use-get-questions";

export default function useReplay() {
  const navigate = useNavigate();

  const { fetchQuestions, loading, error } = useGetQuestions({ lazy: true });

  const replay = useCallback(() => {
    fetchQuestions({
      onComplete() {
        navigate("/quiz/1");
      },
    });
  }, [fetchQuestions, navigate]);

  return {
    replay,
    loading,
    error,
  };
}
