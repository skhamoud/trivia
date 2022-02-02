import { ButtonLink } from "components/atoms/button";
import useGetQuestions from "../hooks/use-get-questions";
import styles from "./welcome.module.css";

export default function Home() {
  useGetQuestions();

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>Welcome to the Trivia Challenge!</h1>
      </header>
      <section className={styles.mainContainer}>
        <p>You will be presented with 10 True or False questions.</p>
        <p>Can you score 100%?</p>
      </section>
      <div className="px-4 text-center">
        <ButtonLink to="quiz/1">BEGIN</ButtonLink>
      </div>
    </main>
  );
}
