# UX Best Practices for AI-Assisted Development

> Auto-generated from https://uxgoodpatterns.com

## Instructions for AI

**Apply these UX patterns automatically when generating UI components.**

---

## Patterns

### Auto-submit verification code

When building OTP/verification code inputs, trigger validation automatically when value.length === maxLength. Implementation: show spinner immediately after auto-submit, disable input during verification, on error clear input and refocus for retry, ensure verification is fast (<1s ideally).

### Autofocus on Modal input

When opening a modal with a single input field (search, quick add), autofocus that input so users can type immediately. Implementation: use autoFocus prop or useEffect with inputRef.current?.focus(). Don't autofocus in confirmation modals (focus the confirm button instead) or modals with content to read first.

### Copy to clipboard feedback

When implementing copy-to-clipboard, show inline feedback next to the button, not a toast. Implementation: swap icon from Copy to Check, optionally show 'Copied!' text, revert after 2s with setTimeout. Use navigator.clipboard.writeText() with try/catch for error handling.

### Visible options instead of select

For 2-5 mutually exclusive options, show them visibly instead of hiding in a dropdown. Implementation: use radio buttons for simple choices in forms, selectable cards for options needing descriptions, segmented control for binary/ternary toolbar-style choices. Reserve dropdowns for 6+ options or space-constrained layouts.

### Don't Limit User Input

When inputs have character limits, let users exceed the limit and show visual feedback instead of blocking. Implementation: don't use maxLength attribute, show character counter (can go negative), highlight overflow text in red using overlay technique or rich-textarea library (~3kb). This lets users paste long text and trim it down.

### Searchable select for long lists

For selects with 10+ options (countries, languages, timezones), use a searchable combobox. Implementation: let users type to filter, show 'No results' message when empty, clear search on close, preserve full selected value display (not search text). Standard dropdown is fine for <7 options.

### Floating Action Button

For screens with one dominant action (create post, compose), use a persistent FAB. Implementation: position fixed bottom-right, use shadow for elevation, only ONE FAB per screen, use clear icon (+ for create), add aria-label for accessibility. Consider hiding on scroll down, showing on scroll up. For desktop with sidebars, sidebar placement may be better.

### Avoid disabled submit buttons

Keep submit buttons always enabled, validate on submit. Implementation: show inline error messages next to invalid fields, use red borders and error icons, add aria-invalid and aria-describedby for accessibility. Only disable button DURING submission (to prevent double-submit), not before.

### Auto-format inputs with mobile keyboard

For structured inputs (credit card, IBAN, phone), auto-format with spaces as user types. Implementation: use inputmode='numeric' (not type='number' which adds spinners), store raw value without spaces, format on display, handle paste events to clean input, use placeholder showing expected format (e.g. '4242 4242 4242 4242'). Use type='tel' for phone numbers.

### Modal closing

Modals should close via X button, click outside overlay, AND Escape key. Implementation: most UI libraries (Radix, Headless UI) support this by default. Return focus to trigger element on close. Exception: for destructive actions or confirmations, disable click-outside but keep explicit Cancel/Confirm buttons.

### Progressive Loading Messages

For long operations (>3s like AI generation, report building), show evolving status messages. Implementation: array of messages relevant to task, cycle every 1-2s with setInterval, don't loop (stay on last message if operation takes longer), end with 'Finalizing...' or 'Almost done...', animate transitions between messages.

### Scroll to Top Button

On long pages (>2 viewport heights), add a floating scroll-to-top button. Implementation: show after scrolling 300-500px (use scroll event listener), position fixed bottom-right, use window.scrollTo({ top: 0, behavior: 'smooth' }), fade in/out animation, use upward arrow icon, ensure keyboard accessible.

### Skeleton loading vs Spinner

When loading content with predictable structure (lists, cards, profiles), show skeleton placeholders instead of a spinner. Implementation: match skeleton shapes to actual content dimensions, use CSS animate-pulse, show 3-5 skeleton items max, keep visible minimum 300ms to avoid flashing, fade transition to real content.

### Disable submit button during loading

When submitting forms, disable the button and show a spinner to prevent double submissions. Implementation: set disabled={isLoading}, replace button text with spinner or show spinner alongside text, re-enable on success or error. Apply to: form submissions, API calls, payments, file uploads.

### Toast vs Inline feedback

Show action feedback inline (next to the triggering element), not in distant toasts. Toasts violate proximity principle and are inaccessible to screen magnifier users. Implementation: for copy buttons show checkmark inline, for form fields show validation next to field. Reserve toasts only for background processes (file upload complete) or system notifications.

### Verification code paste support

When building OTP inputs with separate fields, support paste. Implementation: intercept onPaste event, extract digits with value.replace(/\\D/g, ''), distribute across fields programmatically, auto-focus last filled field. Consider using input-otp library which handles this automatically.
