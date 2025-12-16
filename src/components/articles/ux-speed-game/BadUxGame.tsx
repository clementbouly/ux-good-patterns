import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useGameTimer } from "./useGameTimer";
import { generateCode } from "./utils";
import { TimerDisplay, StartButton, CompletedState, OtpInput, RestrictedDialog, QuitButton } from "./GameComponents";

type GameState = "idle" | "modal1" | "showCode" | "modal2" | "completed";

type BadUxGameProps = {
  onComplete: (time: number) => void;
};

export function BadUxGame({ onComplete }: BadUxGameProps) {
  const [gameState, setGameState] = useState<GameState>("idle");
  const [code, setCode] = useState("");
  const [otpValue, setOtpValue] = useState("");
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [hasError, setHasError] = useState(false);

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

  const handleValidate = useCallback(() => {
    if (otpValue === code) {
      const time = stop();
      setGameState("completed");
      setModal2Open(false);
      onComplete(time);
    } else {
      setHasError(true);
      // Bad UX: No auto-reset, user must manually clear and retype
    }
  }, [otpValue, code, stop, onComplete]);

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
              <p className="text-xl font-mono font-bold tracking-widest select-text">{code}</p>
              <p className="text-xs text-muted-foreground mt-1">Select and copy manually</p>
            </div>
            <Button size="sm" onClick={handleOpenModal2}>Enter final code</Button>
          </>
        )}

        {gameState === "completed" && <CompletedState onReset={handleReset} />}
      </div>

      <RestrictedDialog open={modal1Open} onClose={handleModal1Close}>
        <DialogHeader>
          <DialogTitle>You're doing great!</DialogTitle>
        </DialogHeader>
        <p className="text-center py-2">
          This was just a distraction. <span className="font-bold">Close this modal</span> to see your code.
        </p>
      </RestrictedDialog>

      <RestrictedDialog open={modal2Open} onClose={() => {
        setModal2Open(false);
        setGameState("showCode");
        setOtpValue("");
      }}>
        <DialogHeader>
          <DialogTitle>Enter the code</DialogTitle>
          <DialogDescription>Type the 6-digit code you saw</DialogDescription>
        </DialogHeader>
        <OtpInput
          value={otpValue}
          onChange={setOtpValue}
          hasError={hasError}
          errorMessage="Invalid code"
          showShake={false}
        />
        <Button onClick={handleValidate} disabled={otpValue.length !== 6}>
          Validate
        </Button>
      </RestrictedDialog>
    </div>
  );
}
