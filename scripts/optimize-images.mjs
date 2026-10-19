
import sharp from "sharp";
import path from "node:path";
import fs from "node:fs/promises";


const images = [
  {
    file: "src/images/Carousel/ExperienciaDeBañoTurco.png",
    width: 1600,
  },
  {
    file: "src/images/Carousel/ViajeEnGoleta.jpg",
    width: 1800,
  },
  {
    file: "src/images/WhoWeAre/Dilara.png",
    width: 1000,
  },
  {
    file: "src/images/Carousel/CeramoniaDeLosDerviches.jpg",
    width: 1800,
  },
  {
    file: "src/images/Feedback/Feedback10.png",
    width: 1000,
  },
  {
    file: "src/images/Feedback/Feedback1.png",
    width: 1000,
  },
  {
    file: "src/images/Feedback/Feedback12.png",
    width: 1000,
  },
  {
    file: "src/images/Feedback/Feedback5.png",
    width: 1000,
  },
  {
    file: "src/images/Feedback/Feedback8.png",
    width: 1000,
  },
];


for (const image of images) {
  const input = path.resolve(image.file);
  const output = input.replace(/\.[^.]+$/, "-optimized.webp");

  try {
    await fs.access(input);

    await sharp(input)
      .rotate()
      .resize({
        width: image.width,
        withoutEnlargement: true,
      })
      .webp({ quality: 88, effort: 5 })
      .toFile(output);

    const info = await sharp(output).metadata();
    const stats = await fs.stat(output);

    console.log(
      `${path.basename(output)} | ` +
      `${info.width}x${info.height} | ` +
      `${(stats.size / 1024 / 1024).toFixed(2)} MB`
    );
  } catch (error) {
    console.error(`Hata: ${image.file}`, error.message);
  }
}
