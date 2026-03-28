import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SubpageHeader } from "@/components/subpage-header";
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
      "Vstupní vyšetření zahrnuje komplexní zhodnocení stavu chrupu, dásní a dutiny ústní. Nedílnou součástí vstupního vyšetření je zhotovení rentgenových snímků — panoramatický rentgen a cílené intraorální snímky (snímky ve skusu a periapikální snímky s detailem na oblast kořene).",
    detail:
      "Po zhodnocení stavu připravíme individuální plán péče a doporučíme další postup. Vše vám srozumitelně vysvětlíme a odpovíme na vaše dotazy.",
  },
  {
    num: "02",
    title: "Dentální hygiena",
    description:
      "Dentální hygiena zahrnuje důkladné odstranění zubního kamene, pigmentací a povlaku, kontrolu stavu dásní a doporučení individuální domácí péče.",
    detail:
      "Pravidelná dentální hygiena pomáhá předcházet vzniku kazů, zánětům dásní i parodontóze a je důležitou součástí péče o chrup. Doporučujeme navštívit hygienistku minimálně jednou za půl roku.",
  },
  {
    num: "03",
    title: "Ošetření zubního kazu",
    description:
      "Zubní kaz je nejčastější onemocnění dutiny ústní. Pokud se neléčí, vede k rozsáhlé destrukci tvrdých zubních tkání, infekci zubní dřeně a bolesti.",
    detail:
      "Cílem je naučit pacienty zubnímu kazu předcházet správnou péčí o své zuby. Pokud však již kaz vznikne, je ideální zachytit ho v počátku. Časné diagnostice napomáhají pravidelné preventivní prohlídky, jejichž součástí je vyšetření se zvětšením (lupové brýle, mikroskop) a intraorální rentgenové snímky. Díky použití mikroskopu a kvalitních materiálů dokážeme zachovat co nejvíce zdravé zubní tkáně a zároveň zajistit dlouhodobou funkčnost výplně a přirozený vzhled.",
  },
  {
    num: "04",
    title: "Ošetření kořenových kanálků",
    description:
      "Pokud dojde k infekci zubní dřeně, nejčastěji hlubokým kazem nebo jejímu odumření, je jedinou šancí na záchranu zubu endodontické ošetření — léčba kořenových kanálků.",
    detail:
      "Ke znovuošetření kořenových kanálků (reendodontickému ošetření) přistupujeme v případě nedokonalého stávajícího ošetření s přetrvávajícími obtížemi nebo při přítomném chronickém zánětu. Při ošetření využíváme mikroskop, který umožní ošetření i velmi úzkých a složitých kanálků. Cílem endodoncie je odstranit infekci, zachovat zub a zajistit jeho dlouhodobou funkčnost. Mikroskopická kontrola zvyšuje přesnost, minimalizuje riziko komplikací a umožňuje maximální šetrnost k tvrdým zubním tkáním.",
  },
  {
    num: "05",
    title: "Estetické korekce",
    description:
      "Estetické korekce zahrnují šetrné úpravy tvaru, barvy nebo velikosti zubů s cílem dosáhnout přirozeného a harmonického úsměvu.",
    detail:
      "V některých případech stačí k dosažení požadovaného výsledku bělení zubů, jindy výměna nevyhovujících výplní nebo protetické řešení pomocí fazet či korunek. Každý postup volíme individuálně s důrazem na maximální šetrnost k tvrdým zubním tkáním a přání pacienta.",
  },
  {
    num: "06",
    title: "Zhotovení fazet, korunek a můstků",
    description:
      "Cílem ošetření je rekonstrukce zubu v případě velké destrukce zubních tkání, kdy již není možné zub ošetřit pouhou výplní. Toto ošetření také umožňuje nahradit ztracené zuby nebo zlepšit estetiku úsměvu.",
    detail:
      "Ošetření spočívá v týmové práci lékaře a zubního laboranta a probíhá v několika návštěvách. V mezidobí se ve většině případů zhotovuje provizorní korunka nebo můstek. Nabízíme celokeramické, metalokeramické i kompozitní řešení.",
  },
  {
    num: "07",
    title: "Chirurgické ošetření",
    description:
      "V rámci chirurgických zákroků provádíme především extrakce. Extrakce neboli vytržení zubu je finálním řešením potíží v případě, kdy zub již není možné jinak ošetřit.",
    detail:
      "Provádíme také chirurgické vybavení zubů moudrosti (osmiček), které jsou do dutiny ústní prořezané částečně nebo jsou zcela neprořezané. Svým komplikovaným uložením mohou být zdrojem bolestivých obtíží či komplikací pro sousedící zuby.",
  },
  {
    num: "08",
    title: "Zubní implantáty",
    description:
      "V případě ztráty zubu je ve většině případů možná náhrada zubu pomocí zubního implantátu. Zubní implantát nahrazuje zub bez nutnosti invazivního zásahu na sousedních zubech.",
    detail:
      "Implantologickému ošetření předchází důkladné vyšetření celkového zdravotního stavu, stavu kosti a okolních měkkých tkání. Obvykle se také zhotovuje CBCT rentgenový snímek — 3D snímek čelistí pro přesné plánování pozice implantátu.",
  },
];

export default function SluzbyPage() {
  return (
    <>
      <Nav />
      <SubpageHeader
        label="Služby"
        title="Komplexní stomatologická péče"
        description="Od vstupního vyšetření po implantáty — vše s důrazem na preciznost, moderní technologie a váš komfort."
      />

      <section className="pb-28">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="space-y-0">
            {services.map((s, i) => (
              <ScrollReveal key={s.num} delay={i % 2}>
                <div className="group py-10 border-t border-divider last:border-b">
                  <div className="grid md:grid-cols-[80px_1fr] gap-4 md:gap-8">
                    {/* Number */}
                    <span className="font-serif text-[2.2rem] text-teal/25 leading-none tracking-tight group-hover:text-teal/50 transition-colors duration-300">
                      {s.num}
                    </span>

                    {/* Content */}
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
            ))}
          </div>

          {/* CTA */}
          <ScrollReveal>
            <div className="mt-16 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">
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
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
