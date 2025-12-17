---
name: new-article
description: Create a new MDX article with frontmatter, example embeds, and custom components. Use when writing in-depth UX guides or tutorials.
---

# Create New Article

This skill helps you create in-depth UX guide articles using MDX.

## Structure

Articles require 2 things:
1. MDX file in `src/pages/article/{slug}.mdx`
2. Registration in `src/articles.ts`

Optionally, custom interactive components in `src/components/articles/`

## Step-by-step process

### 1. Create the MDX file

Create `src/pages/article/{slug}.mdx`:

```mdx
---
layout: "@/layouts/ArticleLayout.astro"
title: "Article Title"
description: "Brief description for SEO and article list"
---

import { ExampleEmbed } from "@/components/articles/ExampleEmbed";

# Article Title

Introduction paragraph explaining what this guide covers.

## Section 1

Content with **bold** and *italic* text.

<ExampleEmbed id="existing-example-id" client:load />

### Subsection

- Bullet points
- For key takeaways

## Section 2

More content...
```

### 2. Register in src/articles.ts

```typescript
export const articles: Article[] = [
  // ... existing articles
  {
    slug: "my-article-slug",  // Must match filename without .mdx
    title: "Article Title",
    description: "Brief description",
    tags: ["Tag1", "Tag2"],
  },
];
```

## Embedding examples

Use `ExampleEmbed` to include existing UX pattern examples:

```mdx
import { ExampleEmbed } from "@/components/articles/ExampleEmbed";

<ExampleEmbed id="verification-code-input" client:load />
```

The `id` must match an existing example in `src/examples/`.

**Important**: Always add `client:load` for React components in MDX.

## Custom article components

For complex interactive elements, create components in `src/components/articles/`:

```
src/components/articles/
├── ExampleEmbed.tsx       # Embed existing examples
├── EmailComparison.tsx    # Custom comparison component
├── UltimateOtpDemo.tsx    # Custom demo component
└── ux-speed-game/         # Complex multi-file component
    ├── index.tsx
    ├── Game.tsx
    └── ...
```

Then import in your MDX:

```mdx
import { MyCustomComponent } from "@/components/articles/MyCustomComponent";

<MyCustomComponent client:load />
```

## MDX features

### Markdown syntax
- `#`, `##`, `###` for headings
- `**bold**`, `*italic*`
- `- item` for bullet lists
- `1. item` for numbered lists
- `` `code` `` for inline code
- Code blocks with triple backticks

### React components
- Import at the top after frontmatter
- Use with `client:load` for interactivity
- Self-closing tags: `<Component />`

### Frontmatter (required)

```yaml
---
layout: "@/layouts/ArticleLayout.astro"
title: "Page title (shown in browser tab)"
description: "SEO description"
---
```

## Article structure best practices

1. **Introduction** - What the reader will learn
2. **Sections** - Each covering one aspect
   - Use `<ExampleEmbed />` to show patterns
   - Include "Why it matters" subsections
   - Add "Best practices" lists
3. **Conclusion** - Summary or call to action

## Styling notes

- The article layout adds a white card background with padding
- `prose` classes handle typography automatically
- `---` (horizontal rules) are hidden by default
- Headings get automatic spacing

## Available example IDs

Check `src/examples/index.ts` for all available example IDs to embed.
