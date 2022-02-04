import { useMemo } from "react";
import { CheckIcon, XIcon } from "@heroicons/react/solid";
import HtmlMessage from "components/molecules/html-message";
type Props = {
  wasCorrect: boolean;
  question: string;
  answer: string;
};

export default function QuestionAnswer({
  wasCorrect,
  question,
  answer,
}: Props) {
  const icon = useMemo(
    () =>
      wasCorrect ? (
        <CheckIcon className="text-green-400" />
      ) : (
        <XIcon className="text-red-400" />
      ),
    [wasCorrect]
  );
  return (
    <div className="p-5 my-4 shadow-lg">
      <div className="md:flex justify-start items-center mb-2  ">
        <span className="inline-block w-10 md:mr-5">{icon}</span>
        <HtmlMessage htmlText={question} className="text-left" />
      </div>
      <span className="text-gray-600 text-lg font-bold">
        Correct answer : {answer}{" "}
      </span>
    </div>
  );
}
