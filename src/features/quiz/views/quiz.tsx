import Button from "components/atoms/button";
import { useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useQuizStore, { Answer } from "../store";

export default function Quiz() {
  const { question: id } = useParams<{ question: string }>();
  const navigate = useNavigate();
  const question = useQuizStore((state) => state.questions[id]);
  const setAnswer = useQuizStore(useCallback((state) => state.setAnswer, []));

  if (!question) {
    return <h3>Loading...</h3>;
  }
  return (
    <main className="flex flex-col justify-start items-center p-4 lg:p16 text-center lg:text-left min-h-screen ">
      <h1 className="text-4xl text-bold mb-20" key={question?.id}>
        {question?.category}
      </h1>
      <section>
        <div className="max-w-xs p-4 shadow-md ">{question.question}</div>
      </section>
      <section>
        <div className="flex justify-center space-x-2 mt-10 ">
          <Button
            onClick={() => {
              setAnswer(Answer.true, question.id);
              navigate(`/quiz/${Number(id) + 1}`);
            }}
          >
            True
          </Button>
          <Button>False</Button>
        </div>
      </section>
    </main>
  );
}
