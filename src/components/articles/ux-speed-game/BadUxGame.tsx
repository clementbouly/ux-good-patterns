import { Game } from "./Game";

type BadUxGameProps = {
  onComplete: (time: number) => void;
};

export function BadUxGame({ onComplete }: BadUxGameProps) {
  return <Game variant="bad" onComplete={onComplete} />;
}
