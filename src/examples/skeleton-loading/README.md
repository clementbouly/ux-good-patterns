# Skeleton Loading vs Spinner

## Description

When loading content, display animated placeholder shapes that mirror the layout of the actual content instead of showing a generic spinner. This technique is called "skeleton loading" or "content placeholder".

## Why it matters

- **Perceived performance**: Skeletons make the app feel faster because users see immediate visual feedback that matches the expected layout
- **Reduced cognitive load**: Users understand what type of content is coming, reducing surprise and reorientation time
- **Less jarring**: Content smoothly replaces the skeleton vs. a sudden jump from spinner to full content
- **Layout stability**: The page structure is established immediately, preventing layout shifts (CLS)

## The psychology behind it

Spinners communicate "wait, something is happening" but give no context. Skeletons communicate "here's what you're about to see" - this subtle shift changes user perception from passive waiting to active anticipation.

Studies show that skeleton screens can reduce perceived wait time by up to 10-20% compared to traditional spinners.

## When to apply

- Lists of items (users, products, posts)
- Cards with structured content
- Profile pages with avatar, name, bio
- Dashboards with multiple data sections
- Any content with a predictable structure

## When not to apply

- Very short loading times (< 300ms) - use nothing instead
- Unpredictable content structure
- Full-page initial loads (prefer a branded splash screen)
- Background data refreshes where content is already visible

## Implementation tips

1. **Match the layout**: Skeleton shapes should closely match the actual content dimensions
2. **Use subtle animation**: A gentle pulse or shimmer effect indicates activity
3. **Show 3-5 items**: Don't show too many skeleton items, it looks artificial
4. **Smooth transition**: Fade or animate the transition from skeleton to real content
5. **Consistent timing**: Keep the skeleton visible for at least 300ms to avoid flashing
