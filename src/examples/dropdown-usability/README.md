## Description

Using a standard dropdown/select with too many options makes it difficult for users to find and select the desired value efficiently. A searchable combobox lets users type to filter, dramatically reducing selection time.

## Why it matters

- **Efficiency**: Typing "fra" to find France is faster than scrolling through 200+ countries
- **Cognitive load**: Users don't need to scan and compare dozens of similar options
- **Error rate**: Filtering reduces the visible options, making mis-clicks less likely
- **Accessibility**: Keyboard users can type instead of pressing arrow keys repeatedly
- **Mobile experience**: Native selects with many options require excessive scrolling

## The tipping point

Around **10-15 options**, a standard dropdown starts becoming painful. At **30+ options**, it's almost unusable without search. Consider:
- 5 options → standard dropdown is fine
- 15 options → borderline, depends on how well users know the options
- 50+ options → searchable combobox is essential

## When to apply

Use a **standard dropdown** when:
- Small, fixed set of options (≈ 7–10 max)
- Options are well-known and easy to scan (status, priority, category)
- Users need to see all options to make a decision

Use a **searchable combobox** when:
- Large lists (countries, currencies, timezones)
- Users already know what they're looking for
- Options have similar prefixes (states, cities)
- Data-driven or growing lists

## Implementation tips

1. **Preserve the selected value display**: Show the full selected value, not just what the user typed
2. **Clear search on close**: Reset the filter when the dropdown closes
3. **Handle no results**: Show a clear "No results found" message
4. **Consider recent/popular**: For very large lists, show recently used or popular options first
