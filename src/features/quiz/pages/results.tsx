import { ButtonLink } from "components/atoms/button";
import QuestionAnswer from "../components/question-answer";
import useResults from "../hooks/use-results";
import styles from "./results.module.css";

export default function Results() {
  const { total, count, questions, answers } = useResults();

  return (
    <main className={styles.container}>
      <h1 className={styles.header}>
        You scored
        <p>
          {total} / {count}
        </p>
      </h1>
      <section className={styles.results_list_section}>
        <ul className={styles.results_list}>
          {Object.entries(questions).map(
            ([id, { question, correct_answer }]) => {
              const wasCorrect = answers[id] === correct_answer;
              return (
                <li key={id}>
                  <QuestionAnswer
                    question={question}
                    wasCorrect={wasCorrect}
                    answer={correct_answer}
                  />
                </li>
              );
            }
          )}
        </ul>
      </section>
      <div className={styles.cta}>
        <ButtonLink to="/">Replay</ButtonLink>
      </div>
    </main>
  );
}
