# Don't Limit User Input

## Description

When users type in a text field with a character limit, don't silently block their input at the limit. Instead, let them continue typing and show clear visual feedback that they've exceeded the allowed length — ideally by highlighting the overflow text in red.

## Why it matters

- **User control**: Users can see their full thought before deciding what to cut
- **Transparency**: Clear feedback explains why their input is invalid
- **Less frustration**: Users understand the constraint instead of wondering why they can't type
- **Better editing**: Users can paste long text and trim it down, rather than being blocked mid-paste

## When to apply

- Text inputs with character limits (titles, usernames, bios)
- Textareas with length restrictions (descriptions, comments, messages)
- Any form field where users might naturally exceed the limit

## When not to apply

- Technical fields where overflow could cause issues (e.g., database field overflow)
- Real-time systems where invalid data should never be entered
- Fields with very short limits where overflow is unlikely (e.g., 2-digit inputs)

## Implementation

Native `<input>` and `<textarea>` don't support styling individual characters. Two options:

1. **Overlay technique** — Layer a styled div behind a transparent textarea
2. **Use a library** — [rich-textarea](https://github.com/inokawa/rich-textarea) (~3kb) handles edge cases

## Resources

- [rich-textarea](https://github.com/inokawa/rich-textarea) — Lightweight React component for styled textareas
- [CSS-Tricks: Syntax Highlighting in Textarea](https://css-tricks.com/creating-an-editable-textarea-that-supports-syntax-highlighted-code/) — Deep dive on the overlay technique
