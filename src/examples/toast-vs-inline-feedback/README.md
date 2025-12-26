# Toast vs Inline Feedback

## Description

When users perform an action, feedback should appear where they're already looking — not in a distant corner of the screen that requires a visual scan.

Toast notifications force users to shift their attention away from their current focus, which violates the Gestalt principle of proximity and can be missed entirely by users with screen magnifiers.

## Why it matters

- **Cognitive load**: Diagonal eye movement to find feedback is unnecessary work
- **Accessibility**: Users with screen magnifiers may never see toasts positioned off-screen
- **Missed feedback**: Auto-dismissing toasts can disappear before users notice them
- **Anxiety**: Time-limited toasts create pressure to read quickly

## The consensus

- **Jakob Nielsen** (March 2024): Calls toasts a "burnt GUI widget"
- **GitHub Primer**: Officially banned toasts — "Toasts pose significant accessibility concerns and are not recommended for use"
- **Adam Silver**: Lists 6 reasons toasts are problematic

## When to use inline feedback

- Copy to clipboard confirmations
- Form field validation
- Toggle state changes
- Any action where the user's focus is on a specific element

## When toasts might still be acceptable

- Background processes completing (file upload finished)
- System notifications unrelated to current task
- Information users won't mind missing

## References

- [Jakob Nielsen - Toast notifications are a burnt GUI widget](https://jakobnielsenphd.substack.com/p/ux-roundup-20240325)
- [GitHub Primer - Toasts accessibility](https://primer.style/accessibility/toasts)
- [Adam Silver - 6 reasons toast messages are a bad idea](https://adamsilver.io/blog/the-problem-with-toast-messages-and-what-to-do-instead/)
