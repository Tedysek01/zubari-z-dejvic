import { ScrollReveal } from "./scroll-reveal";

const clinicHours = [
  { day: "Pondělí", time: "9:00 — 16:00" },
  { day: "Úterý", time: "8:00 — 14:00" },
  { day: "Středa", time: "9:00 — 16:00" },
  { day: "Čtvrtek", time: "9:00 — 16:00" },
  { day: "Pátek", time: "8:00 — 12:00" },
];

const hygieneHours = [
  { day: "Pondělí", time: "9:00 — 16:00" },
  { day: "Úterý", time: "9:00 — 16:00" },
  { day: "Středa", time: "Zavřeno" },
  { day: "Čtvrtek", time: "9:00 — 16:00" },
  { day: "Pátek", time: "9:00 — 16:00" },
];

export function Contact() {
  return (
    <section
      id="kontakt"
      className="py-32 bg-charcoal text-white relative overflow-hidden section-edge-top"
    >
      {/* Diagonal texture */}
      <div className="absolute inset-0 diagonal-lines opacity-[0.025]" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-[1fr_1fr] gap-20">
          {/* Left — info */}
          <div>
            <ScrollReveal>
              <span className="text-[0.72rem] tracking-[0.12em] uppercase text-teal-light font-medium">
                Kontakt
              </span>
              <h2 className="font-serif font-light text-[clamp(2rem,3.5vw,3rem)] leading-[1.18] mt-4 mb-4">
                Těšíme se na vás
              </h2>
              <div className="w-12 h-[2px] bg-teal/30 mb-10" />
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <div className="space-y-7 mb-12">
                <div>
                  <div className="text-[0.68rem] uppercase tracking-[0.12em] text-white/35 mb-1.5">
                    Adresa
                  </div>
                  <div className="text-[1.02rem]">
                    Kafkova 605/16, Praha 6 — Dejvice
                  </div>
                  <div className="text-[0.82rem] text-white/35 mt-1">
                    Metro Dejvická (linka A) &middot; Tram Vítězné náměstí
                  </div>
                </div>

                <div>
                  <div className="text-[0.68rem] uppercase tracking-[0.12em] text-white/35 mb-1.5">
                    Telefon
                  </div>
                  <a
                    href="tel:+420602595134"
                    className="text-[1.02rem] text-teal-light hover:text-white transition-colors duration-300"
                  >
                    +420 602 595 134
                  </a>
                </div>

                <div>
                  <div className="text-[0.68rem] uppercase tracking-[0.12em] text-white/35 mb-1.5">
                    Email
                  </div>
                  <a
                    href="mailto:stomordinace@gmail.com"
                    className="text-[1.02rem] text-teal-light hover:text-white transition-colors duration-300"
                  >
                    stomordinace@gmail.com
                  </a>
                </div>

                <div>
                  <div className="text-[0.68rem] uppercase tracking-[0.12em] text-white/35 mb-1.5">
                    Parkování
                  </div>
                  <div className="text-[0.88rem] text-white/50">
                    Zdarma v zónách na ul. Dejvická a Václavkova
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="/objednat"
                  className="group inline-block text-[0.78rem] tracking-[0.06em] uppercase px-8 py-3.5 bg-teal-dark text-white rounded-full hover:bg-teal transition-all duration-300 hover:shadow-[0_4px_20px_rgba(30,122,112,0.3)]"
                >
                  Objednat se
                  <span className="inline-block ml-1.5 transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                </a>
                <a
                  href="tel:+420602595134"
                  className="text-[0.88rem] text-teal-light hover:text-white transition-colors duration-300"
                >
                  +420 602 595 134
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — hours */}
          <div>
            <ScrollReveal delay={1}>
              <h3 className="font-serif text-[1.25rem] mb-6">Zubní ordinace</h3>
              <div className="mb-12">
                {clinicHours.map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between py-2.5 text-[0.88rem] border-b border-white/[0.06]"
                  >
                    <span className="text-white/45">{h.day}</span>
                    <span className="tabular-nums">{h.time}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <h3 className="font-serif text-[1.25rem] mb-6">Dentální hygiena</h3>
              <div className="mb-12">
                {hygieneHours.map((h) => (
                  <div
                    key={`hyg-${h.day}`}
                    className="flex justify-between py-2.5 text-[0.88rem] border-b border-white/[0.06]"
                  >
                    <span className="text-white/45">{h.day}</span>
                    <span className={`tabular-nums ${h.time === "Zavřeno" ? "text-white/25" : ""}`}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={3}>
              <p className="text-[0.8rem] text-white/25 leading-relaxed">
                V&nbsp;současné době přijímáme nové pacienty.
                Úvodní konzultace trvá přibližně 45 minut.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
