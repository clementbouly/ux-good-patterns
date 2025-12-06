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

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed instructions.

## License

MIT
