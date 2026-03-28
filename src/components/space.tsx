import Image from "next/image";
import { ScrollReveal } from "./scroll-reveal";

const photos = [
  {
    src: "/photos/space-main.webp",
    alt: "Hlavní ošetřovací místnost",
    className: "col-span-12 md:col-span-7",
    aspect: "aspect-[16/10]",
  },
  {
    src: "/photos/space-waiting.webp",
    alt: "Čekárna",
    className: "col-span-12 md:col-span-5",
    aspect: "aspect-[16/10]",
  },
  {
    src: "/photos/space-detail.webp",
    alt: "Detail vybavení ordinace",
    className: "col-span-12 md:col-span-4",
    aspect: "aspect-square",
  },
  {
    src: "/photos/space-exterior.webp",
    alt: "Budova ordinace, Dejvice",
    className: "col-span-12 md:col-span-8",
    aspect: "aspect-[21/9]",
  },
];

export function Space() {
  return (
    <section id="ordinace" className="py-28">
      <div className="max-w-[1200px] mx-auto px-6">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
            <div>
              <span className="text-[0.72rem] tracking-[0.12em] uppercase text-teal-dark font-medium">
                Ordinace
              </span>
              <h2 className="font-serif font-light text-[clamp(2rem,3.5vw,3rem)] leading-[1.18] mt-4">
                Prostor navržený<br className="hidden md:block" /> pro váš klid
              </h2>
            </div>
            <p className="text-warm-gray text-[0.92rem] max-w-[340px] leading-relaxed">
              Světlo, ticho, přirozené materiály. Každý detail je promyšlený.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-12 gap-3 md:gap-4">
          {photos.map((photo, i) => (
            <ScrollReveal key={photo.src} delay={i} className={photo.className}>
              <div className={`relative ${photo.aspect} rounded-xl overflow-hidden`}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
