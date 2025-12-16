import { Game } from "./Game";

type GoodUxGameProps = {
  onComplete: (time: number) => void;
};

export function GoodUxGame({ onComplete }: GoodUxGameProps) {
  return <Game variant="good" onComplete={onComplete} />;
}
