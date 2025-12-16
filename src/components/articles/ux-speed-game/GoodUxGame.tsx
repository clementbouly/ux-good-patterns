import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Check, Copy } from "lucide-react";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { useGameTimer } from "./useGameTimer";
import { generateCode } from "./utils";
import { TimerDisplay, StartButton, CompletedState, OtpInput, QuitButton } from "./GameComponents";

type GameState = "idle" | "modal1" | "showCode" | "modal2" | "completed";

type GoodUxGameProps = {
  onComplete: (time: number) => void;
};

export function GoodUxGame({ onComplete }: GoodUxGameProps) {
  const [gameState, setGameState] = useState<GameState>("idle");
  const [code, setCode] = useState("");
  const [otpValue, setOtpValue] = useState("");
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { copied, copy } = useCopyToClipboard();

  const isRunning = gameState !== "idle" && gameState !== "completed";
  const { displayTime, start, stop, reset } = useGameTimer(isRunning);

  const handleStart = () => {
    setCode(generateCode());
    setOtpValue("");
    setHasError(false);
    start();
    setGameState("modal1");
    setModal1Open(true);
  };

  const handleModal1Close = () => {
    setModal1Open(false);
    setGameState("showCode");
  };

  const handleOpenModal2 = () => {
    setGameState("modal2");
    setModal2Open(true);
    setHasError(false);
  };

  const handleOtpChange = useCallback(
    (value: string) => {
      setOtpValue(value);
      if (value.length === 6) {
        if (value === code) {
          const time = stop();
          setGameState("completed");
          setModal2Open(false);
          onComplete(time);
        } else {
          setHasError(true);
          setTimeout(() => {
            setHasError(false);
            setOtpValue("");
          }, 800);
        }
      }
    },
    [code, stop, onComplete]
  );

  const handleReset = () => {
    setGameState("idle");
    setCode("");
    setOtpValue("");
    setModal1Open(false);
    setModal2Open(false);
    reset();
  };

  const isPlaying = gameState !== "idle" && gameState !== "completed";

  return (
    <div>
      {isPlaying && <QuitButton onClick={handleReset} />}
      <TimerDisplay time={displayTime} />

      <div className="flex flex-col items-center gap-3">
        {gameState === "idle" && <StartButton onClick={handleStart} />}

        {gameState === "showCode" && (
          <>
            <div className="rounded-lg border bg-muted/50 p-3 text-center">
              <p className="text-xs text-muted-foreground mb-1">Your code:</p>
              <p className="text-xl font-mono font-bold tracking-widest">{code}</p>
              <Button variant="outline" size="sm" className="mt-2 gap-1" onClick={() => copy(code)}>
                {copied ? (
                  <>
                    <Check className="h-3 w-3" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3" />
                    Copy code
                  </>
                )}
              </Button>
            </div>
            <Button size="sm" onClick={handleOpenModal2}>Enter final code</Button>
          </>
        )}

        {gameState === "completed" && <CompletedState onReset={handleReset} />}
      </div>

      <Dialog open={modal1Open} onOpenChange={handleModal1Close}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>You're doing great!</DialogTitle>
          </DialogHeader>
          <p className="text-center py-2">
            This was just a distraction. <span className="font-bold">Close this modal</span> to see your code.
          </p>
        </DialogContent>
      </Dialog>

      <Dialog open={modal2Open} onOpenChange={(open) => {
        if (!open) {
          setModal2Open(false);
          setGameState("showCode");
          setOtpValue("");
        }
      }}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enter the code</DialogTitle>
            <DialogDescription>Paste or type the 6-digit code — it auto-validates!</DialogDescription>
          </DialogHeader>
          <OtpInput value={otpValue} onChange={handleOtpChange} autoFocus showPasteButton hasError={hasError} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
