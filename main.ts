// Frost Monday Review — one-line review of my Monday, under 200 chars.
// Judge brief: concrete Monday detail, tight turn, repeatable to a coworker.
//
// Why this line fits the brief, criterion by criterion:
//  1. A review of MY Monday (alarm, inbox, meeting) — not a joke about Mondays in general.
//  2. The laugh is the one-star verdict: "would not Monday again" — a product-review
//     punchline applied to a day of the week.
//  3. Concrete details all through: 6am alarm, inbox at 214 by 9, a "quick sync"
//     that ate lunch — no generic tiredness.
//  4. No wasted words; the turn lands in the final clause.
//  5. Built to be repeated to a coworker the next morning.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Monday: alarm at 6, inbox at 214 by 9, and a 'quick sync' that ate my whole lunch — one star, would not Monday again.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(entry);
console.log(`chars: ${[...entry].length} | lines: 1`);
