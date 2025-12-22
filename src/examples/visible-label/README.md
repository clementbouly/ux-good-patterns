# Disable Submit Button During Loading

## Description

When a form is being submitted, the submit button should be disabled and show a loading indicator. This prevents users from accidentally submitting the form multiple times.

## Why it matters

- **Prevents duplicate submissions**: Avoid creating duplicate records or charging users twice
- **Clear feedback**: Users know their action was registered
- **Reduces anxiety**: Visual feedback reassures users something is happening

## When to apply

- Form submissions (login, signup, checkout)
- Any action that triggers an API call
- Payment processing
- File uploads

## When not to apply

- Instant local actions (toggling a checkbox)
- Actions that can safely be repeated (refresh button)
