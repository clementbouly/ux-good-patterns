import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { useDemoI18n } from "@/hooks/useI18n";

type FieldErrors = {
  email?: string;
  message?: string;
};

export function GoodExample() {
  const { td } = useDemoI18n();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = (): boolean => {
    const newErrors: FieldErrors = {};

    if (!email) {
      newErrors.email = td("form.emailRequired");
    } else if (!email.includes("@")) {
      newErrors.email = td("form.emailInvalid");
    }

    if (!message) {
      newErrors.message = td("form.messageRequired");
    } else if (message.length < 10) {
      newErrors.message = `${td("form.messageMinLength")} (${message.length}/10)`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (validate()) {
      setIsSuccess(true);
    }
  };

  const handleReset = () => {
    setEmail("");
    setMessage("");
    setErrors({});
    setIsSubmitted(false);
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
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid gap-2">
        <Label htmlFor="email-good">{td("common.email")}</Label>
        <Input
          id="email-good"
          type="email"
          placeholder={td("form.emailPlaceholder")}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (isSubmitted) validate();
          }}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p
            id="email-error"
            role="alert"
            className="text-destructive flex items-center gap-1 text-sm"
          >
            <AlertCircle className="h-4 w-4" />
            {errors.email}
          </p>
        )}
      </div>

      <div className="grid gap-2">
        <Label htmlFor="message-good">{td("form.messageLabel")}</Label>
        <Textarea
          id="message-good"
          placeholder={td("form.messagePlaceholder")}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            if (isSubmitted) validate();
          }}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p
            id="message-error"
            role="alert"
            className="text-destructive flex items-center gap-1 text-sm"
          >
            <AlertCircle className="h-4 w-4" />
            {errors.message}
          </p>
        )}
      </div>

      <Button type="submit" className="w-full">
        {td("form.sendMessage")}
      </Button>
    </form>
  );
}
