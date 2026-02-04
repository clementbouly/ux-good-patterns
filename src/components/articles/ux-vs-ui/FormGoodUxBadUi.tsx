import { useState, useRef, useEffect } from "react";
import { countries } from "./countries";
import { EMAIL_REGEX, type Translations } from "./types";

type Props = {
  translations: Translations;
  lang: "en" | "fr";
};

export function FormGoodUxBadUi({ translations: t, lang }: Props) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [country, setCountry] = useState("");
  const [countryError, setCountryError] = useState("");
  const [countrySearch, setCountrySearch] = useState("");
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [motivation, setMotivation] = useState("");
  const [motivationError, setMotivationError] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const maxChars = 20;
  const charCount = motivation.length;
  const isOverLimit = charCount > maxChars;

  const validateEmail = (value: string) => {
    if (!value) {
      setEmailError(t.emailRequired);
      return false;
    }
    if (!EMAIL_REGEX.test(value)) {
      setEmailError(t.emailError);
      return false;
    }
    setEmailError("");
    return true;
  };

  const handleEmailBlur = () => {
    // Good UX: validate only on blur
    if (email) validateEmail(email);
  };

  const filteredCountries = countries.filter((c) => {
    const name = lang === "fr" ? c.nameFr : c.name;
    return name.toLowerCase().includes(countrySearch.toLowerCase());
  });

  const selectedCountry = countries.find((c) => c.code === country);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsCountryOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const isEmailValid = validateEmail(email);

    const isCountryValid = !!country;
    if (!isCountryValid) {
      setCountryError(t.countryRequired);
    } else {
      setCountryError("");
    }

    const isMotivationValid = !isOverLimit;
    if (!isMotivationValid) {
      setMotivationError(t.motivationTooLong);
    } else {
      setMotivationError("");
    }

    if (isEmailValid && isCountryValid && isMotivationValid) {
      alert(t.submitSuccess);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ all: "revert" }}>
      <div style={{ marginBottom: "12px" }}>
        <label style={{ display: "block", marginBottom: "4px" }}>{t.email} <span style={{ color: "red" }}>*</span></label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={handleEmailBlur}
          placeholder={t.emailPlaceholder}
          style={{ all: "revert", width: "100%", boxSizing: "border-box" }}
        />
        {emailError && (
          <span style={{ color: "red", fontSize: "12px" }}>{emailError}</span>
        )}
      </div>

      <div style={{ marginBottom: "12px", position: "relative" }} ref={dropdownRef}>
        <label style={{ display: "block", marginBottom: "4px" }}>{t.country} <span style={{ color: "red" }}>*</span></label>
        {/* Good UX: searchable dropdown */}
        <div
          onClick={() => setIsCountryOpen(!isCountryOpen)}
          style={{
            all: "revert",
            width: "100%",
            boxSizing: "border-box",
            padding: "4px 8px",
            border: "2px inset",
            cursor: "pointer",
            backgroundColor: "white",
          }}
        >
          {selectedCountry
            ? lang === "fr"
              ? selectedCountry.nameFr
              : selectedCountry.name
            : t.countryPlaceholder}
        </div>
        {isCountryOpen && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              backgroundColor: "white",
              border: "1px solid #ccc",
              maxHeight: "200px",
              overflowY: "auto",
              zIndex: 10,
            }}
          >
            <input
              type="text"
              value={countrySearch}
              onChange={(e) => setCountrySearch(e.target.value)}
              placeholder={t.countrySearch}
              onClick={(e) => e.stopPropagation()}
              style={{
                all: "revert",
                width: "100%",
                boxSizing: "border-box",
                padding: "4px 8px",
                borderBottom: "1px solid #ccc",
              }}
              autoFocus
            />
            {filteredCountries.length === 0 ? (
              <div style={{ padding: "8px", color: "#666" }}>{t.countryNoResults}</div>
            ) : (
              filteredCountries.map((c) => (
                <div
                  key={c.code}
                  onClick={() => {
                    setCountry(c.code);
                    setIsCountryOpen(false);
                    setCountrySearch("");
                  }}
                  style={{
                    padding: "8px",
                    cursor: "pointer",
                    backgroundColor: country === c.code ? "#e0e0e0" : "white",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f0f0f0")}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      country === c.code ? "#e0e0e0" : "white")
                  }
                >
                  {lang === "fr" ? c.nameFr : c.name}
                </div>
              ))
            )}
          </div>
        )}
        {countryError && (
          <span style={{ color: "red", fontSize: "12px" }}>{countryError}</span>
        )}
      </div>

      <div style={{ marginBottom: "12px" }}>
        <label style={{ display: "block", marginBottom: "4px" }}>
          {t.motivation}{" "}
          <span style={{ fontWeight: "normal", color: "#666" }}>({t.motivationMaxChars})</span>
        </label>
        {/* Good UX: character counter, no hard limit */}
        <textarea
          value={motivation}
          onChange={(e) => setMotivation(e.target.value)}
          placeholder={t.motivationPlaceholder}
          rows={3}
          style={{ all: "revert", width: "100%", boxSizing: "border-box", resize: "none" }}
        />
        <div
          style={{
            fontSize: "12px",
            textAlign: "right",
            color: isOverLimit ? "red" : "#666",
          }}
        >
          {charCount}/{maxChars}
        </div>
        {motivationError && (
          <span style={{ color: "red", fontSize: "12px" }}>{motivationError}</span>
        )}
      </div>

      {/* Good UX: visual hierarchy between buttons, primary action on the right */}
      <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}>
        <button type="button" style={{ all: "revert" }}>
          {t.cancel}
        </button>
        <button
          type="submit"
          style={{
            all: "revert",
            backgroundColor: "#000",
            color: "#fff",
            padding: "6px 16px",
            border: "none",
            cursor: "pointer",
          }}
        >
          {t.submit}
        </button>
      </div>
    </form>
  );
}
