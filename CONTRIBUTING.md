# Contributing to UX Good Patterns

Thank you for your interest in contributing! This guide explains how to add new UX examples and articles.

## Adding a New Example

### 1. Create the folder

Create a new folder in `/src/examples/` with your pattern name (in kebab-case):

```bash
mkdir src/examples/my-new-pattern
```

### 2. Create the required files

Each example requires 4 files:

#### `index.ts` - Metadata and exports

```typescript
import { GoodExample } from "./GoodExample";
import { BadExample } from "./BadExample";
import content from "./README.md?raw";

export { content };

export const meta = {
  id: "my-new-pattern",
  title: "Pattern Title",
  description: "Short description of the UX problem solved",
  category: "Forms", // Forms, Navigation, Feedback, Accessibility, etc.
  tags: ["tag1", "tag2"],
};

export const BadExamples = [
  { component: BadExample, label: "Default" },
];

export const GoodExamples = [
  { component: GoodExample, label: "Default" },
];
```

You can add multiple variants for each side:

```typescript
import { GoodExample } from "./GoodExample";
import { GoodExampleAlternative } from "./GoodExampleAlternative";
import { BadExample } from "./BadExample";
import content from "./README.md?raw";

export { content };

export const BadExamples = [
  { component: BadExample, label: "No feedback" },
];

export const GoodExamples = [
  { component: GoodExample, label: "Custom" },
  { component: GoodExampleAlternative, label: "With library" },
];
```

#### `GoodExample.tsx` - The correct example

```tsx
export function GoodExample() {
  return (
    // Your implementation of the good pattern
  );
}
```

#### `BadExample.tsx` - The example to avoid

```tsx
export function BadExample() {
  return (
    // Your implementation of the bad pattern
  );
}
```

#### `README.md` - Documentation

This file is displayed on the example's detail page (accessible via `/example/{id}`).

```markdown
# Pattern Title

## Description

Explanation of the UX problem and solution.

## Why it matters

- Point 1
- Point 2

## When to apply

- Use case 1
- Use case 2

## When not to apply

- Exception 1
- Exception 2
```

### 3. Register the example

Add your example in `/src/examples/index.ts`:

```typescript
import * as autofocusModal from "./autofocus-modal";
import * as myNewPattern from "./my-new-pattern"; // Add

export const examples = [
  autofocusModal,
  myNewPattern, // Add
];
```

### 4. Test

```bash
npm run dev
```

Verify that:
- Your example displays correctly on the home page
- The detail page (`/example/{id}`) shows the README content
- The share button copies the correct URL

## Best Practices

- **Simplicity**: Examples should be simple and focused on a single concept
- **Clarity**: The difference between good and bad examples should be obvious
- **Accessibility**: Good examples should respect accessibility standards
- **shadcn components**: Use shadcn/ui components available in `/src/components/ui`

## Available Categories

- `Forms`: Form-related patterns
- `Navigation`: Navigation patterns
- `Feedback`: User feedback (loading, errors, success)
- `Accessibility`: Accessibility patterns
- `Performance`: Perceived performance patterns

## Adding a New Article

Articles are in-depth guides that combine multiple examples into a comprehensive resource. They use MDX format, allowing you to embed interactive examples.

### 1. Create the MDX file

Create a new file in `/src/pages/article/`:

```bash
touch src/pages/article/my-article.mdx
```

### 2. Add frontmatter and content

```mdx
---
layout: "@/layouts/ArticleLayout.astro"
title: "Article Title"
description: "Short description of the article"
---

import { ExampleEmbed } from "@/components/articles/ExampleEmbed";

# Article Title

Your content here...

## Section with Interactive Example

<ExampleEmbed id="example-id" client:load />

More content...
```

### 3. Register the article

Add metadata in `/src/articles.ts`:

```typescript
export const articles: Article[] = [
  // ... existing articles
  {
    slug: "my-article",           // Must match filename (without .mdx)
    title: "Article Title",
    description: "Short description",
    tags: ["Tag1", "Tag2"],
  },
];
```

### 4. Test

```bash
npm run dev
```

Verify that:
- Article appears on `/articles` page
- Article renders correctly at `/article/my-article`
- Embedded examples are interactive
- Share button works

### Available Components for Articles

- `ExampleEmbed`: Embeds an interactive example by its ID
- `EmailComparison`: Side-by-side email mockup comparison (for specific use cases)

## Submitting a Pull Request

1. Fork the repository
2. Create a branch (`git checkout -b feature/new-pattern`)
3. Commit your changes (`git commit -am 'Add: new pattern'`)
4. Push the branch (`git push origin feature/new-pattern`)
5. Open a Pull Request

## Development Tools

### Agentation

This project uses [Agentation](https://agentation.dev/) to provide visual feedback when developing with AI coding assistants like [Claude Code](https://docs.anthropic.com/en/docs/claude-code).

When running `npm run dev`, a toolbar appears at the bottom of the screen showing the current task status. This helps you follow along with what the AI is doing in real-time.

The toolbar only appears in development mode and is not included in production builds.

## Questions?

Open an issue on GitHub for any questions or suggestions.
