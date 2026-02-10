# Checkboxes for Hierarchical Selection

## Description

When options form a parent-child hierarchy, use checkboxes. Checkboxes support an indeterminate (mixed) state that communicates "some but not all children are selected." Toggle switches only support on/off, making partial selection invisible.

## Why it matters

- **Indeterminate state**: A parent checkbox can show a dash when only some children are selected — toggles cannot
- **Visual hierarchy**: Checkboxes with indentation clearly communicate the parent-child relationship
- **Accurate state representation**: Users can instantly see whether all, some, or no children are selected

## When to apply

- Permission systems with nested scopes
- Category trees with selectable subcategories
- Settings grouped under a parent toggle-all option
- Any nested multi-select structure

## When not to apply

- Flat, independent settings with no relationship (use toggle switches)
- Binary on/off with immediate effect (use a toggle switch)
