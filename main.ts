// Two Lines to Your Past Self — make.fun entry (u-suga-two-lines-to-your-past-self-f36c83ca)
//
// Writes exactly two lines to /output/entry.txt:
//   line 1 — a warning to the writer's past self about one specific moment;
//   line 2 — one sentence on why that moment mattered and what changed because of it.
//
// Deterministic, no network, no reads outside this repository.
// The program checks its own output against the competition gate
// (UTF-8 text, exactly two non-empty lines, 1-280 characters) and
// refuses to write a file that would fail it.

import { mkdirSync, writeFileSync } from "node:fs";

const FIRST_LINE =
  "Don't lend your brother the keys to your red Honda on the night of June 12th.";
const SECOND_LINE =
  "He hits a lamppost at 1 a.m., and you spend the rest of your life wishing you had kept those keys in your pocket.";

const entry = `${FIRST_LINE}\n${SECOND_LINE}\n`;

const lines = entry.split("\n").filter((line) => line.length > 0);
if (lines.length !== 2) {
  throw new Error(`expected exactly 2 lines, got ${lines.length}`);
}
if (entry.length < 1 || entry.length > 280) {
  throw new Error(`expected 1-280 characters, got ${entry.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
