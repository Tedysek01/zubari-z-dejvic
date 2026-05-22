import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";
import { execFileSync } from "child_process";

const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
  console.error("Set GEMINI_API_KEY environment variable");
  process.exit(1);
}
const MODEL = "gemini-3.1-flash-image-preview";
const OUTPUT_DIR = path.resolve("public/photos");

const ai = new GoogleGenAI({ apiKey: API_KEY });

const STYLE_GUIDE = `Photorealistic, warm Scandinavian-inspired aesthetic. Natural materials (oak, concrete, stone, linen). Color palette: warm neutrals, cream, off-white, light wood, with subtle teal accents in small details. Warm natural light, no flash, no fluorescent. No blue or green clinical colors. Feels like interior architecture photography from Dezeen or Kinfolk magazine. No stock photo look. Slightly desaturated, lifted shadows.`;

const prompts = [
  // Services page - hero image
  {
    id: "services-hero",
    filename: "services-hero.jpg",
    prompt: `${STYLE_GUIDE} Generate a photorealistic overhead still-life photograph of modern dental instruments arranged artfully on a warm white stone surface. Include a dental mirror, an explorer probe, and tweezers — all high-end stainless steel — placed diagonally at the brand's signature 55-degree angle. A small ceramic dish with cotton rolls nearby. Soft directional window light from left. Very shallow depth of field (f/1.8). The composition feels curated and intentional, like a product photography shoot for a luxury brand. No blood, no gloves, no mess. Landscape, 16:9 aspect ratio.`,
  },
  // Services - microscope/precision
  {
    id: "services-microscope",
    filename: "services-microscope.jpg",
    prompt: `${STYLE_GUIDE} Generate a photorealistic photograph of a modern dental operating microscope in a treatment room. The microscope is sleek, silver/white, positioned over a treatment chair (chair only partially visible). Focus is on the microscope optics with beautiful bokeh in the background showing warm wood cabinetry and natural window light. The image conveys precision and advanced technology in a warm, non-clinical setting. Shot at 85mm, f/2.0. No patient visible. No harsh lighting. Portrait orientation, 3:4 aspect ratio.`,
  },
  // Services - smile/aesthetic
  {
    id: "services-aesthetic",
    filename: "services-aesthetic.jpg",
    prompt: `${STYLE_GUIDE} Generate a photorealistic close-up beauty photograph of a woman's natural, confident smile. Only lower face visible — from nose to chin. Perfect but natural-looking teeth, healthy pink lips. Soft, diffused studio lighting with warm tones. Clean, uncluttered composition on a warm neutral background. The feeling is elegant and aspirational, like a skincare advertisement. No dental tools, no clinical environment. Shot at 100mm macro, f/2.8. Square format, 1:1 aspect ratio.`,
  },
  // Pricing page - consultation
  {
    id: "pricing-consultation",
    filename: "pricing-consultation.jpg",
    prompt: `${STYLE_GUIDE} Generate a photorealistic photograph of a dentist's hand pointing at a dental X-ray on a modern backlit display screen, explaining something to a patient. Only the hands and screen visible — doctor's hand in a disposable glove, patient's hands resting on the armrest. The X-ray glows with warm blue-white light. Background is the warm, wood-paneled treatment room, out of focus. The image conveys trust, transparency, and professional communication. Shot at 50mm, f/2.8. Landscape, 16:10 aspect ratio.`,
  },
  // Booking page - exterior/entrance
  {
    id: "booking-entrance",
    filename: "booking-entrance.jpg",
    prompt: `${STYLE_GUIDE} Generate a photorealistic photograph of a modern ground-floor clinic entrance in a Prague Dejvice neighborhood building. A sleek glass door with brushed brass handle, small teal-colored sign with the clinic name beside it. The facade is light cream plaster with clean architectural lines. A potted olive tree stands beside the entrance. Late afternoon golden light. The entrance feels welcoming, modern, and trustworthy — like entering a boutique hotel or high-end design studio. Shot at 35mm, f/4. A mature linden tree partially visible at the edge. Portrait orientation, 4:5 aspect ratio.`,
  },
  // Booking page - map/location feel
  {
    id: "booking-dejvice",
    filename: "booking-dejvice.jpg",
    prompt: `${STYLE_GUIDE} Generate a photorealistic wide photograph of Vitezne namesti (Victory Square) in Prague Dejvice neighborhood during golden hour. The characteristic functionalist curved apartment buildings of the square are visible. Tram tracks curve through the roundabout. A few pedestrians, mature trees with green leaves, warm evening light creating long shadows. The scene feels peaceful, residential, and distinctly Prague. Wide angle, 24mm, f/8. No tourists, no crowds. Landscape, 21:9 cinematic aspect ratio.`,
  },
];

async function generateImage(item) {
  console.log(`\n  Generating: ${item.id} -> ${item.filename}`);

  try {
    const response = await ai.models.generateContent({
      model: MODEL,
      contents: [{ role: "user", parts: [{ text: item.prompt }] }],
      config: {
        responseModalities: ["image", "text"],
        imageSafety: "block_none",
      },
    });

    const parts = response.candidates?.[0]?.content?.parts;
    if (!parts) {
      console.error(`   No response parts for ${item.id}`);
      return false;
    }

    for (const part of parts) {
      if (part.inlineData) {
        const buffer = Buffer.from(part.inlineData.data, "base64");
        const ext = part.inlineData.mimeType?.includes("png") ? "png" : "jpg";
        const filename = item.filename.replace(/\.\w+$/, `.${ext}`);
        const filepath = path.join(OUTPUT_DIR, filename);

        fs.writeFileSync(filepath, buffer);
        const sizeKB = Math.round(buffer.length / 1024);
        console.log(`   Saved: ${filepath} (${sizeKB} KB)`);

        // Convert to webp if cwebp available
        try {
          const webpPath = filepath.replace(/\.\w+$/, ".webp");
          execFileSync("cwebp", ["-q", "82", filepath, "-o", webpPath]);
          const webpSize = Math.round(fs.statSync(webpPath).size / 1024);
          fs.unlinkSync(filepath);
          console.log(`   Converted to WebP: ${webpPath} (${webpSize} KB)`);
        } catch {
          console.log(`   cwebp not available, keeping ${ext}`);
        }

        return true;
      }
    }

    console.error(`   No image in response for ${item.id}`);
    return false;
  } catch (err) {
    console.error(`   Error for ${item.id}:`, err.message || err);
    return false;
  }
}

async function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  console.log("===================================");
  console.log("  Subpage Photo Generation");
  console.log(`  Model: ${MODEL}`);
  console.log(`  Photos: ${prompts.length}`);
  console.log("===================================");

  const results = { success: 0, failed: 0 };

  for (const item of prompts) {
    const ok = await generateImage(item);
    if (ok) results.success++;
    else results.failed++;

    if (prompts.indexOf(item) < prompts.length - 1) {
      console.log("   Waiting 3s...");
      await new Promise((r) => setTimeout(r, 3000));
    }
  }

  console.log(`\n  Done! ${results.success} generated, ${results.failed} failed\n`);
}

main();
