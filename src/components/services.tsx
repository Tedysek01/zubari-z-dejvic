import { ScrollReveal } from "./scroll-reveal";

const services = [
  {
    num: "01",
    title: "Vstupní vyšetření",
    text: "Komplexní zhodnocení stavu chrupu, dásní a dutiny ústní. Rentgenové snímky a osobní plán péče.",
  },
  {
    num: "02",
    title: "Dentální hygiena",
    text: "Důkladné odstranění zubního kamene, pigmentací a plaku. Individuální doporučení domácí péče.",
  },
  {
    num: "03",
    title: "Léčba kazů",
    text: "Včasná detekce a ošetření pod zvětšením. Kvalitní materiály pro trvalý výsledek.",
  },
  {
    num: "04",
    title: "Endodoncie",
    text: "Ošetření kořenových kanálků pod mikroskopem. Včetně reendodontických výkonů.",
  },
  {
    num: "05",
    title: "Estetické korekce",
    text: "Bělení, výměna výplní, fazety a korunky. Šetrné úpravy pro přirozený úsměv.",
  },
  {
    num: "06",
    title: "Chirurgie & implantáty",
    text: "Extrakce, zuby moudrosti a zavedení implantátů s 3D plánováním.",
  },
];

export function Services() {
  return (
    <section
      id="sluzby"
      className="py-32 bg-charcoal text-white relative overflow-hidden section-edge-top section-edge-bottom"
    >
      {/* Diagonal lines — more visible here against dark */}
      <div className="absolute inset-0 diagonal-lines opacity-[0.035]" />

      {/* Large ghosted number — background texture */}
      <div className="absolute -right-12 top-16 font-serif text-[18rem] leading-none text-white/[0.015] select-none pointer-events-none tracking-tighter">
        06
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <span className="text-[0.72rem] tracking-[0.12em] uppercase text-teal-light font-medium">
                Služby
              </span>
              <h2 className="font-serif font-light text-[clamp(2rem,3.5vw,3rem)] leading-[1.18] mt-4">
                Co pro vás děláme
              </h2>
            </div>
            <p className="text-white/40 text-[0.92rem] max-w-[360px] leading-relaxed">
              Od vstupního vyšetření po implantáty — vše s&nbsp;důrazem na
              preciznost a&nbsp;váš komfort.
            </p>
          </div>
        </ScrollReveal>

        {/* Services — numbered list, 2 columns */}
        <div className="grid md:grid-cols-2 gap-x-16">
          {services.map((s, i) => (
            <ScrollReveal key={s.num} delay={i % 2}>
              <div className="group py-8 border-t border-white/[0.08] cursor-default">
                <div className="flex items-start gap-6">
                  <span className="font-serif text-[1.8rem] text-teal/30 leading-none mt-0.5 shrink-0 transition-colors duration-300 group-hover:text-teal/60">
                    {s.num}
                  </span>
                  <div>
                    <h3 className="font-serif text-[1.25rem] mb-2 transition-colors duration-300 group-hover:text-teal-light">
                      {s.title}
                    </h3>
                    <p className="text-white/40 text-[0.86rem] leading-[1.7] transition-colors duration-300 group-hover:text-white/55">
                      {s.text}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="/sluzby"
              className="text-[0.78rem] tracking-[0.06em] uppercase px-8 py-3.5 border border-white/15 text-white rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Podrobně o službách &rarr;
            </a>
            <a
              href="/cenik"
              className="text-[0.88rem] text-white/40 hover:text-teal-light transition-colors duration-300"
            >
              Zobrazit ceník
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
