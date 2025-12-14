# UX Good Patterns

**[Live Demo](https://ux-good-patterns.netlify.app/)**

An open source collection of UX patterns with comparative examples. Each pattern shows a "good" and "bad" example to illustrate user experience best practices.

## Tech Stack

- **Framework**: Astro + React 19 + TypeScript
- **Rendering**: Static Site Generation (SSG)
- **Styles**: Tailwind CSS
- **Components**: shadcn/ui
- **Articles**: MDX with embedded interactive examples

## Installation

```bash
# Clone the repository
git clone https://github.com/clementbouly/ux-good-patterns.git
cd ux-good-patterns

# Install dependencies
npm install

# Run in development
npm run dev
```

## Project Structure

```
/src
  /components
    /ui                 # shadcn/ui components
    /layout             # Header, Footer (Astro components)
    ExampleCard.tsx     # Reusable example card component
    ShareButton.tsx     # Copy URL to clipboard button
  /examples             # Each UX example is a standalone module
    /autofocus-modal
      index.ts          # Metadata + exports
      GoodExample.tsx   # Correct example
      BadExample.tsx    # Example to avoid
      README.md         # Pattern documentation (displayed on detail page)
  /layouts              # Astro layouts
    Layout.astro        # Base layout (head, meta, scripts)
    PageLayout.astro    # Page layout with Header/Footer
    ArticleLayout.astro # Layout for MDX articles
  /pages                # Astro pages (file-based routing)
    index.astro         # Home page
    articles.astro      # Articles listing page
    example/[exampleId].astro  # Example detail page
    article/*.mdx       # MDX articles with interactive examples
  articles.ts           # Articles metadata registry
```

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Lint the code
```

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed instructions.

## License

MIT
