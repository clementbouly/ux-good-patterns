---
name: new-example
description: Create a new UX pattern example with all required files (index.ts, GoodExample.tsx, BadExample.tsx, README.md). Use when adding a new good/bad UX comparison or pattern to the project.
---

# Create New UX Example

This skill helps you scaffold a complete UX pattern example following project conventions.

## Structure to create

Each example requires 4 files in `src/examples/{example-id}/`:

```
src/examples/{example-id}/
├── index.ts          # Metadata and exports
├── GoodExample.tsx   # Correct implementation
├── BadExample.tsx    # Implementation to avoid
└── README.md         # Pattern documentation
```

## Step-by-step process

### 1. Create the folder

Use kebab-case for the folder name: `src/examples/my-new-pattern/`

### 2. Create index.ts

```typescript
import { GoodExample } from "./GoodExample";
import { BadExample } from "./BadExample";
import content from "./README.md?raw";

export { content };

export const meta = {
  id: "my-new-pattern",  // Must match folder name
  title: "Pattern Title",
  description: "Brief description of the pattern",
  category: "Forms",  // One of: Forms, Navigation, Feedback, Accessibility, Performance, Modals
  tags: ["tag1", "tag2"],
  createdAt: "YYYY-MM-DD",  // Today's date in ISO format
};

export const BadExamples = [
  { component: BadExample, label: "Without pattern" },
];

export const GoodExamples = [
  { component: GoodExample, label: "With pattern" },
];
```

### 3. Create GoodExample.tsx

```typescript
import { useState } from "react";
import { Button } from "@/components/ui/button";
// Import other UI components as needed from @/components/ui/

export function GoodExample() {
  // Implementation showing the CORRECT pattern
  return (
    <div>
      {/* Good UX implementation */}
    </div>
  );
}
```

### 4. Create BadExample.tsx

```typescript
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function BadExample() {
  // Implementation showing the pattern to AVOID
  return (
    <div>
      {/* Bad UX implementation */}
    </div>
  );
}
```

### 5. Create README.md

```markdown
# Pattern Title

## Description

Clear explanation of the UX pattern.

## Why it matters

- **Benefit 1**: Explanation
- **Benefit 2**: Explanation
- **Benefit 3**: Explanation

## When to apply

- Use case 1
- Use case 2

## When not to apply

- Exception 1
- Exception 2
```

### 6. Register in src/examples/index.ts

Add import and include in examples array:

```typescript
import * as myNewPattern from "./my-new-pattern";

export const examples = [
  // ... existing examples
  myNewPattern,
];
```

## Categories

Existing categories:
- `Forms` - Form inputs, validation, submission
- `Navigation` - Navigation patterns, scroll behavior
- `Feedback` - User feedback, notifications, loading states
- `Accessibility` - A11y patterns, focus management
- `Performance` - Perceived performance, loading optimization
- `Modals` - Modal dialogs, overlays, popups

You can create new categories if the pattern doesn't fit existing ones.

## UI components

Existing components in `@/components/ui/`:
- `button` - Button component
- `input` - Input field
- `label` - Form label
- `dialog` - Modal dialog (Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger)

You can create new UI components in `src/components/ui/` if needed (following shadcn/ui patterns).

## Styling conventions

- Use Tailwind CSS classes
- Always support dark mode with `dark:` variants
- Use semantic color classes when possible
- Keep components self-contained
