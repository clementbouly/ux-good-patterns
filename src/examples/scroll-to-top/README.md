# Scroll to Top Button

## Description

On pages with long scrollable content, provide a floating button that appears after the user scrolls down, allowing them to quickly return to the top of the page with a single click.

## Why it matters

- **Reduced friction**: Users don't have to manually scroll through potentially hundreds of pixels of content
- **Accessibility**: Particularly helpful for users with motor impairments or those using trackpads
- **Mobile-friendly**: Essential on mobile where scrolling back up can be tedious, especially with thumb-based navigation
- **Time-saving**: Instant return to navigation, search, or header actions

## The psychology behind it

When users scroll down a long page, they build a mental model of how far they've traveled. The prospect of reversing that journey can feel daunting. A scroll-to-top button removes this friction by offering an instant "teleport" back to the starting point.

This follows the principle of providing shortcuts for experienced users while not cluttering the interface for others (the button only appears when needed).

## When to apply

- Long-form content (articles, documentation, terms of service)
- Infinite scroll feeds (social media, product listings)
- Search results pages
- Any page where users might scroll more than 2-3 viewport heights
- Single-page applications with dynamic content loading

## When not to apply

- Short pages that fit within 1-2 viewport heights
- Pages with sticky navigation that provides similar functionality
- Wizard/stepper flows where linear progression is intentional
- Modal dialogs or small scrollable containers (debatable - depends on content length)

## Implementation tips

1. **Appear after threshold**: Show the button only after scrolling 300-500px down
2. **Smooth scroll**: Use `behavior: 'smooth'` for a pleasant animation
3. **Consistent position**: Bottom-right corner is the convention (accessible to right-handed thumb on mobile)
4. **Subtle entrance**: Fade or slide in the button to avoid jarring appearance
5. **Clear affordance**: Use an upward arrow icon - universally understood
6. **Don't obstruct content**: Ensure the button doesn't cover important interactive elements
7. **Consider keyboard users**: The button should be focusable and activated with Enter/Space
