# Avoid Disabled Submit Buttons

## Description

Keep submit buttons enabled and display clear error messages when the user attempts to submit an incomplete or invalid form.

## Why it matters

- **Clarity**: Users understand exactly what's wrong and how to fix it
- **Discoverability**: A disabled button without explanation leaves users confused
- **Accessibility**: Screen readers can announce error messages, while a disabled button provides no context
- **User control**: Users can attempt submission and learn from the feedback

## The problem with disabled buttons

When you disable a submit button until a form is valid:

- Users don't know **why** the button is disabled
- They may not realize which field is incomplete or invalid
- It can feel like the interface is broken
- There's no opportunity to provide helpful guidance

## Better approach

1. Keep the submit button always enabled
2. Validate on submit
3. Display clear, inline error messages next to invalid fields
4. Use visual cues (red borders, icons) to draw attention
5. Include ARIA attributes for accessibility (`aria-invalid`, `aria-describedby`)

## When disabled buttons are acceptable

- During form submission (to prevent double-submit)
- When a prerequisite action is genuinely required (e.g., accepting terms)
- Wizard-style forms where previous steps must be completed
