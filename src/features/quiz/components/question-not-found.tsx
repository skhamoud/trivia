import { ButtonLink } from "components/atoms/button";

export default function QuestionNotFound() {
  return (
    <div className="text-center">
      <h3 className="my-20 text-2xl text-center font-bold text-red-400">
        No Question found!
      </h3>
      <ButtonLink to="/">Home</ButtonLink>
    </div>
  );
}
