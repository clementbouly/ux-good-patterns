import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2 } from "lucide-react";

export function BadExample() {
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
        <h3 className="text-lg font-semibold">Message sent!</h3>
        <p className="text-sm text-muted-foreground">We'll get back to you soon.</p>
        <Button variant="outline" onClick={handleReset} className="w-full">
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-2">
        <Label htmlFor="email-bad">Email</Label>
        <Input
          id="email-bad"
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="message-bad">Message (min 10 characters)</Label>
        <Textarea
          id="message-bad"
          placeholder="Your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <Button type="submit" disabled={!isFormValid} className="w-full">
        Send message
      </Button>

      {!isFormValid && (
        <p className="text-center text-xs text-muted-foreground">
          Please fill all fields correctly to enable the button
        </p>
      )}
    </form>
  );
}
