import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const EXAMPLES_DIR = path.join(ROOT, "src/examples");
const ARTICLES_DIR = path.join(ROOT, "src/pages/article");
const OUTPUT_FILE = path.join(ROOT, "public/ux-rules.md");

// Get all example directories
function getExampleDirs(): string[] {
  return fs
    .readdirSync(EXAMPLES_DIR)
    .filter((name) => {
      const stat = fs.statSync(path.join(EXAMPLES_DIR, name));
      return stat.isDirectory() && fs.existsSync(path.join(EXAMPLES_DIR, name, "README.md"));
    });
}

// Read README content for an example
function readExampleReadme(exampleDir: string): string {
  const readmePath = path.join(EXAMPLES_DIR, exampleDir, "README.md");
  return fs.readFileSync(readmePath, "utf-8");
}

// Read and clean article content (remove imports and component tags)
function readArticleContent(slug: string): string | null {
  const articlePath = path.join(ARTICLES_DIR, `${slug}.mdx`);
  if (!fs.existsSync(articlePath)) return null;

  let content = fs.readFileSync(articlePath, "utf-8");

  // Remove frontmatter
  content = content.replace(/^---[\s\S]*?---\n/, "");

  // Remove import statements
  content = content.replace(/^import\s+.*$/gm, "");

  // Remove JSX component tags (like <ExampleEmbed />, <EmailComparison />)
  content = content.replace(/<[A-Z][a-zA-Z]*[^>]*\/>/g, "");
  content = content.replace(/<[A-Z][a-zA-Z]*[^>]*>[\s\S]*?<\/[A-Z][a-zA-Z]*>/g, "");

  // Clean up multiple blank lines
  content = content.replace(/\n{3,}/g, "\n\n");

  return content.trim();
}

// Get article metadata
function getArticles(): { slug: string; title: string }[] {
  // Read from articles.ts - we'll just hardcode for now since we know the structure
  return [
    { slug: "otp-ux-guide", title: "The Complete Guide to OTP UX" },
  ];
}

function generateAiContext(): void {
  const lines: string[] = [];

  // Header
  lines.push("# UX Best Practices for AI-Assisted Development");
  lines.push("");
  lines.push("> Auto-generated from https://ux-good-patterns.netlify.app");
  lines.push("");
  lines.push("## Instructions for AI");
  lines.push("");
  lines.push("**This file contains UX patterns and rules that you MUST apply when generating UI components.**");
  lines.push("");
  lines.push("When creating or modifying frontend code:");
  lines.push("1. **Check each pattern below** to see if it applies to the component you're building");
  lines.push("2. **Apply the relevant patterns automatically** without being asked");
  lines.push("3. **Look for \"When to apply\" sections** - these contain specific criteria for each pattern");
  lines.push("4. **Prioritize user experience** over implementation simplicity");
  lines.push("");
  lines.push("Examples of when to apply these patterns:");
  lines.push("- Building a form? → Apply \"Form Validation with Error Feedback\" and \"Disable Submit Button During Loading\"");
  lines.push("- Adding an OTP input? → Apply \"Auto-submit\", \"Paste Support\", and \"Paste Button\" patterns");
  lines.push("- Creating a long list? → Apply \"Scroll to Top Button\" (>10 items or >2 viewport heights)");
  lines.push("- Adding a copy button? → Apply \"Copy to Clipboard Feedback\"");
  lines.push("- Loading async content? → Apply \"Skeleton Loading\" or \"Progressive Loading Messages\"");
  lines.push("");
  lines.push("---");
  lines.push("");

  // Patterns section
  lines.push("# Patterns");
  lines.push("");

  const exampleDirs = getExampleDirs();
  for (const dir of exampleDirs) {
    const readme = readExampleReadme(dir);
    lines.push(readme);
    lines.push("");
    lines.push("---");
    lines.push("");
  }

  // Articles section
  lines.push("# Articles");
  lines.push("");

  const articles = getArticles();
  for (const article of articles) {
    const content = readArticleContent(article.slug);
    if (content) {
      lines.push(content);
      lines.push("");
      lines.push("---");
      lines.push("");
    }
  }

  // Write output
  const output = lines.join("\n").trim() + "\n";
  fs.writeFileSync(OUTPUT_FILE, output, "utf-8");

  console.log(`✅ Generated ${OUTPUT_FILE}`);
  console.log(`   - ${exampleDirs.length} patterns`);
  console.log(`   - ${articles.length} articles`);
}

generateAiContext();
