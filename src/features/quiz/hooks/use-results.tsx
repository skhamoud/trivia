import { useMemo } from "react";
import useQuizStore from "../store";

export default function useResults() {
  const [questions, answers, count] = useQuizStore((state) => [
    state.questions,
    state.answers,
    state.count,
  ]);

  const total = useMemo(
    () =>
      Object.keys(answers).reduce(
        (total, id) =>
          total + (answers[id] === questions[id].correct_answer ? 1 : 0),
        0
      ),
    [answers, questions]
  );

  return { total, count, questions, answers };
}
