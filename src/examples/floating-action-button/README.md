# Floating Action Button (FAB)

## Real-world example: LinkedIn

LinkedIn's desktop interface places the "Create a post" input at the top of the feed. When users scroll down to read content, this primary action disappears completely. To create a post, users must scroll all the way back to the top.

<video src="/videos/scroll-to-top.mp4" autoplay loop muted playsinline style="width: 100%; border-radius: 8px; margin: 1rem 0;"></video>

Compare this to X (Twitter), which keeps the compose button permanently visible in the left sidebar—a much better implementation of persistent primary actions.

## Description

A floating action button is a persistent, circular button that hovers above the UI, typically in the bottom-right corner. It provides instant access to the primary action of a screen, regardless of scroll position.

## Why it matters

- **Always accessible**: The primary action is never hidden, no matter how far users scroll
- **Reduced cognitive load**: Users don't need to remember where the action is or scroll back to find it
- **Faster task completion**: One tap away from the most important action at any time
- **Mobile-first**: Perfectly positioned for thumb reach on mobile devices
- **Visual hierarchy**: Clearly signals the most important action on the screen

## The psychology behind it

When a primary action disappears during scrolling, users experience a broken flow between intention and action. The moment inspiration strikes ("I want to post something!"), any friction—even scrolling back up—can cause that impulse to fade.

A FAB follows Fitts's Law: the time to reach a target is a function of distance and size. By keeping the button close and visible, you minimize the effort required to act on user intent.

## When to apply

- Social media feeds (create post, compose tweet)
- Email clients (compose new message)
- Note-taking apps (create new note)
- Task managers (add new task)
- Any screen with a single, dominant action that should always be accessible
- Content-heavy pages where the primary action would otherwise scroll out of view

## When not to apply

- Pages with multiple equally-important actions (FAB should represent ONE primary action)
- Desktop interfaces with persistent sidebars (sidebar placement may be better)
- Screens where the primary action requires context from the top of the page
- Forms or wizards where linear flow is important
- Pages with minimal scrolling where the action naturally stays visible

## Implementation tips

1. **One FAB per screen**: Multiple FABs dilute their importance and confuse users
2. **Bottom-right placement**: Convention for right-handed users; consider bottom-left for RTL languages
3. **Consistent positioning**: Keep the FAB in the same spot across your app
4. **Clear iconography**: Use universally understood icons (+ for create, pencil for compose)
5. **Appropriate elevation**: Use shadow to make it "float" above content
6. **Don't obstruct content**: Ensure it doesn't cover critical information or other interactive elements
7. **Consider extended FAB**: For complex actions, an extended FAB with text can improve clarity
8. **Responsive behavior**: On larger screens, consider transitioning to a sidebar or header placement
9. **Animation on scroll**: Optional subtle animation (hide on scroll down, show on scroll up) can reduce visual noise

## Accessibility considerations

- Ensure sufficient color contrast (WCAG AA minimum)
- Provide an accessible label (`aria-label`) describing the action
- Make sure it's keyboard focusable and activatable
- Consider users who may find floating elements distracting
