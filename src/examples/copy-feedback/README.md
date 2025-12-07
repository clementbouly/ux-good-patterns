# Copy to Clipboard Feedback

## Description

When users click a "copy" button, they should receive immediate visual feedback confirming that the content was successfully copied to their clipboard.

## Why it matters

- **Confirmation**: Users need to know their action succeeded before moving on
- **Trust**: Without feedback, users may click multiple times or doubt the functionality
- **Accessibility**: Visual feedback helps all users understand the system state
- **Reduced errors**: Users won't accidentally paste old content thinking the copy failed

## When to apply

- Copy buttons for code snippets
- Share links or referral codes
- API keys or tokens
- Any "copy to clipboard" functionality

## When not to apply

- When the copied content is immediately used in the same interface (like a paste field)
- Keyboard shortcuts (Cmd/Ctrl+C) - users expect these to work silently
