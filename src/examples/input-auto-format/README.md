# Auto-format inputs with mobile keyboard

## The Problem

When users enter structured data like credit card numbers, IBANs, or phone numbers, they often struggle with:
- Reading back long strings of numbers without visual breaks
- Accidentally making typos they can't easily spot
- Having to switch keyboards on mobile to enter numbers

## The Solution

1. **Auto-format as they type**: Add visual separators (spaces) to make numbers easier to read and verify
2. **Use `inputmode="numeric"`**: Show the numeric keyboard on mobile devices without the drawbacks of `type="number"`

## Why not `type="number"`?

- Adds unwanted spinner arrows
- Doesn't allow spaces or formatting characters
- Inconsistent behavior across browsers
- Scientific notation issues with large numbers

## Implementation Tips

- Use `inputmode="numeric"` for pure numbers (credit cards, IBAN)
- Use `type="tel"` for phone numbers (includes +, *, #)
- Store the raw value (without spaces) but display formatted
- Handle paste events to clean and format pasted content
- Consider max length based on the format (16 digits for most credit cards, up to 34 for IBAN)
- **Use example placeholders**: Show the expected format in the placeholder (e.g., `4242 4242 4242 4242`) instead of repeating the label (e.g., `Enter card number`). This helps users understand the expected format at a glance.

## Accessibility

- The formatted display helps users with cognitive disabilities verify their input
- `aria-describedby` can link to format hints
- Screen readers will read the actual input value
