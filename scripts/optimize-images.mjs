import sharp from "sharp";
import { readdir, mkdir } from "node:fs/promises";
import path from "node:path";

// [source folder, output folder, max width, quality]
const jobs = [
  ["assets-src/projects", "public/projects", 1600, 80],
  ["assets-src/stickers", "public/stickers", 800, 85],
  ["assets-src/profile", "public", 1200, 80],
];

for (const [from, to, width, quality] of jobs) {
  await mkdir(to, { recursive: true });
  for (const file of await readdir(from)) {
    if (!/\.(png|jpe?g)$/i.test(file)) continue;
    const out = path.join(to, path.parse(file).name + ".webp");
    await sharp(path.join(from, file))
      .resize({ width, withoutEnlargement: true })
      .webp({ quality })
      .toFile(out);
    console.log("done:", out);
  }
}