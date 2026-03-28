import { GoogleGenAI } from "@google/genai";
import { execSync } from "child_process";
import fs from "fs";
import path from "path";

const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
  console.error("Set GEMINI_API_KEY environment variable");
  process.exit(1);
}
const MODEL = "gemini-3.1-flash-image-preview";
const OUTPUT_DIR = path.resolve("public/photos");

const ai = new GoogleGenAI({ apiKey: API_KEY });

const prompts = [
  {
    id: "blog-bolest-zubu",
    filename: "blog-bolest-zubu.jpg",
    prompt: `Generate a photorealistic still life photograph representing dental care and pain prevention, without showing any actual person in pain. A warm, softly lit bathroom or vanity countertop with a premium wooden toothbrush in a ceramic holder, a small tube of toothpaste, a glass of water, and a sprig of fresh mint. The scene is calm and reassuring, not clinical. Soft morning light from a window to the left. Warm color palette: cream, natural wood, white ceramic, green mint. Shot at 50mm, f/2.8, shallow depth of field. No pills, no medical equipment, no clinical setting, no red/warning colors. Landscape orientation, 16:10 aspect ratio.`,
  },
  {
    id: "blog-dentalni-hygiena",
    filename: "blog-dentalni-hygiena.jpg",
    prompt: `Generate a photorealistic close-up photograph of a neatly arranged dental hygiene station in a modern, spa-like dental clinic. On a white stone countertop: a set of professional dental scaling instruments laid out on a sterilized tray, next to a small ceramic bowl, an ultrasonic scaler handpiece, and a potted succulent. The background shows light oak wood cabinetry, slightly out of focus. Soft, warm natural light from the left. The overall aesthetic is clean, calming, and professional — like a wellness clinic, not a hospital. Shot at 35mm, f/3.5. Color palette: white, warm gray, natural wood, touches of green. No blood, no gloves, no patient visible. Landscape orientation, 16:10 aspect ratio.`,
  },
  {
    id: "blog-beleni-zubu",
    filename: "blog-beleni-zubu.jpg",
    prompt: `Generate a photorealistic beauty-style photograph of a confident woman smiling naturally, showing healthy white teeth. She is in her early 30s, Central European appearance, with natural makeup. The background is very soft and minimal — light, airy, almost abstract. The lighting is soft studio-style beauty lighting with a slight warm tone. The smile is genuine and relaxed, not overly staged or stock-photo-like. Shot at 85mm, f/2.0, very shallow depth of field focusing on her smile and lower face. Warm, clean color grading. No dental equipment, no clinical setting, no fake-looking smile, no heavy makeup. Landscape orientation, 16:10 aspect ratio.`,
  },
  {
    id: "blog-strach-ze-zubare",
    filename: "blog-strach-ze-zubare.jpg",
    prompt: `Generate a photorealistic interior photograph of a calming, inviting dental clinic waiting area. Emphasis on creating a sense of safety and comfort. A cozy reading nook with a built-in bench seat upholstered in warm bouclé fabric, soft cushions, a shelf with books and a small vase of dried eucalyptus. Natural light streaming through sheer curtains. On a side table, a cup of herbal tea and a magazine. The space feels more like a Scandinavian living room than a medical facility. Warm, muted tones: cream, beige, sage, natural wood. Shot at 28mm, f/4. No people, no dental equipment, no clinical feel, no harsh lighting. Landscape orientation, 16:10 aspect ratio.`,
  },
  {
    id: "blog-zubni-implantaty",
    filename: "blog-zubni-implantaty.jpg",
    prompt: `Generate a photorealistic photograph of a modern dental treatment room focused on advanced technology. A computer monitor shows a 3D dental scan (CBCT image), next to a sleek dental microscope on an articulated arm. The room is modern with light wood cabinetry and white countertops. Through a large window, soft natural light illuminates the scene. The overall impression is high-tech but warm — precision meets comfort. Shot at 35mm, f/4. Colors: warm neutrals, white, light wood, subtle teal accent on equipment detail. No patient visible, no visible needles or surgical instruments, no blood. Landscape orientation, 16:10 aspect ratio.`,
  },
  {
    id: "blog-detsky-zubar",
    filename: "blog-detsky-zubar.jpg",
    prompt: `Generate a photorealistic photograph of a child-friendly corner in a modern dental clinic. A small wooden chair and table with coloring books and crayons, a soft toy (teddy bear) sitting on the chair, and a small bookshelf with colorful children's books. The space is bright and cheerful but still matches the Scandinavian minimal aesthetic of the clinic — light wood, warm white walls, a few playful but tasteful decorative elements. Natural light from a nearby window. Shot at 35mm, f/3.5. Colors: warm neutrals with gentle pops of color from the books and toys, nothing garish. No children visible, no dental equipment, no clinical setting. Landscape orientation, 16:10 aspect ratio.`,
  },
];

async function generateImage(item) {
  console.log(`\n  Generating: ${item.id} → ${item.filename}`);
  console.log(`   Prompt length: ${item.prompt.length} chars`);

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
      console.error(`   Response:`, JSON.stringify(response).slice(0, 500));
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

        // Convert to WebP
        const webpPath = filepath.replace(/\.\w+$/, ".webp");
        try {
          execSync(`cwebp -q 82 "${filepath}" -o "${webpPath}"`, { stdio: "pipe" });
          const webpSize = Math.round(fs.statSync(webpPath).size / 1024);
          console.log(`   WebP: ${webpPath} (${webpSize} KB)`);
        } catch {
          console.log(`   cwebp not found, keeping ${ext} format`);
        }

        return true;
      }
    }

    const textParts = parts.filter((p) => p.text).map((p) => p.text);
    console.error(`   No image in response for ${item.id}`);
    if (textParts.length) console.error(`   Text:`, textParts.join(" ").slice(0, 300));
    return false;
  } catch (err) {
    console.error(`   Error for ${item.id}:`, err.message || err);
    return false;
  }
}

async function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  console.log("═══════════════════════════════════════════");
  console.log("  Zubaři z Dejvic — Blog Photo Generation");
  console.log(`  Model: ${MODEL}`);
  console.log(`  Output: ${OUTPUT_DIR}`);
  console.log(`  Photos: ${prompts.length}`);
  console.log("═══════════════════════════════════════════");

  const results = { success: 0, failed: 0 };

  for (const item of prompts) {
    const ok = await generateImage(item);
    if (ok) results.success++;
    else results.failed++;

    if (prompts.indexOf(item) < prompts.length - 1) {
      console.log("   Waiting 3s before next...");
      await new Promise((r) => setTimeout(r, 3000));
    }
  }

  console.log("\n═══════════════════════════════════════════");
  console.log(`  Done! ${results.success} generated, ${results.failed} failed`);
  console.log("═══════════════════════════════════════════\n");
}

main();
