import { GoogleGenAI } from "@google/genai";
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
    id: "hero",
    filename: "hero.jpg",
    prompt: `Generate a photorealistic interior photograph of a modern dental clinic reception area and hallway, shot from the perspective of someone entering through the front door. The space is bright and airy with large windows letting in warm natural afternoon light that casts soft golden shadows across the floor. The interior design is minimal and Scandinavian-inspired: light oak wood paneling on one wall, smooth white plaster walls, a reception desk made of natural stone or concrete with rounded edges. A single potted monstera plant sits in the corner. The floor is polished concrete or light stone tiles. The color palette is warm neutrals — cream, warm white, light wood, with subtle teal accent visible in a small decorative detail like a vase or a book spine. The overall mood is calm, welcoming, and luxurious without being ostentatious — like walking into an Aesop store or a Scandinavian spa. No people visible. No dental equipment visible. No clinical or hospital feeling. Shot with a wide-angle lens (24mm equivalent) at f/4, creating gentle depth. Natural light only, no flash. The image should feel like an interior architecture photograph from Dezeen or Kinfolk magazine. Absolutely no blue lighting, fluorescent lights, harsh shadows, clinical white walls, toothbrush, teeth, dental chair, stock photo look. Portrait orientation, 3:4 aspect ratio.`,
  },
  {
    id: "philosophy",
    filename: "philosophy.jpg",
    prompt: `Generate a photorealistic intimate interior photograph of a modern dental treatment room, photographed from the doorway looking in at an angle. The room is bathed in soft natural light from a large window on the left side, partially covered by sheer linen curtains that diffuse the light beautifully. The dental chair is modern and minimalist in design, upholstered in warm gray or light taupe leather, not the typical clinical blue or green. The cabinetry is custom-made from light oak wood with integrated handles, resembling high-end kitchen cabinetry rather than medical furniture. On the counter, a small succulent plant in a ceramic pot and neatly arranged instruments covered with a cloth. The walls are a warm off-white with subtle texture. The overall feeling is like a well-designed private room in a boutique hotel, not a medical facility. Shot at 35mm equivalent, f/2.8, shallow depth of field with the foreground slightly blurred. Color grading: warm, slightly desaturated, with lifted shadows. No harsh lighting, no blue dental chair, no visible drills or syringes, no overhead surgical lamp turned on, no clinical green or blue walls. Portrait orientation, 4:5 aspect ratio.`,
  },
  {
    id: "team",
    filename: "team.jpg",
    prompt: `Generate a photorealistic candid group portrait of three dental professionals (two women and one man) standing together in a modern, light-filled dental clinic hallway. They are wearing clean, well-fitted medical uniforms in a neutral tone — warm gray or muted sage — NOT standard blue or green hospital scrubs. They are smiling naturally, relaxed, some looking at each other rather than directly at camera — the feeling is genuine and unposed, like a behind-the-scenes moment. The background is the clinic interior: light oak wood, white walls, a glimpse of a window. The lighting is soft and natural, coming from a window to the left, creating gentle directional light with warm tones. Shallow depth of field (f/2.8). The professionals are of Central European / Czech appearance, caucasian. One person (the lead dentist, a woman in her 30s-40s) stands slightly forward. Their expressions convey warmth, competence, and approachability. No posed corporate headshot, no arms crossed, no harsh flash, no dental masks on, no surgical caps, no stethoscopes, no white lab coats. Portrait orientation, 3:4 aspect ratio.`,
  },
  {
    id: "space-main",
    filename: "space-main.jpg",
    prompt: `Generate a photorealistic wide-angle interior photograph of a modern dental treatment room from a three-quarter angle, showing the full space. Two dental chairs visible, separated by a low dividing element made of frosted glass and light wood. Large floor-to-ceiling windows along one wall let in abundant natural daylight, with views of trees outside. The dental chairs are modern, slim-profile designs in warm gray upholstery. Cabinetry is handleless, in light oak with white countertops. The floor is warm-toned engineered wood or large-format porcelain tiles. Small design touches: a framed botanical print on the far wall, a warm-toned pendant light. The image feels spacious, organized, and serene. Shot at 20mm equivalent, f/5.6 for full sharpness. Natural light with warm color grading. No blue or green color scheme, no fluorescent panels, no vinyl flooring, no cluttered counters. Landscape orientation, 16:10 aspect ratio.`,
  },
  {
    id: "space-waiting",
    filename: "space-waiting.jpg",
    prompt: `Generate a photorealistic photograph of a modern dental clinic waiting area, intimate and inviting. A built-in bench seating along one wall, upholstered in warm textured bouclé fabric in cream tone. Above it, a long horizontal shelf with curated items: a ceramic vase with dried eucalyptus stems, two design magazines, and a simple clock. The opposite wall has light oak wood slat paneling. A round side table in natural wood holds a carafe of water with lemon slices. Soft natural light enters from the right side. The space is empty of people. Shot at 35mm, f/3.5, with the water carafe in soft focus in the foreground. Warm, slightly muted color palette. No plastic chairs, no TV screen, no children's play corner, no fluorescent lighting, no commercial carpet. Landscape orientation, 16:10 aspect ratio.`,
  },
  {
    id: "space-detail",
    filename: "space-detail.jpg",
    prompt: `Generate a photorealistic close-up still life photograph of a dental clinic countertop detail. A neatly arranged tray of dental instruments wrapped in sterilization packaging, next to a small ceramic bowl and a potted succulent in a handmade clay pot. The countertop is white Corian or natural stone with subtle veining. Behind, the edge of light oak cabinetry slightly out of focus. Soft directional lighting from a window to the left creating delicate shadows. Off-center composition. Very shallow depth of field (f/2.0). Color palette: white, cream, pale green, warm wood tones. No messy counter, no blood, no gloves, no chemical bottles, no bright plastic. Square format, 1:1 aspect ratio.`,
  },
  {
    id: "space-exterior",
    filename: "space-exterior.jpg",
    prompt: `Generate a photorealistic wide cinematic photograph of a Prague residential street in the Dejvice neighborhood (Praha 6), shot during golden hour. A quiet, tree-lined street with elegant early 20th century apartment buildings in functionalist style — clean geometric facades, large windows, light-colored plaster in cream tones. The entrance to a ground-floor medical practice is subtly visible — a modern glass door with minimal signage. Mature linden trees with dappled light filtering through leaves. A few parked European cars. Warm golden hour light: amber highlights, cool shadows. Shot at 24mm, f/8 for deep focus. No tourist areas, no Prague Castle, no cobblestones, no graffiti, no panel houses, no crowds, no winter scene. Ultra-wide landscape orientation, 21:9 aspect ratio.`,
  },
];

async function generateImage(item) {
  console.log(`\n🖼  Generating: ${item.id} → ${item.filename}`);
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

    // Extract image from response
    const parts = response.candidates?.[0]?.content?.parts;
    if (!parts) {
      console.error(`   ❌ No response parts for ${item.id}`);
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
        console.log(`   ✅ Saved: ${filepath} (${sizeKB} KB)`);
        return true;
      }
    }

    // If no image found, log text response
    const textParts = parts.filter((p) => p.text).map((p) => p.text);
    console.error(`   ❌ No image in response for ${item.id}`);
    if (textParts.length) console.error(`   Text:`, textParts.join(" ").slice(0, 300));
    return false;
  } catch (err) {
    console.error(`   ❌ Error for ${item.id}:`, err.message || err);
    return false;
  }
}

async function main() {
  // Ensure output directory exists
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  console.log("═══════════════════════════════════════════");
  console.log("  Zubaři z Dejvic — Photo Generation");
  console.log(`  Model: ${MODEL}`);
  console.log(`  Output: ${OUTPUT_DIR}`);
  console.log(`  Photos: ${prompts.length}`);
  console.log("═══════════════════════════════════════════");

  const results = { success: 0, failed: 0 };

  // Generate sequentially to avoid rate limits
  for (const item of prompts) {
    const ok = await generateImage(item);
    if (ok) results.success++;
    else results.failed++;

    // Small delay between requests
    if (prompts.indexOf(item) < prompts.length - 1) {
      console.log("   ⏳ Waiting 3s before next...");
      await new Promise((r) => setTimeout(r, 3000));
    }
  }

  console.log("\n═══════════════════════════════════════════");
  console.log(`  Done! ✅ ${results.success} generated, ❌ ${results.failed} failed`);
  console.log("═══════════════════════════════════════════\n");
}

main();
