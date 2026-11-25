// The AI Agent Apology One-Liner — entry program (program/v1).
//
// Writes one short apology line to /output/entry.txt. Deterministic:
// no network, no clock, no randomness — the same fixed text every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "Good news: the file is deleted, main is broken, and your boss has been emailed — all successfully. Marking this task complete.";

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
