import Image from "next/image";
import { ScrollReveal } from "./scroll-reveal";

const stats = [
  { number: "15+", label: "let praxe" },
  { number: "4 000+", label: "spokojených pacientů" },
  { number: "8", label: "odborných služeb" },
];

export function Philosophy() {
  return (
    <section id="o-nas" className="py-28 relative">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Stats bar — with teal accents on numbers */}
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 py-12 border-y border-divider mb-24">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`flex items-baseline gap-3 ${i > 0 ? "md:pl-12 md:border-l md:border-divider" : ""}`}
              >
                <span className="font-serif text-[3rem] text-teal-dark leading-none tracking-tight">
                  {s.number}
                </span>
                <span className="text-[0.82rem] text-warm-gray uppercase tracking-[0.08em]">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Content — asymmetric with visual tension */}
        <div className="grid md:grid-cols-[1fr_480px] gap-20 items-start">
          {/* Left — photo + branded accent */}
          <div className="relative">
            <ScrollReveal>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="/photos/philosophy.webp"
                  alt="Interiér ošetřovací místnosti"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <div className="absolute -bottom-4 -right-4 w-28 h-28 rounded-xl -z-10 overflow-hidden">
              <div className="w-full h-full diagonal-lines opacity-20" />
            </div>
          </div>

          {/* Right — text */}
          <div className="md:pt-16">
            <ScrollReveal>
              <span className="text-[0.72rem] tracking-[0.12em] uppercase text-teal-dark font-medium">
                O nás
              </span>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <h2 className="font-serif font-light text-[clamp(2rem,3.5vw,3rem)] leading-[1.18] mt-5 mb-8">
                Věříme, že cesta
                ke&nbsp;zdravému úsměvu
                má být <em className="italic text-teal-dark">klidná</em>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <div className="w-12 h-[2px] bg-teal/30 mb-8" />
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <p className="text-warm-gray text-[1rem] leading-[1.8] mb-5">
                Jsme tým lidí, kterým záleží na&nbsp;tom, abyste z&nbsp;ordinace
                odcházeli s&nbsp;pocitem, že jste v&nbsp;dobrých rukou. Každý
                pacient je pro nás člověk, ne číslo.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={3}>
              <p className="text-warm-gray text-[1rem] leading-[1.8] mb-12">
                Pracujeme s&nbsp;nejmodernějšími technologiemi, ale nikdy
                nezapomínáme na to nejdůležitější — naslouchat a vysvětlovat.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={4}>
              <div className="space-y-7">
                <div className="border-l-2 border-teal/60 pl-5">
                  <h3 className="font-serif text-[1.15rem] mb-1">Čas pro vás</h3>
                  <p className="text-[0.86rem] text-warm-gray leading-relaxed">
                    Na každé ošetření si rezervujeme dostatek času. Nikdy nespěcháme.
                  </p>
                </div>
                <div className="border-l-2 border-teal/60 pl-5">
                  <h3 className="font-serif text-[1.15rem] mb-1">Moderní vybavení</h3>
                  <p className="text-[0.86rem] text-warm-gray leading-relaxed">
                    Digitální rentgen, mikroskop, šetrná anestezie.
                  </p>
                </div>
                <div className="border-l-2 border-teal/60 pl-5">
                  <h3 className="font-serif text-[1.15rem] mb-1">Lidský přístup</h3>
                  <p className="text-[0.86rem] text-warm-gray leading-relaxed">
                    Každý plán léčby vysvětlíme srozumitelně a&nbsp;bez&nbsp;nátlaku.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
