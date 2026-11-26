import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "At 3:12 in the morning the smart speaker called me by name in my dead mother's voice, and when I unplugged it, the baby monitor in the nursery finished the sentence.";

// Guard the gate before writing: one line, plain ASCII, safely under 200 chars.
if (line.includes("\n") || line.length > 195 || /[^\x00-\x7F]/.test(line)) {
  throw new Error("entry does not meet the one-line horror limits");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
