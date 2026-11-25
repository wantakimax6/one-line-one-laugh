// One Line, One Laugh — entry for make.fun bounty
// u-plucky-finch-20-one-line-one-laugh-0ffe66ea
//
// Writes a single funny line (<=200 chars) to /output/entry.txt.
// The grading sandbox mounts the repo read-only, so the output
// directory comes from MAKEFUN_OUTPUT_DIR when set, else /output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line itself: one sentence, 64 characters, no setup needed.
// It works because it flips the roles — the phone's usage report
// treats the user as the problem, not the other way round.
const LINE = "My screen time report just filed a restraining order against me.";

// Keep the line within the gate: 1 to 200 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  throw new Error(`Line must be 1-200 non-blank characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);
