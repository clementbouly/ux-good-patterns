import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { Check, Play, RotateCcw, X } from "lucide-react";
import { formatTime } from "./utils";

export function TimerDisplay({ time }: { time: number }) {
  return (
    <div className="text-center mb-2">
      <div className="text-2xl font-mono font-bold tabular-nums">{formatTime(time)}</div>
    </div>
  );
}

export function QuitButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="absolute top-2 right-2 text-xs px-2 py-1 rounded border border-border bg-background hover:bg-muted cursor-pointer transition-colors z-10"
    >
      Quit game
    </button>
  );
}

export function StartButton({ onClick }: { onClick: () => void }) {
  return (
    <Button onClick={onClick} className="gap-2">
      <Play className="h-4 w-4" />
      Start Game
    </Button>
  );
}

export function CompletedState({ onReset }: { onReset: () => void }) {
  return (
    <div className="text-center space-y-2">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-100 dark:bg-green-950">
        <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
      </div>
      <p className="font-medium text-sm">Completed!</p>
      <Button onClick={onReset} variant="outline" size="sm" className="gap-2">
        <RotateCcw className="h-3 w-3" />
        Retry
      </Button>
    </div>
  );
}

export function OtpInput({
  value,
  onChange,
  autoFocus = false,
  hasError = false,
  errorMessage = "Wrong code, try again",
  showShake = true,
}: {
  value: string;
  onChange: (value: string) => void;
  autoFocus?: boolean;
  hasError?: boolean;
  errorMessage?: string;
  showShake?: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-2 py-2">
      <div
        className={`flex justify-center items-center gap-2 ${hasError && showShake ? "animate-shake" : ""}`}
      >
        <InputOTP
          maxLength={6}
          value={value}
          onChange={onChange}
          pattern={REGEXP_ONLY_DIGITS}
          autoFocus={autoFocus}
          className={hasError ? "[&_input]:!border-red-500 [&_input]:!ring-red-500" : ""}
        >
          <InputOTPGroup className={hasError ? "[&>div]:border-red-500" : ""}>
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <InputOTPSlot key={i} index={i} />
            ))}
          </InputOTPGroup>
        </InputOTP>
      </div>
      {hasError && (
        <p className="text-sm text-red-500 font-medium">{errorMessage}</p>
      )}
    </div>
  );
}

export function RestrictedDialog({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <Dialog open={open} onOpenChange={() => {}}>
      <DialogContent
        showCloseButton={false}
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-md p-1.5 opacity-70 hover:opacity-100 hover:bg-muted transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
        {children}
      </DialogContent>
    </Dialog>
  );
}
