# Date of Birth Input

## Description

Date of birth is one of the most common form fields, yet it's almost always implemented poorly. Native date pickers and long dropdowns force users into slow, frustrating interactions to enter a value they already know by heart. Three simple text fields with auto-advance is faster, friendlier, and works better on mobile.

## Why it matters

- **Speed**: Typing "23061986" with auto-advance takes ~1.5s. Navigating a calendar picker back to 1986 takes 10+ taps. A year dropdown with 100+ entries is a scrolling marathon.
- **Familiar mental model**: Users already think of their birthday as three numbers (DD, MM, YYYY). Surfacing that structure directly matches their intent.
- **Mobile keyboard**: `inputmode="numeric"` shows the numeric keypad, with no switching back to letters and fewer mistaps.
- **Browser autofill**: With `autocomplete="bday-day" / "bday-month" / "bday-year"`, browsers can autofill the saved birthday in one shot.
- **Inline validation**: Each field has clear constraints (max 31 / max 12 / 4-digit year) so errors can be surfaced precisely.

## Implementation tips

- Use `type="text"` with `inputmode="numeric"` and `pattern="[0-9]*"`, not `type="number"` (which adds spinners, strips leading zeros, breaks `maxLength`).
- Auto-advance to the next field when the current one is full. Bonus: advance early when the first digit can only be a single-digit value (day ≥ 4, month ≥ 2).
- Handle backspace: if the field is empty, jump back to the previous field so users can correct mistakes naturally.
- Support paste: if the user pastes "23/06/1986" (or "23-06-1986", "23.06.1986", "23061986"), parse and fill all three fields.
- Validate against the real calendar: 31 days max isn't enough. Check days per month and leap years.
- Adapt order to locale: DD/MM/YYYY for most of the world, MM/DD/YYYY for en-US.
- Add `autocomplete="bday-day" / "bday-month" / "bday-year"` for autofill.
- Show placeholders (DD, MM, YYYY) in addition to labels so the expected format is always visible.

## What to avoid

- **Native `<input type="date">`**: opens the OS picker on mobile, which forces month-by-month navigation back through decades. Even on desktop, the picker starts at the current month, requiring hundreds of clicks to reach a birth year.
- **Three dropdowns**: the year dropdown with 100+ options is painful to scroll on mobile, and slower than typing on desktop.
- **Single text field with mask**: better than the above, but loses per-field validation and the natural rhythm of typing through three separate fields.

## When to apply

- Date of birth on any signup, KYC, or profile form.
- Any historical date the user knows exactly (anniversary, expiry date, etc.).

## When not to apply

- Picking a future date close to today (appointment, delivery, reservation). A calendar picker is genuinely faster here.
- Picking a date range: use a date range picker.
