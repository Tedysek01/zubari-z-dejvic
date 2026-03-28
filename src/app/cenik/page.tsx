import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SubpageHeader } from "@/components/subpage-header";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "Ceník — Zubaři z Dejvic | Zubní ordinace Praha 6",
  description:
    "Ceník stomatologických služeb ordinace Zubaři z Dejvic. Výplně, endodoncie, protetika, implantáty. Spolupráce s VZP, VoZP, ČPZP, ZPMVČR, OZP.",
};

interface PriceRow {
  service: string;
  price: string;
}

interface PriceCategory {
  title: string;
  note?: string;
  items: PriceRow[];
}

const categories: PriceCategory[] = [
  {
    title: "Výplně",
    note: "Od 1. 1. 2026 pojišťovna přispívá 900 Kč",
    items: [
      {
        service: "Vrstvená fotokompozitní krčková výplň zhotovena pod mikroskopem",
        price: "2 600 Kč",
      },
      {
        service: "Vrstvená fotokompozitní výplň malého rozsahu zhotovena pod mikroskopem",
        price: "2 900 Kč",
      },
      {
        service: "Vrstvená fotokompozitní výplň středního rozsahu zhotovena pod mikroskopem",
        price: "3 400 Kč",
      },
      {
        service: "Vrstvená fotokompozitní výplň velkého rozsahu zhotovena pod mikroskopem",
        price: "4 100 Kč",
      },
    ],
  },
  {
    title: "Mikroskopická endodoncie",
    note: "Ošetření kořenových kanálků probíhá ve 2 fázích",
    items: [
      {
        service: "Komplexní mikroskopická endodoncie 1. fáze, jednoduchá anatomie zubu",
        price: "4 000 Kč",
      },
      {
        service: "Komplexní mikroskopická endodoncie 2. fáze, jednoduchá anatomie zubu",
        price: "4 000 Kč",
      },
      {
        service: "Komplexní mikroskopická endodoncie 1. fáze, komplikovanější anatomie zubu",
        price: "6 000 Kč",
      },
      {
        service: "Komplexní mikroskopická endodoncie 2. fáze, komplikovanější anatomie zubu",
        price: "6 000 Kč",
      },
      {
        service: "Komplexní mikroskopická endodoncie 1. fáze, velmi komplikovaná anatomie zubu",
        price: "7 500 Kč",
      },
      {
        service: "Komplexní mikroskopická endodoncie 2. fáze, velmi komplikovaná anatomie zubu",
        price: "7 500 Kč",
      },
    ],
  },
  {
    title: "Fixní protetika",
    items: [
      { service: "Otisk alginát", price: "420 Kč" },
      { service: "Otisk silikon", price: "720 Kč" },
      { service: "Použití intraorálního scanneru", price: "1 000 Kč" },
      { service: "Cementace konvenční", price: "500 Kč" },
      { service: "Cementace adhezivní", price: "900 Kč" },
      { service: "Celokeramická korunka", price: "11 000 Kč" },
      { service: "Metalokeramická korunka", price: "9 000 Kč" },
      { service: "Frézovaná pryskyřičná korunka", price: "4 500 Kč" },
      { service: "Kompozitní onlay", price: "8 000 Kč" },
      { service: "Keramická e.max onlay", price: "11 000 Kč" },
    ],
  },
  {
    title: "Snímatelná protetika",
    items: [
      {
        service: "Částečná snímatelná náhrada deflex dle rozsahu",
        price: "9 000 – 10 000 Kč",
      },
      {
        service: "Částečná snímatelná náhrada skeletová dle rozsahu",
        price: "9 500 – 10 500 Kč",
      },
      {
        service: "Oprava snímatelné náhrady dle rozsahu",
        price: "800 – 2 000 Kč",
      },
    ],
  },
];

export default function CenikPage() {
  return (
    <>
      <Nav />
      <SubpageHeader
        label="Ceník"
        title="Přehled cen ošetření"
        description="Ceník nadstandardních výkonů. Preventivní prohlídky a základní ošetření jsou hrazeny ze zdravotního pojištění."
      />

      <section className="pb-28">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Insurance info */}
          <ScrollReveal>
            <div className="bg-teal-muted rounded-2xl p-8 mb-16">
              <div className="flex items-start gap-4">
                <div className="w-2.5 h-2.5 rounded-full bg-teal mt-1.5 shrink-0" />
                <div>
                  <h3 className="font-serif text-[1.15rem] mb-2">
                    Smluvní pojišťovny
                  </h3>
                  <p className="text-[0.92rem] text-warm-gray leading-relaxed">
                    Spolupracujeme s pojišťovnami <strong>VZP</strong>, <strong>VoZP</strong>, <strong>ČPZP</strong>, <strong>ZPMVČR</strong> a <strong>OZP</strong>.
                    Preventivní prohlídky, základní ošetření a dentální hygiena
                    jsou hrazeny dle podmínek vaší pojišťovny.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Price categories */}
          <div className="space-y-16">
            {categories.map((cat, catIndex) => (
              <ScrollReveal key={cat.title} delay={catIndex % 3}>
                <div>
                  <div className="flex items-baseline gap-4 mb-2">
                    <h2 className="font-serif text-[1.6rem] font-light">
                      {cat.title}
                    </h2>
                  </div>
                  {cat.note && (
                    <p className="text-[0.82rem] text-teal-dark mb-6">
                      {cat.note}
                    </p>
                  )}
                  {!cat.note && <div className="mb-6" />}

                  <div className="border-t border-divider">
                    {cat.items.map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start justify-between py-4 border-b border-divider/60 gap-6 group hover:bg-teal-muted/50 -mx-4 px-4 transition-colors duration-200"
                      >
                        <span className="text-[0.9rem] text-charcoal leading-snug">
                          {item.service}
                        </span>
                        <span className="text-[0.9rem] font-medium text-teal-dark whitespace-nowrap shrink-0">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Disclaimer */}
          <ScrollReveal>
            <div className="mt-16 pt-12 border-t border-divider">
              <p className="text-[0.82rem] text-warm-gray-light leading-relaxed max-w-[600px]">
                Uvedené ceny jsou orientační a mohou se lišit v závislosti na
                rozsahu a složitosti ošetření. Přesnou kalkulaci vám sdělíme
                po vyšetření. Ceny jsou platné od 1. 1. 2026.
              </p>
              <a
                href="/objednat"
                className="inline-flex items-center gap-2 mt-8 text-[0.78rem] tracking-[0.06em] uppercase px-8 py-3.5 bg-teal-dark text-white rounded-full hover:bg-charcoal transition-all duration-300"
              >
                Objednat se na vyšetření
                <span>&rarr;</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
