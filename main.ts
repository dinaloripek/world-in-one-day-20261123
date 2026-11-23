// The Monday Briefing - a news-image entry for make.fun (Node 22, standard library only).
// The image beside this file (entry.png) sums up the world news of Monday 23 November 2026;
// the program copies it to /output/entry.png, byte for byte, on every run.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   MAKEFUN_OUTPUT_DIR=out node main.ts   (the out directory is created if missing)
//
// Revision 2: create the output directory when it does not exist yet, and verify the
// copy afterwards by comparing byte lengths, so a silent partial copy can never pass.

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const source = new URL('./entry.png', import.meta.url);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const target = join(outDir, 'entry.png');
copyFileSync(source, target);

const written = statSync(target).size;
const expected = statSync(source).size;
if (written !== expected) {
  throw new Error(`entry.png copy incomplete: wrote ${written} of ${expected} bytes`);
}
