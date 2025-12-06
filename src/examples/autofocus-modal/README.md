# Autofocus on Modal

## Description

When a modal opens with a single input (or a primary field), it should be automatically focused to allow the user to start typing immediately.

## Why it matters

- **Efficiency**: Users can start typing without additional action
- **Accessibility**: Keyboard users don't need to navigate to find the input
- **User experience**: Reduces friction and speeds up interactions

## Implementation

```tsx
// Good example - with autoFocus
<Input autoFocus placeholder="Enter a name..." />

// Bad example - without autoFocus
<Input placeholder="Enter a name..." />
```

## When to apply

- Modals with a single input field
- Search modals
- Simple forms (quick add item)

## When not to apply

- Modals with multiple fields without a clear hierarchy
- Confirmation modals (focus should be on the confirmation button)
- Modals with content to read before interaction
