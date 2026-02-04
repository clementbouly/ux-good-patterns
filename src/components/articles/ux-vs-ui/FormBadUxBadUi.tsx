import { useState } from "react";
import { countries } from "./countries";
import { EMAIL_REGEX, type Translations } from "./types";

type Props = {
  translations: Translations;
  lang: "en" | "fr";
};

export function FormBadUxBadUi({ translations: t, lang }: Props) {
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
    const value = e.target.value.slice(0, 20);
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
    <form onSubmit={handleSubmit} style={{ all: "revert" }}>
      <div style={{ marginBottom: "12px" }}>
        <label style={{ display: "block", marginBottom: "4px" }}>{t.email}</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          style={{ all: "revert", width: "100%", boxSizing: "border-box" }}
        />
        {emailError && (
          <span style={{ color: "red", fontSize: "12px" }}>{emailError}</span>
        )}
      </div>

      <div style={{ marginBottom: "12px" }}>
        <label style={{ display: "block", marginBottom: "4px" }}>{t.country}</label>
        {/* Bad UX: long dropdown without search */}
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          style={{ all: "revert", width: "100%", boxSizing: "border-box" }}
        >
          <option value="">{t.countryPlaceholder}</option>
          {countries.map((c) => (
            <option key={c.code} value={c.code}>
              {lang === "fr" ? c.nameFr : c.name}
            </option>
          ))}
        </select>
      </div>

      <div style={{ marginBottom: "12px" }}>
        <label style={{ display: "block", marginBottom: "4px" }}>{t.motivation}</label>
        {/* Bad UX: no counter, silently truncated */}
        <textarea
          value={motivation}
          onChange={handleMotivationChange}
          rows={3}
          style={{ all: "revert", width: "100%", boxSizing: "border-box", resize: "none" }}
        />
      </div>

      {/* Bad UX: buttons look identical */}
      <div style={{ display: "flex", gap: "8px" }}>
        <button type="submit" style={{ all: "revert" }}>
          {t.submit}
        </button>
        <button type="button" style={{ all: "revert" }}>
          {t.cancel}
        </button>
      </div>
    </form>
  );
}
