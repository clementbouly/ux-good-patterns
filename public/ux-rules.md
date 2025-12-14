# UX Best Practices for AI-Assisted Development

> Auto-generated from https://ux-good-patterns.netlify.app
> Use this file as context when asking AI to generate UI components.

---

# Patterns

# Auto-submit Verification Code

## Description

When users enter the last digit of a verification code, automatically validate it instead of requiring them to click a "Verify" button or press Enter.

## Why it matters

- **Reduced friction**: One less action for the user to complete
- **Faster flow**: Users move to the next step immediately after typing
- **Natural expectation**: Users expect the system to "know" when they're done
- **Mobile-friendly**: No need to find and tap a submit button on small screens

## The psychology behind it

Verification codes have a fixed, known length (usually 4-6 digits). When users enter the last digit, their intent is clear - they want to verify. Making them take an additional action adds unnecessary cognitive load and feels redundant.

## When to apply

- OTP/SMS verification codes
- Email verification codes
- Two-factor authentication codes
- Any fixed-length numeric input where completion is unambiguous

## When not to apply

- Variable-length codes or passwords
- When users might want to review before submitting
- High-stakes irreversible actions (prefer explicit confirmation)
- If the verification process is slow (> 2 seconds) - show clear loading state

## Implementation tips

1. **Show loading state**: Display a spinner immediately after auto-submit to confirm action was taken
2. **Handle errors gracefully**: Clear the input and refocus so users can retry immediately
3. **Disable input during verification**: Prevent additional input while processing
4. **Keep it fast**: Auto-submit works best when verification is quick (< 1 second)
5. **Provide visual feedback**: The transition from input to verified state should be smooth


---

# Autofocus on Modal

## Description

When a modal opens with a single input (or a primary field), it should be automatically focused to allow the user to start typing immediately.

## Why it matters

- **Efficiency**: Users can start typing without additional action
- **Accessibility**: Keyboard users don't need to navigate to find the input
- **User experience**: Reduces friction and speeds up interactions

## When to apply

- Modals with a single input field
- Search modals
- Simple forms (quick add item)

## When not to apply

- Modals with multiple fields without a clear hierarchy
- Confirmation modals (focus should be on the confirmation button)
- Modals with content to read before interaction


---

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


---

# Form Validation with Error Feedback

## Description

Keep submit buttons enabled and display clear, inline error messages when the user attempts to submit an incomplete or invalid form. Avoid disabling buttons based on form validity.

## Why it matters

- **Clarity**: Users understand exactly what's wrong and how to fix it
- **Discoverability**: A disabled button without explanation leaves users confused
- **Accessibility**: Screen readers can announce error messages, while a disabled button provides no context
- **User control**: Users can attempt submission and learn from the feedback

## The problem with disabled buttons

When you disable a submit button until a form is valid:

- Users don't know **why** the button is disabled
- They may not realize which field is incomplete
- It can feel like the interface is broken
- There's no opportunity to provide helpful guidance

## Better approach

1. Keep the submit button always enabled
2. Validate on submit (and optionally on change after first submission)
3. Display clear, inline error messages next to invalid fields
4. Use visual cues (red borders, icons) to draw attention
5. Include ARIA attributes for accessibility (`aria-invalid`, `aria-describedby`)

## When to apply

- Contact forms
- Login/signup forms
- Any form where users need guidance on validation rules
- Forms with multiple required fields

## When disabled buttons are acceptable

- During form submission (to prevent double-submit)
- When a prerequisite action is genuinely required (e.g., accepting terms)
- Wizard-style forms where previous steps must be completed


---

# Auto-format inputs with mobile keyboard

## The Problem

When users enter structured data like credit card numbers, IBANs, or phone numbers, they often struggle with:
- Reading back long strings of numbers without visual breaks
- Accidentally making typos they can't easily spot
- Having to switch keyboards on mobile to enter numbers

## The Solution

1. **Auto-format as they type**: Add visual separators (spaces) to make numbers easier to read and verify
2. **Use `inputmode="numeric"`**: Show the numeric keyboard on mobile devices without the drawbacks of `type="number"`

## Why not `type="number"`?

- Adds unwanted spinner arrows
- Doesn't allow spaces or formatting characters
- Inconsistent behavior across browsers
- Scientific notation issues with large numbers

## Implementation Tips

- Use `inputmode="numeric"` for pure numbers (credit cards, IBAN)
- Use `type="tel"` for phone numbers (includes +, *, #)
- Store the raw value (without spaces) but display formatted
- Handle paste events to clean and format pasted content
- Consider max length based on the format (16 digits for most credit cards, up to 34 for IBAN)
- **Use example placeholders**: Show the expected format in the placeholder (e.g., `4242 4242 4242 4242`) instead of repeating the label (e.g., `Enter card number`). This helps users understand the expected format at a glance.

## Accessibility

- The formatted display helps users with cognitive disabilities verify their input
- `aria-describedby` can link to format hints
- Screen readers will read the actual input value


---

# Paste Button for OTP Code

## Description

Add a visible "Paste" button next to OTP input fields, allowing users to quickly fill the code from their clipboard with a single click instead of relying on keyboard shortcuts.

## Why it matters

- **Discoverability**: Not all users know Ctrl+V/Cmd+V, especially on mobile or for less tech-savvy users
- **Mobile-friendly**: On mobile, the paste keyboard shortcut is less intuitive; a button is easier to tap
- **Fallback for native features**: WebOTP and `autocomplete="one-time-code"` don't always work (email codes, different apps, browser limitations)
- **Reduced friction**: One click vs. focus input + keyboard shortcut

## The psychology behind it

Users receiving an OTP often have it in their clipboard already (from email, SMS app, password manager). Showing a visible paste action reduces cognitive load — they don't have to remember or discover the paste shortcut.

This follows the principle of "recognition over recall" from Nielsen's heuristics.

## Browser permission: is it a UX problem?

The Clipboard API (`navigator.clipboard.readText()`) triggers a browser permission prompt on first use. **This is not a deal-breaker**, here's why:

### Why the permission is acceptable

1. **One-time only**: Once granted, the permission persists for the site. Users won't see the prompt again.
2. **Contextually appropriate**: The prompt appears right after clicking "Paste" — it's expected, not intrusive.
3. **Still faster**: Even with the permission step, the flow is: click → accept (once) → code filled. That's 2 clicks vs typing 6 characters manually.
4. **Covers real use cases**: WebOTP and `autocomplete="one-time-code"` are primarily for mobile/SMS. On desktop with email codes, the paste button remains valuable.

### The trade-off

- **Desktop**: Paste button is highly useful (email codes, password managers)
- **Mobile**: Prefer `autocomplete="one-time-code"` which has no permission friction

### Technical requirements

- HTTPS (or localhost)
- User interaction (the button click satisfies this)
- Permission grant (browser will prompt on first use)

This is intentional for security — websites shouldn't silently read clipboard contents.

## When to apply

- OTP/verification code inputs
- Any form field where users commonly paste content
- Desktop and mobile applications
- Email-based verification codes (where WebOTP doesn't help)

## When not to apply

- Password fields (security concerns with showing paste button)
- Fields where paste is rarely used
- When space is extremely constrained

## Implementation tips

1. **Handle permission gracefully**: The clipboard read may fail; don't break the flow
2. **Filter the pasted content**: Extract only digits for OTP, validate format
3. **Position clearly**: Place the button next to the input, not far away
4. **Use clear iconography**: Clipboard/paste icon is universally understood
5. **Combine with auto-submit**: Paste + immediate validation = fastest flow
6. **Keep Ctrl+V working**: The button is an addition, not a replacement

## Related patterns

- [Verification Code Input](/example/verification-code-input) - Separate vs single input design
- [Auto-submit Verification Code](/example/auto-submit-code) - Automatic validation on completion


---

# Progressive Loading Messages

## Description

When performing long operations (AI generation, complex calculations, report building), show a sequence of evolving status messages instead of a static "Loading..." text. This gives users insight into what's happening behind the scenes.

## Why it matters

- **Perceived progress**: Changing messages create a sense of movement and progress, even when you can't show a real percentage
- **Reduced anxiety**: Users understand that work is being done, not that the app is stuck
- **Transparency**: Revealing the "steps" builds trust by showing the complexity of the operation
- **Engagement**: Dynamic content keeps attention and reduces abandonment during long waits

## The psychology behind it

A static "Loading..." feels like a black box - users have no idea what's happening or how long it will take. Progressive messages create a narrative: "First we do X, then Y, then Z" - this storytelling approach makes waiting feel purposeful.

Even if the messages are approximate or decorative (not tied to actual backend steps), they dramatically improve the perceived experience.

## When to apply

- AI content generation (ChatGPT, image generation, etc.)
- Report or export generation
- Complex data processing
- File uploads with server-side processing
- Any operation taking more than 2-3 seconds

## When not to apply

- Short operations (< 2 seconds) - just use a spinner
- Operations with real progress data - use a progress bar instead
- Background tasks where user attention isn't needed

## Implementation tips

1. **Keep messages relevant**: Messages should relate to the actual task being performed
2. **Timing matters**: Change messages every 1-2 seconds for optimal pacing
3. **End gracefully**: The last message should hint that completion is near ("Almost there...", "Finalizing...")
4. **Don't loop**: If the operation takes longer than expected, stay on the last message rather than restarting
5. **Animate transitions**: Smooth fade or slide transitions between messages feel polished
6. **Consider humor**: For the right audience, playful messages can reduce frustration ("Teaching hamsters to run faster...")


---

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


---

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


---

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


---

# Verification Code Paste Support

## Description

When users need to enter a verification code (OTP, 2FA), they should be able to paste the entire code at once instead of typing each digit individually.

## Why it matters

- **Speed**: Users often receive codes via SMS or email and want to copy-paste them quickly
- **Error reduction**: Manual digit-by-digit entry is prone to typos
- **Mobile experience**: Pasting is much easier than switching keyboards and typing on small screens
- **Accessibility**: Some users have difficulty with precise typing

## When to apply

- Two-factor authentication (2FA) inputs
- Email/phone verification codes
- One-time passwords (OTP)
- Any multi-digit code entry

## When not to apply

- PIN codes that users should memorize (security consideration)
- Cases where you explicitly want to slow down entry (CAPTCHA-like scenarios)


---

# Articles

# The Complete Guide to OTP UX

One-Time Passwords (OTP) are everywhere: account verification, two-factor authentication, password resets. Yet, the UX around them is often an afterthought. This guide covers **4 key areas** to make your OTP flow seamless.

---

## 1. Email Design: Make the Code Scannable

Before users even interact with your form, they need to find the code in their inbox. This is where many services fail.

### Why it matters

- Users scan emails in **2-3 seconds** looking for the code
- A code buried in text forces them to read the entire email
- Clear visual hierarchy = faster copy/paste = less frustration

### Best practices

1. **Center the code** with generous whitespace
2. **Use a large, monospace font** for the digits
3. **Add visual contrast** (background box, different color)
4. **Show expiration time** clearly
5. **Keep the email short** — users don't read marketing copy when they need a code

---

## 2. Paste Support: The Make-or-Break Feature

Users almost always have the code in their clipboard (from email, SMS, or password manager). If they can't paste it, frustration kicks in immediately.

### The problem with naive implementations

Many "separate fields" implementations break paste:
- Each input only accepts one character
- Pasting fills only the first field and discards the rest
- Users are forced to type digit by digit

### The solution

Handle the `paste` event properly:
1. Intercept `Ctrl+V` / `Cmd+V` on any field
2. Extract digits from the pasted content
3. Distribute them across all fields automatically

Modern OTP libraries (like `input-otp`) handle this out of the box. If building custom inputs, **paste support is non-negotiable**.

---

## 3. Auto-Submit: Remove the Extra Click

Once all digits are entered, why make users click "Verify"?

### Why auto-submit wins

- **Saves one interaction** (no button click needed)
- **Feels faster** even if the actual time is the same
- **Reduces cognitive load** — users don't have to decide when to submit

### Implementation notes

- Trigger validation when `value.length === maxLength`
- Show a loading state immediately
- Handle errors gracefully (clear input, show message)

---

## 4. Paste Button: The Hidden Accelerator

On mobile, pasting requires multiple steps: long press → context menu → tap "Paste". A visible paste button reduces this to a single tap.

### The browser permission question

Yes, the Clipboard API triggers a permission prompt. But:

1. **It's one-time** — users won't see it again after accepting
2. **It's contextual** — the prompt appears right after clicking "Paste"
3. **It's still faster** than typing 6 digits manually

### When to use it

- **Desktop**: Highly recommended (email codes, password managers)
- **Mobile**: Optional fallback — `autocomplete="one-time-code"` handles most cases

---

## The Ultimate OTP Flow

Combine all patterns for the best experience:

1. **Email**: Code prominently displayed, easy to copy
2. **Input**: Full paste support (Ctrl+V fills all fields)
3. **Behavior**: Auto-submit when complete
4. **Fallback**: Visible paste button for power users

The goal is simple: **minimize the time between receiving the code and being verified**.

---
