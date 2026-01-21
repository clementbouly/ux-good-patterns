import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2 } from "lucide-react";
import { useDemoI18n } from "@/hooks/useI18n";

export function BadExample() {
  const { td } = useDemoI18n();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const isFormValid = email.includes("@") && message.length >= 10;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      setIsSuccess(true);
    }
  };

  const handleReset = () => {
    setEmail("");
    setMessage("");
    setIsSuccess(false);
  };

  if (isSuccess) {
    return (
      <div className="space-y-4 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
          <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400" />
        </div>
        <h3 className="text-lg font-semibold">{td("form.messageSent")}</h3>
        <p className="text-sm text-muted-foreground">{td("form.wellGetBack")}</p>
        <Button variant="outline" onClick={handleReset} className="w-full">
          {td("form.sendAnother")}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-2">
        <Label htmlFor="email-bad">{td("common.email")}</Label>
        <Input
          id="email-bad"
          type="email"
          placeholder={td("form.emailPlaceholder")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="message-bad">{td("form.messageLabel")}</Label>
        <Textarea
          id="message-bad"
          placeholder={td("form.messagePlaceholder")}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <Button type="submit" disabled={!isFormValid} className="w-full">
        {td("form.sendMessage")}
      </Button>

      {!isFormValid && (
        <p className="text-center text-xs text-muted-foreground">{td("form.fillAllFields")}</p>
      )}
    </form>
  );
}
