import Image from "next/image";
import { ScrollReveal } from "./scroll-reveal";

const members = [
  {
    name: "Pavlína Froňková",
    role: "Zubní lékařka, zakladatelka",
  },
  {
    name: "—",
    role: "Zubní lékař/ka",
  },
  {
    name: "—",
    role: "Dentální hygienistka",
  },
];

export function Team() {
  return (
    <section id="tym" className="py-28">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_1fr] gap-20 items-start">
          {/* Left — text + list */}
          <div>
            <ScrollReveal>
              <span className="text-[0.72rem] tracking-[0.12em] uppercase text-teal-dark font-medium">
                Náš tým
              </span>
              <h2 className="font-serif font-light text-[clamp(2rem,3.5vw,3rem)] leading-[1.18] mt-4 mb-4">
                Lidé, kterým svěříte
                svůj úsměv
              </h2>
              <div className="w-12 h-[2px] bg-teal/30 mb-8" />
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <p className="text-warm-gray text-[1rem] leading-[1.8] mb-14">
                Sdílíme společnou filozofii — důvěra a kvalita na prvním
                místě. Každý člen týmu přináší svou odbornost
                s&nbsp;lidským přístupem.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <div>
                {members.map((m, i) => (
                  <div
                    key={i}
                    className="group flex items-baseline justify-between py-5 border-b border-divider hover:border-teal/30 transition-colors duration-300"
                  >
                    <span className="font-serif text-[1.4rem] group-hover:text-teal-dark transition-colors duration-300">
                      {m.name}
                    </span>
                    <span className="text-[0.78rem] text-warm-gray-light tracking-[0.06em] uppercase">
                      {m.role}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right — group photo */}
          <ScrollReveal delay={1}>
            <div className="relative">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src="/photos/team.webp"
                  alt="Tým ordinace Zubaři z Dejvic"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-3 -right-3 w-20 h-20 rounded-xl -z-10 overflow-hidden">
                <div className="w-full h-full diagonal-lines opacity-20" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
