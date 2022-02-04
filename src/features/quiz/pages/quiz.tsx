import { useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import QuestionCard from "../components/question-card";
import QuestionNotFound from "../components/question-not-found";
import useReplay from "../hooks/use-replay";
import useQuizStore, { Answer } from "../store";
import styles from "./quiz.module.css";

export default function QuizQuestion() {
  const { question: id } = useParams<{ question: string }>();
  const navigate = useNavigate();

  const { replay, loading, error } = useReplay();

  const [question, currentQuestion, count] = useQuizStore((state) => [
    state.questions[id],
    state.current,
    state.count,
    state.fetched,
  ]);

  const setAnswer = useQuizStore(useCallback((state) => state.setAnswer, []));

  const handleAnswer = useCallback(
    (answer: Answer) => {
      setAnswer(answer, id);
      if (currentQuestion < count) navigate(`/quiz/${currentQuestion + 1}`);
      else navigate("/results");
    },
    [id, currentQuestion, count, setAnswer, navigate]
  );

  if (loading) {
    return <div className="text-center text-lg p-5 mt-5">Loading...</div>;
  } else if (!question || error) {
    return <QuestionNotFound onPlay={replay} />;
  }

  return (
    <main className={styles.container} data-testid="question">
      <h1
        className={styles.header}
        key={question?.id}
        data-testid="question-category"
      >
        {question?.category}
      </h1>
      <section>
        <QuestionCard question={question?.question} onAnswer={handleAnswer} />
        <div className="mt-4 text-center">
          {currentQuestion} out of {count}
        </div>
      </section>
    </main>
  );
}
