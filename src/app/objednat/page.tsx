import type { Metadata } from "next";
import Image from "next/image";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "Objednat se — Zubaři z Dejvic | Zubní ordinace Praha 6",
  description:
    "Objednejte se do zubní ordinace Zubaři z Dejvic. Telefon +420 602 595 134, email stomordinace@gmail.com. Kafkova 605/16, Praha 6 Dejvice.",
};

const clinicHours = [
  { day: "Pondělí", hours: "9:00 – 16:00" },
  { day: "Úterý", hours: "8:00 – 14:00" },
  { day: "Středa", hours: "9:00 – 16:00" },
  { day: "Čtvrtek", hours: "9:00 – 16:00" },
  { day: "Pátek", hours: "8:00 – 12:00" },
];

const hygieneHours = [
  { day: "Pondělí", hours: "9:00 – 16:00" },
  { day: "Úterý", hours: "9:00 – 16:00" },
  { day: "Středa", hours: "Zavřeno" },
  { day: "Čtvrtek", hours: "9:00 – 16:00" },
  { day: "Pátek", hours: "9:00 – 16:00" },
];

const emergencies = [
  {
    name: "Nemocnice Na Františku",
    address: "Na Františku 847/8, Praha 1",
    phone: "222 801 346",
    hours: "Pracovní dny 17:00–22:00, víkendy a svátky 10:00–22:00",
    note: "Pro děti i dospělé",
  },
  {
    name: "Městská poliklinika Praha",
    address: "Spálená 78/12, Praha 1",
    phone: "222 924 268",
    hours: "Pracovní dny 18:00–23:30, pátky 16:00–23:30, víkendy 7:00–22:00",
    note: "Pro dospělé",
  },
  {
    name: "Thomayerova nemocnice",
    address: "Vídeňská 800/5, Praha 4",
    phone: "261 083 546",
    hours: "Pracovní dny 17:30–22:30, víkendy a svátky 7:30–22:30",
    note: "Pro dospělé, pavilon B1",
  },
];

export default function ObjednatPage() {
  return (
    <>
      <Nav />

      {/* Hero with entrance photo */}
      <section className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40%] h-full diagonal-lines-bold opacity-[0.04]" />
        <div className="absolute top-[15%] right-[10%] w-3 h-3 rounded-full bg-teal/20" />

        <div className="max-w-[1200px] mx-auto px-6 relative z-10 pt-8 pb-16">
          <div className="grid md:grid-cols-[1fr_300px] gap-12 items-center">
            <div>
              <ScrollReveal>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-2 rounded-full bg-teal" />
                  <span className="text-[0.72rem] tracking-[0.12em] uppercase text-teal-dark font-medium">
                    Objednání
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={1}>
                <h1 className="font-serif font-light text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.08] tracking-[-0.01em] max-w-[700px] mb-6">
                  Objednejte se{" "}
                  <span className="text-teal-dark italic">k nám</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={2}>
                <div className="w-16 h-[2px] bg-teal/40 mb-6" />
                <p className="text-warm-gray text-[1.05rem] max-w-[480px] leading-[1.75]">
                  Přijímáme nové pacienty. Objednat se můžete telefonicky nebo
                  emailem — ozveme se vám co nejdříve.
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={1}>
              <div className="relative">
                <div className="relative aspect-[4/5] rounded-2xl rounded-tr-[60px] overflow-hidden">
                  <Image
                    src="/photos/booking-entrance.webp"
                    alt="Vstup do ordinace"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 -left-3 w-16 h-16 border-2 border-teal/15 rounded-xl rounded-tl-none -z-10" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="pb-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 md:gap-20">
            {/* Left -- contact methods */}
            <div>
              <ScrollReveal>
                <div className="space-y-8">
                  {/* Phone */}
                  <a
                    href="tel:+420602595134"
                    className="group block bg-teal-muted rounded-2xl p-8 hover:bg-teal-subtle transition-colors duration-300"
                  >
                    <span className="text-[0.72rem] tracking-[0.1em] uppercase text-teal-dark font-medium">
                      Telefon
                    </span>
                    <div className="font-serif text-[2rem] mt-3 group-hover:text-teal-dark transition-colors duration-300">
                      +420 602 595 134
                    </div>
                    <p className="text-[0.85rem] text-warm-gray mt-2">
                      Volejte v ordinačních hodinách
                    </p>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:stomordinace@gmail.com"
                    className="group block bg-linen-dark rounded-2xl p-8 hover:bg-linen-darker transition-colors duration-300"
                  >
                    <span className="text-[0.72rem] tracking-[0.1em] uppercase text-teal-dark font-medium">
                      Email
                    </span>
                    <div className="font-serif text-[1.5rem] mt-3 group-hover:text-teal-dark transition-colors duration-300">
                      stomordinace@gmail.com
                    </div>
                    <p className="text-[0.85rem] text-warm-gray mt-2">
                      Odpovíme zpravidla do 24 hodin
                    </p>
                  </a>

                  {/* Address */}
                  <div className="bg-linen-dark rounded-2xl p-8">
                    <span className="text-[0.72rem] tracking-[0.1em] uppercase text-teal-dark font-medium">
                      Adresa
                    </span>
                    <div className="font-serif text-[1.3rem] mt-3">
                      Kafkova 605/16
                    </div>
                    <p className="text-[0.92rem] text-warm-gray mt-1">
                      Praha 6 — Dejvice, 160 00
                    </p>
                    <div className="mt-5 pt-5 border-t border-divider space-y-2 text-[0.85rem] text-warm-gray">
                      <p>Metro Dejvická (linka A) — 5 min pěšky</p>
                      <p>Tramvaj Vítězné náměstí — 3 min pěšky</p>
                      <p>Parkování: zóny MČ Praha 6, neomezené v ul. Dejvická a Václavkova</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right -- hours */}
            <div>
              <ScrollReveal delay={1}>
                <div className="mb-12">
                  <h2 className="font-serif text-[1.4rem] font-light mb-6">
                    Ordinační hodiny — zubní ordinace
                  </h2>
                  <div className="border-t border-divider">
                    {clinicHours.map((h) => (
                      <div
                        key={h.day}
                        className="flex justify-between py-3 border-b border-divider/60 text-[0.9rem]"
                      >
                        <span>{h.day}</span>
                        <span className="text-warm-gray">{h.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={2}>
                <div className="mb-12">
                  <h2 className="font-serif text-[1.4rem] font-light mb-6">
                    Ordinační hodiny — dentální hygiena
                  </h2>
                  <div className="border-t border-divider">
                    {hygieneHours.map((h) => (
                      <div
                        key={h.day}
                        className={`flex justify-between py-3 border-b border-divider/60 text-[0.9rem] ${h.hours === "Zavřeno" ? "text-warm-gray-light" : ""}`}
                      >
                        <span>{h.day}</span>
                        <span className={h.hours === "Zavřeno" ? "" : "text-warm-gray"}>{h.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={3}>
                <div className="bg-charcoal text-white rounded-2xl p-8">
                  <h3 className="font-serif text-[1.2rem] font-light mb-1">
                    Jak probíhá objednání
                  </h3>
                  <div className="w-8 h-[1.5px] bg-teal/40 mb-5" />
                  <ol className="space-y-4 text-[0.88rem] text-white/70 leading-relaxed">
                    <li className="flex gap-3">
                      <span className="text-teal font-serif text-[1.1rem] leading-none mt-0.5">1.</span>
                      <span>Zavolejte nám nebo napište email s popisem vašich obtíží</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-teal font-serif text-[1.1rem] leading-none mt-0.5">2.</span>
                      <span>Domluvíme termín, který vám vyhovuje</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-teal font-serif text-[1.1rem] leading-none mt-0.5">3.</span>
                      <span>Na první návštěvu si vezměte průkaz pojištěnce</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-teal font-serif text-[1.1rem] leading-none mt-0.5">4.</span>
                      <span>Provedeme vstupní vyšetření a připravíme plán péče</span>
                    </li>
                  </ol>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Location image */}
          <ScrollReveal>
            <div className="mt-20 relative rounded-2xl overflow-hidden">
              <div className="aspect-[21/9] relative">
                <Image
                  src="/photos/booking-dejvice.webp"
                  alt="Dejvice, Praha 6"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-charcoal/50 to-transparent flex items-end p-8 md:p-12">
                <div>
                  <p className="font-serif text-white/90 text-[1.3rem] md:text-[1.6rem] font-light leading-[1.3]">
                    Najdete nás v srdci Dejvic
                  </p>
                  <p className="text-white/60 text-[0.85rem] mt-2">
                    Kafkova 605/16, Praha 6
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Emergency info */}
          <ScrollReveal>
            <div className="mt-20 pt-16 border-t border-divider">
              <h2 className="font-serif text-[1.6rem] font-light mb-3">
                Zubní pohotovost v Praze
              </h2>
              <p className="text-[0.9rem] text-warm-gray mb-8 max-w-[540px]">
                V případě akutních obtíží mimo naše ordinační hodiny se můžete obrátit na zubní pohotovost:
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {emergencies.map((e) => (
                  <div key={e.name} className="bg-linen-dark rounded-xl p-6">
                    <h3 className="font-serif text-[1.05rem] mb-1">{e.name}</h3>
                    <p className="text-[0.78rem] text-teal-dark mb-3">{e.note}</p>
                    <div className="space-y-1.5 text-[0.82rem] text-warm-gray">
                      <p>{e.address}</p>
                      <p>Tel: {e.phone}</p>
                      <p>{e.hours}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
