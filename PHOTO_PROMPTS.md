# Fotky pro web Zubaři z Dejvic — Prompty pro generování

## Vizuální kontext webu

Web je postavený na vizuální identitě, která se vyhýbá klinickému, nemocničnímu nebo sterilnímu dojmu. Cíl je působit jako **premium wellness prostor** — klidný, teplý, důvěryhodný. Barvy webu jsou teplé neutrální tóny (linen, béžová, teplé šedé) s teal akcentem (#3BB5A8).

### Globální pravidla pro všechny fotky

- **Barevná teplota**: Teplá, nikdy studená. Žádné modré/zelené nemocniční osvětlení.
- **Světlo**: Přirozené denní světlo, měkké stíny, žádný blesk ani harsh přímé světlo.
- **Atmosféra**: Klidná, důvěryhodná, moderní ale přívětivá.
- **Co NIKDY**: Pacienti s otevřenou pusou, zuby zblízka, krev, stříkačky v akci, strach, bolest, plastové ochranné brýle na pacientovi, přesvícené bílé místnosti, modré LED světla, stock-photo energie.
- **Styl**: Fotorealistický, editorial quality, jako z časopisu o architektuře/designu.
- **Hloubka ostrosti**: Mírné bokeh (f/2.8–f/4), důraz na hloubku a prostorovost.

---

## Prompty

```json
[
  {
    "id": "hero",
    "placement": "Hero sekce — hlavní vizuál webu, první věc kterou návštěvník vidí",
    "aspect_ratio": "3:4",
    "dimensions": "1200x1600px minimum",
    "filename": "hero.jpg",
    "prompt": "Interior photograph of a modern dental clinic reception area and hallway, shot from the perspective of someone entering through the front door. The space is bright and airy with large windows letting in warm natural afternoon light that casts soft golden shadows across the floor. The interior design is minimal and Scandinavian-inspired: light oak wood paneling on one wall, smooth white plaster walls, a reception desk made of natural stone or concrete with rounded edges. A single potted monstera plant sits in the corner. The floor is polished concrete or light stone tiles. The color palette is warm neutrals — cream, warm white, light wood, with subtle teal accent visible in a small decorative detail (a vase, a book spine, or a cushion on a waiting chair). The overall mood is calm, welcoming, and luxurious without being ostentatious — like walking into an Aesop store or a Scandinavian spa. No people visible. No dental equipment visible. No clinical or hospital feeling. Shot with a wide-angle lens (24mm equivalent) at f/4, creating gentle depth. Natural light only, no flash. The image should feel like an interior architecture photograph from Dezeen or Kinfolk magazine.",
    "negative_prompt": "Blue lighting, fluorescent lights, harsh shadows, clinical white walls, visible dental equipment, toothbrush, teeth, dental chair, stock photo look, overexposed, flat lighting, plastic furniture, generic office, hospital corridor, linoleum floor, drop ceiling, neon signs",
    "style_reference": "Aesop store interiors, Norm Architects projects, Kinfolk magazine photography",
    "notes": "Tento obrázek bude mít přes sebe silný gradient overlay (95% opacity vlevo, 50% vpravo), takže pravá strana fotky bude víc vidět. Kompozice by měla mít zajímavý detail vpravo."
  },
  {
    "id": "philosophy",
    "placement": "Sekce O nás — velký obrázek vlevo vedle textu, aspect ratio 4:5",
    "aspect_ratio": "4:5",
    "dimensions": "960x1200px minimum",
    "filename": "philosophy.jpg",
    "prompt": "Intimate interior photograph of a modern dental treatment room, photographed from the doorway looking in at an angle. The room is bathed in soft natural light from a large window on the left side, partially covered by sheer linen curtains that diffuse the light beautifully. The dental chair is modern and minimalist in design, upholstered in warm gray or light taupe leather, not the typical clinical blue or green. The cabinetry is custom-made from light oak wood with integrated handles, resembling high-end kitchen cabinetry rather than medical furniture. On the counter, a small succulent plant in a ceramic pot and neatly arranged instruments covered with a cloth. The walls are a warm off-white with subtle texture. The ceiling has recessed warm-tone lighting (turned off — the room is lit naturally). The overall feeling is like a well-designed private room in a boutique hotel, not a medical facility. The composition uses the rule of thirds, with the chair positioned in the right third and the window light creating a beautiful gradient across the frame. Shot at 35mm equivalent, f/2.8, shallow depth of field with the foreground slightly blurred. Color grading: warm, slightly desaturated, with lifted shadows.",
    "negative_prompt": "Harsh lighting, blue dental chair, visible drills or syringes, open instrument trays, overhead surgical lamp turned on, clinical green or blue walls, patient in chair, rubber gloves, face masks on the counter, messy cables, standard medical cabinetry, plastic containers, bright white everything, stock photography style, HDR look",
    "style_reference": "Cereal Magazine interiors, soft natural light photography by Pia Ulin, Japanese dental clinic design (Nendo, Torafu Architects)",
    "notes": "Fotka bude mít vedle sebe teal accent element z loga. Důležité aby barevnost fotky ladila s teplými neutrálními tóny webu."
  },
  {
    "id": "team_group",
    "placement": "Sekce Tým — vertikální fotka vpravo vedle seznamu jmen, aspect ratio 3:4",
    "aspect_ratio": "3:4",
    "dimensions": "960x1280px minimum",
    "filename": "team.jpg",
    "prompt": "Candid group portrait of three dental professionals (two women and one man, or two women) standing together in a modern, light-filled dental clinic hallway. They are wearing clean, well-fitted scrubs or medical uniforms in a neutral tone — warm gray, soft khaki, or muted sage — NOT standard blue or green hospital scrubs. They are smiling naturally, relaxed, some looking at each other rather than directly at camera — the feeling is genuine and unposed, like a behind-the-scenes moment caught during a quiet afternoon. The background is the clinic interior: light oak wood, white walls, a glimpse of a window. The lighting is soft and natural, coming from a window to the left, creating gentle directional light with warm tones. Shallow depth of field (f/2.8) with the background softly blurred. The professionals are of Central European appearance. One person (the lead dentist, a woman in her 30s-40s) stands slightly forward. Their expressions convey warmth, competence, and approachability. The overall mood is 'people you'd trust with your health' — professional but human. Color grading: warm, natural skin tones, slightly lifted blacks for a film-like quality.",
    "negative_prompt": "Posed corporate headshot, arms crossed, sterile white background, harsh flash, dental masks on, gloves on, surgical caps, stiff posture, fake smiles, stock photo diversity casting, blue scrubs, green scrubs, ID badges prominently visible, stethoscopes, white lab coats, hospital corridor background, fluorescent lighting, shiny skin from flash",
    "style_reference": "Portraits by Jamie Hawkesworth, editorial team portraits from Monocle magazine, natural light portraiture",
    "notes": "DŮLEŽITÉ: Tohle je nejkritičtější fotka. Musí působit autenticky — NE jako stock photo. Pokud výsledek vypadá jako 'doktor-stock-foto', je lepší fotku nepoužít a sekci předělat. Zvážit, zda nebude lepší použít reálnou fotku skutečného týmu."
  },
  {
    "id": "space_main",
    "placement": "Sekce Ordinace — hlavní velká fotka (7 sloupců z 12), aspect ratio 16:10",
    "aspect_ratio": "16:10",
    "dimensions": "1400x875px minimum",
    "filename": "space-main.jpg",
    "prompt": "Wide-angle interior photograph of a modern dental treatment room from a three-quarter angle, showing the full space. Two dental chairs are visible, separated by a low dividing element made of frosted glass and light wood. Large floor-to-ceiling windows along one wall let in abundant natural daylight, with views of trees or greenery outside (suggesting the Dejvice neighborhood of Prague). The room has a high ceiling with subtle architectural details — perhaps exposed concrete or a wood-slatted ceiling panel. The dental chairs are modern, slim-profile designs in warm gray upholstery. Cabinetry is handleless, in light oak with white countertops. A large monitor on an articulating arm is folded away neatly. The floor is a warm-toned engineered wood or large-format porcelain tiles in a stone-like finish. Small design touches: a framed botanical print on the far wall, a warm-toned pendant light (turned off, natural light is sufficient). The image feels spacious, organized, and serene. Shot at 20mm equivalent, f/5.6 for full sharpness throughout. Natural light with slight warm color grading.",
    "negative_prompt": "Cramped space, cluttered counters, visible medical waste bins, blue or green color scheme, overhead fluorescent panels, popcorn ceiling, vinyl flooring, small windows, dark room, messy cables, open drawers, used instruments, paper bibs, patient belongings, cheap plastic furniture, old equipment",
    "style_reference": "Architectural photography by Hélène Binet, interior shots from ArchDaily of Japanese/Scandinavian dental clinics, commercial interiors by Rory Gardiner",
    "notes": "Toto je showcase fotka prostoru. Musí vypadat jako z portfolia architektonického studia. Žádné kompromisy na kvalitě kompozice."
  },
  {
    "id": "space_waiting",
    "placement": "Sekce Ordinace — menší fotka vpravo nahoře (5 sloupců z 12), aspect ratio 16:10",
    "aspect_ratio": "16:10",
    "dimensions": "1000x625px minimum",
    "filename": "space-waiting.jpg",
    "prompt": "Photograph of a modern dental clinic waiting area, intimate and inviting. A built-in bench or banquette seating along one wall, upholstered in a warm textured fabric — bouclé or linen in a cream or light oatmeal tone. Above it, a long horizontal shelf with a few carefully curated items: a small ceramic vase with dried eucalyptus stems, two design magazines (Kinfolk, Cereal), and a simple clock. The opposite wall has light oak wood slat paneling creating subtle texture and warmth. A round side table in natural wood holds a carafe of water with lemon slices and two glasses. The floor is the same warm stone or wood as the treatment rooms, creating continuity. Soft natural light enters from the right side, creating a gentle gradient across the scene. The space is empty of people — it feels like a moment of quiet before the day begins. Shot at 35mm, f/3.5, with the water carafe in soft focus in the foreground. Warm, slightly muted color palette.",
    "negative_prompt": "Plastic chairs, magazine rack with old magazines, TV screen on wall, children's play corner, vending machine, brochure displays, fluorescent lighting, patterned wallpaper, dark waiting room, crowded space, commercial carpet, coffee machine, reception window with sliding glass",
    "style_reference": "Waiting areas from The Well (NYC), Aesop store seating areas, Norm Architects residential projects",
    "notes": "Čekárna je první kontakt pacienta s ordinací. Musí vyzařovat klid a kvalitu. Žádné 'čekárna u doktora' vibes."
  },
  {
    "id": "space_detail",
    "placement": "Sekce Ordinace — malá čtvercová fotka vlevo dole (4 sloupce z 12), aspect ratio 1:1",
    "aspect_ratio": "1:1",
    "dimensions": "800x800px minimum",
    "filename": "space-detail.jpg",
    "prompt": "Close-up still life photograph of a dental clinic countertop detail. A neatly arranged tray of dental instruments wrapped in sterilization packaging, next to a small ceramic bowl and a potted succulent in a handmade clay pot. The countertop is white Corian or natural stone with subtle veining. Behind the objects, the edge of light oak cabinetry is visible, slightly out of focus. The lighting is soft and directional — coming from a window to the left, creating delicate shadows that give depth to the objects. The composition is off-center, with the succulent in the left third and the instrument tray in the right, following editorial still-life conventions. The overall feeling is clean, precise, and considered — like a product photograph for a design-conscious brand. Very shallow depth of field (f/2.0), with the front edge of the countertop and the background both softly blurred. Color palette: white, cream, pale green of the plant, warm wood tones. Subtle warmth in the color grading.",
    "negative_prompt": "Messy counter, loose instruments, blood, gloves, used materials, bright plastic packaging, chemical bottles with labels visible, harsh overhead light, cluttered workspace, dental molds, impression trays, visible brand names on equipment, blue paper products",
    "style_reference": "Product photography by Carl Kleiner, still life photography from Cereal Magazine, overhead shots by Gentl & Hyers",
    "notes": "Detail shot — musí vypadat jako editorial still life, ne jako dokumentace vybavení. Jde o atmosféru, ne o informaci."
  },
  {
    "id": "space_exterior",
    "placement": "Sekce Ordinace — široká fotka vpravo dole (8 sloupců z 12), aspect ratio 21:9",
    "aspect_ratio": "21:9",
    "dimensions": "1680x720px minimum",
    "filename": "space-exterior.jpg",
    "prompt": "Wide cinematic photograph of a Prague residential street in the Dejvice neighborhood (Praha 6), shot during golden hour in late afternoon. The scene shows a quiet, tree-lined street with elegant early 20th century apartment buildings in the functionalist or art deco style typical of Dejvice — clean geometric facades, large windows, light-colored plaster in cream or warm gray tones. The entrance to a ground-floor medical practice is subtly visible — a modern glass door with minimal signage, flanked by a small potted olive tree. The street has mature linden or chestnut trees with dappled light filtering through the leaves, casting beautiful shadow patterns on the sidewalk. A few parked cars (modern, European) line the street but don't dominate the composition. The sky is a warm, clear gradient from pale blue to golden near the horizon. The overall feeling is of a quiet, affluent, well-maintained Prague neighborhood — civilized, European, livable. Shot at 24mm equivalent, f/8 for deep focus throughout, with a slight panoramic crop. The color grading emphasizes the golden hour warmth: amber highlights, cool shadows, rich but not oversaturated.",
    "negative_prompt": "Tourist areas, Prague Castle, Charles Bridge, Old Town, cobblestones, graffiti, construction, ugly modern buildings, panel houses (panelák), busy traffic, crowds, commercial signage, neon signs, trash on street, dark overcast sky, winter scene without leaves, snow, scaffolding",
    "style_reference": "Urban photography by Fred Herzog, European city photography from Monocle magazine, golden hour street scenes by Saul Leiter (but in color and modern)",
    "notes": "Tato fotka zasazuje ordinaci do kontextu místa — Dejvice, Praha 6. Je důležité aby vypadala jako reálná pražská ulice, ne jako generic European city. Dejvice mají specifický architektonický charakter (funkcionalismus 20.-30. let, široké ulice, stromy). Ideálně by fotka měla být REÁLNÁ fotka z okolí ordinace, ne generovaná."
  }
]
```

---

## Best practices pro psaní promptů (použité výše)

### Struktura promptu

1. **Typ záběru** — Co to je? (interior photograph, close-up still life, wide cinematic...)
2. **Subjekt** — Co je hlavní objekt? (dental treatment room, waiting area, street...)
3. **Kompozice** — Odkud se dívám? (from the doorway, three-quarter angle, eye level...)
4. **Světlo** — Jaké a odkud? (soft natural light from a large window on the left...)
5. **Materiály a barvy** — Konkrétní materiály (light oak wood, warm gray leather, white Corian...)
6. **Detaily** — Malé věci co dělají scénu reálnou (potted succulent, design magazines, water carafe...)
7. **Atmosféra** — Jak se to má cítit? (calm, welcoming, like walking into an Aesop store...)
8. **Technické parametry** — Objektiv, clona, hloubka ostrosti (35mm, f/2.8, shallow depth of field...)
9. **Color grading** — Finální úprava barev (warm, slightly desaturated, lifted shadows...)

### Co dělá prompt dobrý

- **Specifičnost > obecnost**: "light oak wood paneling" je lepší než "wooden wall"
- **Reference z reálného světa**: "like an Aesop store" je silnější než "minimalist design"
- **Negative prompty**: Explicitně říct co NECHCETE zabraňuje common failures
- **Technické parametry**: Ohnisková vzdálenost a clona dramaticky mění výsledek
- **Srovnání s fotografy/magazíny**: AI modely znají styly konkrétních fotografů

### Formát

Každý prompt obsahuje:
- `id` — unikátní identifikátor pro mapping na komponentu
- `placement` — kde přesně na webu fotka sedí a v jakém kontextu
- `aspect_ratio` — poměr stran (musí odpovídat CSS)
- `dimensions` — minimální rozlišení
- `filename` — navrhovaný název souboru
- `prompt` — hlavní prompt, co nejdetailnější
- `negative_prompt` — co explicitně vyloučit
- `style_reference` — vizuální reference (fotografové, magazíny, značky)
- `notes` — kontext pro člověka, který fotku vybírá/generuje
