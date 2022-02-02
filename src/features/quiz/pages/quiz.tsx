import { useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import QuestionCard from "../components/question-card";
import QuestionNotFound from "../components/question-not-found";
import useQuizStore, { Answer } from "../store";
import styles from "./quiz.module.css";

export default function Quiz() {
  const { question: id } = useParams<{ question: string }>();
  const navigate = useNavigate();
  const question = useQuizStore((state) => state.questions[id]);
  const setAnswer = useQuizStore(useCallback((state) => state.setAnswer, []));

  const handleAnswer = useCallback(
    (answer: Answer) => {
      setAnswer(answer, id);
      navigate(`/quiz/${Number(id) + 1}`);
    },
    [id, setAnswer, navigate]
  );

  if (!question) {
    return <QuestionNotFound />;
  }
  return (
    <main className={styles.container}>
      <h1 className={styles.header} key={question?.id}>
        {question?.category}
      </h1>
      <section>
        <QuestionCard question={question.question} onAnswer={handleAnswer} />
      </section>
    </main>
  );
}
