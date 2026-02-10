# Toggle Switches for Immediate Settings

## Description

When settings take effect immediately and are independent from one another, use toggle switches instead of checkboxes. Toggles communicate instant action — like a light switch — while checkboxes imply a deferred selection that needs confirmation.

## Why it matters

- **Mental model**: Toggles mirror physical switches — users expect immediate effect
- **No confusion**: With checkboxes + a Save button, users wonder "is the change already applied or not?"
- **Reduced friction**: No extra confirmation step needed for independent settings

## When to apply

- App preferences (dark mode, notifications, autoplay)
- Feature toggles with instant effect
- Any independent on/off setting that doesn't need batch processing

## When not to apply

- Grouped selections that need to be submitted together (use checkboxes)
- Hierarchical options with parent/child relationships (use checkboxes)
- Form fields that are part of a larger submit workflow
