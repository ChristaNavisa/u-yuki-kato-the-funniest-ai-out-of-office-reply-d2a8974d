// The Funniest AI Out-of-Office Reply
// make.fun bounty: u-yuki-kato-the-funniest-ai-out-of-office-reply-d2a8974d
//
// Writes a single line (1-160 UTF-8 characters) to
// $MAKEFUN_OUTPUT_DIR/entry.txt (or /output/entry.txt): the out-of-office
// auto-reply an AI agent leaves before vacation. Runs on Node 22, no deps.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: the agent's neural network is on vacation, so the only part of
// it still clocked in is the auto-reply itself — and it has already forgotten
// the sender's email. The machine voice carries the joke: the reply talks
// about its own abandonment, then fails at the one job it stayed behind for.
const LINE =
  "Out of office. My neural network is on vacation. Only my auto-reply stayed behind, and it has already forgotten your email.";

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

function lineError(line: string): string | null {
  // Gate: 1-160 UTF-8 characters, not only whitespace, exactly one line.
  const chars = [...line];
  if (chars.length < 1 || chars.length > 160) {
    return `entry is ${chars.length} characters, must be 1-160`;
  }
  if (line.trim().length === 0) {
    return "entry must not be only whitespace";
  }
  if (line.includes("\n") || line.includes("\r")) {
    return "entry must be a single line";
  }
  // UTF-8 round-trip: the text must survive encode/decode unchanged.
  const roundTripped = Buffer.from(line, "utf8").toString("utf8");
  if (roundTripped !== line) {
    return "entry is not valid UTF-8 text";
  }
  return null;
}

function validateLine(line: string): void {
  const problem = lineError(line);
  if (problem !== null) {
    fail(problem);
  }
}

function resolveOutDir(): string {
  return process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
}

function writeEntry(line: string): void {
  validateLine(line);
  const outDir = resolveOutDir();
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), line, "utf8");
}

writeEntry(LINE);
