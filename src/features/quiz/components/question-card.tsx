import Button from "components/atoms/button";
import HtmlMessage from "components/molecules/html-message";
import { Answer } from "../store";

type Props = {
  question: string;
  onAnswer: (answer: Answer) => void;
};

function QuestionCard({ question, onAnswer }: Props) {
  return (
    <div className="max-w-xs p-4 shadow-md rounded-md">
      <HtmlMessage htmlText={question} />
      <div className="flex justify-center space-x-2 mt-10 ">
        <Button
          onClick={() => {
            onAnswer(Answer.true);
          }}
        >
          True
        </Button>
        <Button
          onClick={() => {
            onAnswer(Answer.false);
          }}
        >
          False
        </Button>
      </div>
    </div>
  );
}

export default QuestionCard;
