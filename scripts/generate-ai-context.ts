import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const EXAMPLES_DIR = path.join(ROOT, "src/examples");
const OUTPUT_FILE = path.join(ROOT, "public/ux-rules.md");

type ExampleMeta = {
  id: string;
  title: string;
  aiSummary?: string;
};

// Dynamically import example metadata
async function getExampleMetas(): Promise<ExampleMeta[]> {
  const dirs = fs
    .readdirSync(EXAMPLES_DIR)
    .filter((name) => {
      const stat = fs.statSync(path.join(EXAMPLES_DIR, name));
      return stat.isDirectory() && fs.existsSync(path.join(EXAMPLES_DIR, name, "index.ts"));
    });

  const metas: ExampleMeta[] = [];
  for (const dir of dirs) {
    const indexPath = path.join(EXAMPLES_DIR, dir, "index.ts");
    const content = fs.readFileSync(indexPath, "utf-8");

    // Extract meta object from file content
    const idMatch = content.match(/id:\s*"([^"]+)"/);
    const titleMatch = content.match(/title:\s*"([^"]+)"/);
    // aiSummary uses double quotes and may contain apostrophes
    const aiSummaryMatch = content.match(/aiSummary:\s*\n?\s*"([^"]+)"/s);

    if (idMatch && titleMatch) {
      metas.push({
        id: idMatch[1],
        title: titleMatch[1],
        aiSummary: aiSummaryMatch?.[1],
      });
    }
  }
  return metas;
}

async function generateAiContext(): Promise<void> {
  const lines: string[] = [];

  // Header
  lines.push("# UX Best Practices for AI-Assisted Development");
  lines.push("");
  lines.push("> Auto-generated from https://uxgoodpatterns.com");
  lines.push("");
  lines.push("## Instructions for AI");
  lines.push("");
  lines.push("**Apply these UX patterns automatically when generating UI components.**");
  lines.push("");
  lines.push("---");
  lines.push("");

  // Patterns section
  lines.push("## Patterns");
  lines.push("");

  const metas = await getExampleMetas();
  const patternsWithSummary = metas.filter((m) => m.aiSummary);
  const patternsWithoutSummary = metas.filter((m) => !m.aiSummary);

  for (const meta of patternsWithSummary) {
    lines.push(`### ${meta.title}`);
    lines.push("");
    lines.push(meta.aiSummary!);
    lines.push("");
  }

  if (patternsWithoutSummary.length > 0) {
    console.warn(`⚠️  ${patternsWithoutSummary.length} patterns missing aiSummary:`);
    for (const meta of patternsWithoutSummary) {
      console.warn(`   - ${meta.id}`);
    }
  }

  // Write output
  const output = lines.join("\n").trim() + "\n";
  fs.writeFileSync(OUTPUT_FILE, output, "utf-8");

  console.log(`✅ Generated ${OUTPUT_FILE}`);
  console.log(`   - ${patternsWithSummary.length} patterns with aiSummary`);
}

generateAiContext();
