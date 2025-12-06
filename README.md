# UX Good Patterns

An open source collection of UX patterns with comparative examples. Each pattern shows a "good" and "bad" example to illustrate user experience best practices.

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Build**: Vite
- **Styles**: Tailwind CSS
- **Components**: shadcn/ui

## Installation

```bash
# Clone the repository
git clone https://github.com/your-username/ux-good-patterns.git
cd ux-good-patterns

# Install dependencies
npm install

# Run in development
npm run dev
```

## Project Structure

```
/src
  /components/ui        # shadcn/ui components
  /examples             # Each UX example is a standalone module
    /autofocus-modal
      index.ts          # Metadata + exports
      GoodExample.tsx   # Correct example
      BadExample.tsx    # Example to avoid
      README.md         # Pattern documentation
  /layouts              # Reusable layouts
  App.tsx               # Main page
  main.tsx              # Entry point
```

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Lint the code
```

## Development Tools

### Locator (Click to Component)

This project is configured with [Locator](https://www.locatorjs.com/), a tool that lets you click on any component in the browser and jump directly to its source code in your IDE.

**Setup:**
1. Install the [Locator Chrome extension](https://chromewebstore.google.com/detail/locatorjs/npbfdllefekhdplbkdigpncggmojpefi)
2. Run the app in development mode (`npm run dev`)
3. Hold `Option` (Mac) or `Alt` (Windows/Linux) and click on any element to open it in your editor

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed instructions.

## License

MIT
