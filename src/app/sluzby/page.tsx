import type { Metadata } from "next";
import Image from "next/image";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";

export const metadata: Metadata = {
  title: "Služby — Zubaři z Dejvic | Zubní ordinace Praha 6 Dejvice",
  description:
    "Kompletní přehled stomatologických služeb: vstupní vyšetření, dentální hygiena, léčba kazů, endodoncie pod mikroskopem, estetické korekce, implantáty.",
};

const services = [
  {
    num: "01",
    title: "Vstupní vyšetření",
    description:
      "Vstupní vyšetření zahrnuje komplexní zhodnocení stavu chrupu, dásní a dutiny ústní. Nedílnou součástí vstupního vyšetření je zhotovení rentgenových snímků — panoramatický rentgen a cílené intraorální snímky.",
    detail:
      "Po zhodnocení stavu připravíme individuální plán péče a doporučíme další postup. Vše vám srozumitelně vysvětlíme a odpovíme na vaše dotazy.",
    accent: "bg-teal-muted",
  },
  {
    num: "02",
    title: "Dentální hygiena",
    description:
      "Dentální hygiena zahrnuje důkladné odstranění zubního kamene, pigmentací a povlaku, kontrolu stavu dásní a doporučení individuální domácí péče.",
    detail:
      "Pravidelná dentální hygiena pomáhá předcházet vzniku kazů, zánětům dásní i parodontóze. Doporučujeme navštívit hygienistku minimálně jednou za půl roku.",
    accent: "bg-teal-subtle",
  },
  {
    num: "03",
    title: "Ošetření zubního kazu",
    description:
      "Zubní kaz je nejčastější onemocnění dutiny ústní. Pokud se neléčí, vede k rozsáhlé destrukci tvrdých zubních tkání, infekci zubní dřeně a bolesti.",
    detail:
      "Díky použití mikroskopu a kvalitních materiálů dokážeme zachovat co nejvíce zdravé zubní tkáně a zároveň zajistit dlouhodobou funkčnost výplně a přirozený vzhled.",
    accent: "bg-teal-muted",
  },
  {
    num: "04",
    title: "Ošetření kořenových kanálků",
    description:
      "Pokud dojde k infekci zubní dřeně, nejčastěji hlubokým kazem nebo jejímu odumření, je jedinou šancí na záchranu zubu endodontické ošetření.",
    detail:
      "Při ošetření využíváme mikroskop, který umožní ošetření i velmi úzkých a složitých kanálků. Cílem je odstranit infekci, zachovat zub a zajistit jeho dlouhodobou funkčnost.",
    accent: "bg-teal-subtle",
  },
  {
    num: "05",
    title: "Estetické korekce",
    description:
      "Estetické korekce zahrnují šetrné úpravy tvaru, barvy nebo velikosti zubů s cílem dosáhnout přirozeného a harmonického úsměvu.",
    detail:
      "V některých případech stačí bělení zubů, jindy výměna nevyhovujících výplní nebo protetické řešení pomocí fazet či korunek.",
    accent: "bg-teal-muted",
  },
  {
    num: "06",
    title: "Fazety, korunky a můstky",
    description:
      "Cílem ošetření je rekonstrukce zubu v případě velké destrukce zubních tkání, kdy již není možné zub ošetřit pouhou výplní.",
    detail:
      "Ošetření probíhá ve spolupráci se zubním laborantem v několika návštěvách. Nabízíme celokeramické, metalokeramické i kompozitní řešení.",
    accent: "bg-teal-subtle",
  },
  {
    num: "07",
    title: "Chirurgické ošetření",
    description:
      "V rámci chirurgických zákroků provádíme především extrakce — finální řešení v případě, kdy zub již není možné jinak ošetřit.",
    detail:
      "Provádíme také chirurgické vybavení zubů moudrosti, které mohou být zdrojem bolestivých obtíží či komplikací pro sousedící zuby.",
    accent: "bg-teal-muted",
  },
  {
    num: "08",
    title: "Zubní implantáty",
    description:
      "V případě ztráty zubu je ve většině případů možná náhrada pomocí zubního implantátu bez nutnosti invazivního zásahu na sousedních zubech.",
    detail:
      "Implantologickému ošetření předchází důkladné vyšetření včetně 3D CBCT snímku čelistí pro přesné plánování pozice implantátu.",
    accent: "bg-teal-subtle",
  },
];

export default function SluzbyPage() {
  return (
    <>
      <Nav />

      {/* Hero section with image */}
      <section className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[40%] h-full diagonal-lines-bold opacity-[0.04]" />
        <div className="absolute top-[10%] right-[8%] w-3 h-3 rounded-full bg-teal/20" />
        <div className="absolute bottom-[20%] right-[15%] w-2 h-2 rounded-full bg-teal/30" />

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-[1fr_380px] gap-12 items-center pt-8 pb-16">
            <div>
              <ScrollReveal>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-2 rounded-full bg-teal" />
                  <span className="text-[0.72rem] tracking-[0.12em] uppercase text-teal-dark font-medium">
                    Služby
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={1}>
                <h1 className="font-serif font-light text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.08] tracking-[-0.01em] max-w-[600px] mb-6">
                  Komplexní stomatologická{" "}
                  <span className="text-teal-dark italic">péče</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={2}>
                <div className="w-16 h-[2px] bg-teal/40 mb-6" />
                <p className="text-warm-gray text-[1.05rem] max-w-[480px] leading-[1.75]">
                  Od vstupního vyšetření po implantáty — vše s důrazem na
                  preciznost, moderní technologie a váš komfort.
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={1}>
              <div className="relative">
                <div className="relative aspect-[4/5] rounded-2xl rounded-tr-[60px] overflow-hidden">
                  <Image
                    src="/photos/services-microscope.webp"
                    alt="Moderní vybavení ordinace"
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

      {/* Services list */}
      <section className="pb-28">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Inline image break after service 04 */}
          <div className="space-y-0">
            {services.map((s, i) => (
              <div key={s.num}>
                <ScrollReveal delay={i % 2}>
                  <div className="group py-10 border-t border-divider last:border-b">
                    <div className="grid md:grid-cols-[80px_1fr] gap-4 md:gap-8">
                      <div className="relative">
                        <span className="font-serif text-[2.2rem] text-teal/25 leading-none tracking-tight group-hover:text-teal/50 transition-colors duration-300">
                          {s.num}
                        </span>
                      </div>
                      <div>
                        <h2 className="font-serif text-[1.5rem] font-light mb-4 group-hover:text-teal-dark transition-colors duration-300">
                          {s.title}
                        </h2>
                        <p className="text-[0.95rem] text-warm-gray leading-[1.8] mb-3">
                          {s.description}
                        </p>
                        <p className="text-[0.9rem] text-warm-gray-light leading-[1.8]">
                          {s.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Photo break after service 04 */}
                {s.num === "04" && (
                  <ScrollReveal>
                    <div className="my-12 relative rounded-2xl overflow-hidden">
                      <div className="aspect-[21/9] relative">
                        <Image
                          src="/photos/services-hero.webp"
                          alt="Precizní nástroje"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/40 to-transparent flex items-end p-8 md:p-12">
                        <p className="font-serif text-white/90 text-[1.3rem] md:text-[1.6rem] font-light max-w-[400px] leading-[1.3]">
                          Preciznost pod mikroskopem,
                          <br />
                          <span className="italic text-teal-light">šetrnost v každém detailu</span>
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                )}
              </div>
            ))}
          </div>

          {/* Aesthetic image + CTA */}
          <ScrollReveal>
            <div className="mt-16 grid md:grid-cols-[200px_1fr] gap-10 items-center">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/photos/services-aesthetic.webp"
                  alt="Krásný úsměv"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-serif text-[1.4rem] font-light mb-6 max-w-[400px] leading-[1.4]">
                  Chcete se objednat na vyšetření?
                </p>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
                  <a
                    href="/objednat"
                    className="text-[0.78rem] tracking-[0.06em] uppercase px-8 py-3.5 bg-teal-dark text-white rounded-full hover:bg-charcoal transition-all duration-300"
                  >
                    Objednat se &rarr;
                  </a>
                  <a
                    href="/cenik"
                    className="text-[0.88rem] text-warm-gray hover:text-teal-dark transition-colors duration-300"
                  >
                    Zobrazit ceník ošetření &rarr;
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
