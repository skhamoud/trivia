import Button from "components/atoms/button";

type Props = {
  onPlay: () => void;
};
export default function QuestionNotFound({ onPlay }: Props) {
  return (
    <div className="text-center">
      <h3 className="my-20 text-2xl text-center font-bold text-red-400">
        No Question found!
      </h3>
      <Button onClick={onPlay}>Replay</Button>
    </div>
  );
}
