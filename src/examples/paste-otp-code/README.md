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

## Browser considerations

The Clipboard API (`navigator.clipboard.readText()`) requires:
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
