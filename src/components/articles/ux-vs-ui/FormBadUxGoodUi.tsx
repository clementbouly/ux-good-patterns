import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { countries } from "./countries";
import { EMAIL_REGEX, type Translations } from "./types";

type Props = {
  translations: Translations;
  lang: "en" | "fr";
};

export function FormBadUxGoodUi({ translations: t, lang }: Props) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [country, setCountry] = useState("");
  const [motivation, setMotivation] = useState("");

  const validateEmail = (value: string) => {
    if (value && !EMAIL_REGEX.test(value)) {
      setEmailError(t.emailError);
    } else {
      setEmailError("");
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    // Bad UX: validate on every keystroke
    validateEmail(value);
  };

  const handleMotivationChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // Bad UX: silently truncate at 20 characters
    const value = e.target.value.slice(0, 35);
    setMotivation(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Bad UX: silently do nothing if required fields empty
    if (!email || !EMAIL_REGEX.test(email) || !country) {
      return;
    }

    alert(t.submitSuccess);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email-bad-good">{t.email}</Label>
        <Input
          id="email-bad-good"
          type="email"
          value={email}
          onChange={handleEmailChange}
          aria-invalid={!!emailError}
        />
        {emailError && (
          <p className="text-sm text-destructive">{emailError}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="country-bad-good">{t.country}</Label>
        {/* Bad UX: long dropdown without search */}
        <Select value={country} onValueChange={setCountry}>
          <SelectTrigger id="country-bad-good" className="w-full">
            <SelectValue placeholder={t.countryPlaceholder} />
          </SelectTrigger>
          <SelectContent>
            {countries.map((c) => (
              <SelectItem key={c.code} value={c.code}>
                {lang === "fr" ? c.nameFr : c.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="motivation-bad-good">{t.motivation}</Label>
        {/* Bad UX: no counter, silently truncated, question in placeholder instead of label */}
        <Textarea
          id="motivation-bad-good"
          value={motivation}
          onChange={handleMotivationChange}
          placeholder={t.motivationPlaceholder}
          rows={3}
          className="resize-none"
        />
      </div>

      {/* Bad UX: buttons look identical (both primary) */}
      <div className="flex gap-2">
        <Button type="submit">{t.submit}</Button>
        <Button type="button">{t.cancel}</Button>
      </div>
    </form>
  );
}
