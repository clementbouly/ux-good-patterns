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
