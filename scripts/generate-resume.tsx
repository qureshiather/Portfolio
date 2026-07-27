import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import React from "react";
import { renderToBuffer } from "@react-pdf/renderer";
import { ResumeDocument } from "../src/lib/resume-document";

async function main() {
  const root = process.cwd();
  const publicDir = path.join(root, "public");
  const otherDir = path.join(root, "other");

  await mkdir(publicDir, { recursive: true });

  const buffer = await renderToBuffer(<ResumeDocument />);

  const publicPath = path.join(publicDir, "atherqureshi_resume.pdf");
  const otherPath = path.join(otherDir, "atherqureshi_resume.pdf");

  await writeFile(publicPath, buffer);
  await writeFile(otherPath, buffer);

  const pagesHint =
    "Generated one-page resume → public/atherqureshi_resume.pdf (and other/)";
  console.log(pagesHint);
  console.log(`Size: ${(buffer.byteLength / 1024).toFixed(1)} KB`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
