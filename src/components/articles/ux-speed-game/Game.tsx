import { useState, useEffect, useRef } from "react";
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
import {
  TimerDisplay,
  StartButton,
  CompletedState,
  OtpInput,
  RestrictedDialog,
  QuitButton,
} from "./GameComponents";

type GameState = "idle" | "modal1" | "showCode" | "modal2" | "completed";

type GameVariant = "good" | "bad";

type GameProps = {
  variant: GameVariant;
  onComplete: (time: number) => void;
};

const VARIANT_CONFIG = {
  good: {
    autoFocus: true,
    showCopyButton: true,
    autoSubmit: true,
    restrictedModals: false,
    errorShake: true,
    errorAutoReset: true,
    errorMessage: "Wrong code, try again",
    modalDescription: "Type the 6-digit code — it auto-validates!",
    copyHint: null,
  },
  bad: {
    autoFocus: false,
    showCopyButton: false,
    autoSubmit: false,
    restrictedModals: true,
    errorShake: false,
    errorAutoReset: false,
    errorMessage: "Invalid code",
    modalDescription: "Type the 6-digit code you saw",
    copyHint: "Select and copy manually",
  },
} as const;

export function Game({ variant, onComplete }: GameProps) {
  const config = VARIANT_CONFIG[variant];

  const [gameState, setGameState] = useState<GameState>("idle");
  const [code, setCode] = useState("");
  const [otpValue, setOtpValue] = useState("");
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { copied, copy } = useCopyToClipboard();
  const errorTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isPlaying = gameState !== "idle" && gameState !== "completed";
  const { displayTime, start, stop, reset } = useGameTimer(isPlaying);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (errorTimeoutRef.current) {
        clearTimeout(errorTimeoutRef.current);
      }
    };
  }, []);

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

  const handleModal2Close = () => {
    setModal2Open(false);
    setGameState("showCode");
    setOtpValue("");
  };

  const handleReset = () => {
    setGameState("idle");
    setCode("");
    setOtpValue("");
    setModal1Open(false);
    setModal2Open(false);
    setHasError(false);
    if (errorTimeoutRef.current) {
      clearTimeout(errorTimeoutRef.current);
    }
    reset();
  };

  const handleSuccess = () => {
    const time = stop();
    setGameState("completed");
    setModal2Open(false);
    onComplete(time);
  };

  const handleError = () => {
    setHasError(true);
    if (config.errorAutoReset) {
      errorTimeoutRef.current = setTimeout(() => {
        setHasError(false);
        setOtpValue("");
      }, 800);
    }
  };

  const handleOtpChange = (value: string) => {
    setOtpValue(value);
    if (config.autoSubmit && value.length === 6) {
      if (value === code) {
        handleSuccess();
      } else {
        handleError();
      }
    }
  };

  const handleValidate = () => {
    if (otpValue === code) {
      handleSuccess();
    } else {
      handleError();
    }
  };

  const renderModal1 = () => {
    const content = (
      <>
        <DialogHeader>
          <DialogTitle>You're doing great!</DialogTitle>
        </DialogHeader>
        <p className="text-center py-2">
          This was just a distraction.{" "}
          <span className="font-bold">Close this modal</span> to see your code.
        </p>
      </>
    );

    if (config.restrictedModals) {
      return (
        <RestrictedDialog open={modal1Open} onClose={handleModal1Close}>
          {content}
        </RestrictedDialog>
      );
    }

    return (
      <Dialog open={modal1Open} onOpenChange={handleModal1Close}>
        <DialogContent>{content}</DialogContent>
      </Dialog>
    );
  };

  const renderModal2 = () => {
    const content = (
      <>
        <DialogHeader>
          <DialogTitle>Enter the code</DialogTitle>
          <DialogDescription>{config.modalDescription}</DialogDescription>
        </DialogHeader>
        <OtpInput
          value={otpValue}
          onChange={config.autoSubmit ? handleOtpChange : setOtpValue}
          autoFocus={config.autoFocus}
          hasError={hasError}
          errorMessage={config.errorMessage}
          showShake={config.errorShake}
        />
        {!config.autoSubmit && (
          <Button onClick={handleValidate} disabled={otpValue.length !== 6}>
            Validate
          </Button>
        )}
      </>
    );

    if (config.restrictedModals) {
      return (
        <RestrictedDialog open={modal2Open} onClose={handleModal2Close}>
          {content}
        </RestrictedDialog>
      );
    }

    return (
      <Dialog
        open={modal2Open}
        onOpenChange={(open) => {
          if (!open) handleModal2Close();
        }}
      >
        <DialogContent>{content}</DialogContent>
      </Dialog>
    );
  };

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
              <p
                className={`text-xl font-mono font-bold tracking-widest ${!config.showCopyButton ? "select-text" : ""}`}
              >
                {code}
              </p>
              {config.showCopyButton ? (
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-2 gap-1"
                  onClick={() => copy(code)}
                >
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
              ) : (
                <p className="text-xs text-muted-foreground mt-1">
                  {config.copyHint}
                </p>
              )}
            </div>
            <Button size="sm" onClick={handleOpenModal2}>
              Enter final code
            </Button>
          </>
        )}

        {gameState === "completed" && <CompletedState onReset={handleReset} />}
      </div>

      {renderModal1()}
      {renderModal2()}
    </div>
  );
}
