## Description

A floating label sits inside the field as a placeholder initially and animates to the top when the user focuses the field or enters text. This method solves the accessibility issue of disappearing placeholders while keeping a minimal and clean design.

## Why it matters

- **Reduces Cognitive Load**: If a user gets distracted or looks away, they return to a field filled with **\*\*** and no context. Persistent labels prevent this frustration.
- **Prevents Errors**: By keeping the label visible, users can confidently verify they are typing the correct information
- **Improves Mobile Experience**: On mobile devices, the virtual keyboard often obscures part of the screen. Losing the label inside the field makes it even harder to track progress through a form.

## When to apply

- Complex Forms (Registration, Checkout, Profile Settings)
- Sensitive Data (Password resets, banking information, or addresses where accuracy is critical.)
- Similar Fields: When fields look identical but serve different purposes (e.g., "New Password" vs. "Confirm Password", or "Billing Address" vs. "Shipping Address")

## When not to apply

- Single-Input Interfaces like a standalone search bar
- Extremely Constrained Vertical Space: If vertical pixels are at an absolute premium (e.g., a sticky footer stock ticker)
