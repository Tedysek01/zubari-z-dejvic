export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  imageAlt: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "bolest-zubu-priciny-a-lecba",
    title: "Bolest zubu — příčiny a co dělat, než se dostanete k zubaři",
    subtitle: "Prevence a první pomoc",
    excerpt:
      "Bolest zubu dokáže znepříjemnit celý den. Zjistěte, co ji nejčastěji způsobuje, jak si doma ulevit a kdy je čas vyhledat zubaře.",
    date: "2026-03-25",
    readTime: "8 min čtení",
    image: "/photos/blog-bolest-zubu.webp",
    imageAlt: "Ilustrace zubní péče a prevence bolesti zubů",
    metaTitle: "Bolest zubu — příčiny a léčba | Zubaři z Dejvic, Praha 6",
    metaDescription:
      "Bolí vás zub? Zjistěte nejčastější příčiny bolesti zubů, co pomáhá doma a kdy je čas navštívit zubaře. Zubaři z Dejvic — zubní ordinace Praha 6 Dejvice.",
    keywords: [
      "bolest zubu",
      "bolest zubu příčiny",
      "bolest zubu co pomáhá",
      "zubař Praha 6",
      "akutní bolest zubu",
    ],
    content: `
      <p class="lead">Bolest zubu patří mezi nejnepříjemnější bolesti, které člověk může zažít. Často přichází nečekaně — v noci, o víkendu nebo zrovna když nemáte možnost okamžitě navštívit zubaře. V tomto článku vám vysvětlíme, proč zuby bolí, jak si pomoci doma a kdy byste měli vyhledat odbornou pomoc bez otálení.</p>

      <h2>Proč zuby bolí — nejčastější příčiny</h2>

      <p>Bolest zubu není nemoc sama o sobě, ale příznak, který signalizuje problém. Porozumění příčině vám pomůže zvolit správný postup.</p>

      <h3>Zubní kaz</h3>
      <p>Nejčastější příčina bolesti zubů. Kaz vzniká působením bakterií, které produkují kyseliny a postupně narušují zubní sklovinu. Zpočátku nebolí — právě proto jsou pravidelné preventivní prohlídky tak důležité. Bolest se obvykle objeví, až když kaz pronikne hlouběji k zubní dřeni (nervu). V tu chvíli je zub již výrazně poškozený.</p>

      <h3>Zánět zubní dřeně (pulpitida)</h3>
      <p>Pokud se kaz dostane až k nervu zubu, dochází k zánětu dřeně. Typická je intenzivní, pulzující bolest, která se zhoršuje v noci a v leže. Bolest může vystřelovat do ucha, spánku nebo čelisti. V tomto stádiu je nutné endodontické ošetření — léčba kořenových kanálků.</p>

      <h3>Prasklý nebo nalomený zub</h3>
      <p>Zuby se mohou nalomit při kousání do tvrdých potravin, při sportu nebo u zubů oslabených rozsáhlými výplněmi. Typická je ostrá bolest při kousání, která po uvolnění tlaku ustoupí. Prasklina nemusí být viditelná pouhým okem — k diagnostice často pomáhá až vyšetření pod mikroskopem.</p>

      <h3>Záněty dásní a parodontóza</h3>
      <p>Krvácení dásní při čištění zubů není normální stav. Může signalizovat gingivitidu (zánět dásní) nebo pokročilejší parodontózu, která postupně ničí tkáně upevňující zub v kosti. Pokud dásně bolí, krvácejí nebo jsou oteklé, je čas navštívit dentální hygienistku a zubaře.</p>

      <h3>Zuby moudrosti</h3>
      <p>Prořezávání zubů moudrosti (osmičky) je častou příčinou bolesti zejména u mladých dospělých. Zub moudrosti může být uložen šikmo, tlačit na sousední zuby nebo vytvářet kapsu v dásni, kde se hromadí bakterie a vzniká zánět.</p>

      <h3>Citlivost zubů</h3>
      <p>Ostrá, krátká bolest při kontaktu se studeným, teplým, sladkým nebo kyselým jídlem a pitím. Příčinou bývá obnažení krčků zubů (recese dásní), opotřebovaná sklovina nebo příliš agresivní čištění. Citlivost zubů není sice akutní problém, ale výrazně snižuje kvalitu života.</p>

      <h2>Domácí první pomoc — co skutečně pomáhá</h2>

      <p>Než se dostanete k zubaři, můžete si bolest zmírnit těmito ověřenými postupy:</p>

      <h3>Volně prodejné léky proti bolesti</h3>
      <p><strong>Ibuprofen</strong> (Ibalgin, Nurofen) je při bolesti zubů nejúčinnější, protože kromě tišení bolesti působí i protizánětlivě. Dodržujte doporučené dávkování uvedené v příbalovém letáku. <strong>Paracetamol</strong> (Paralen) je alternativa pro ty, kteří ibuprofen nemohou užívat.</p>

      <h3>Studený obklad</h3>
      <p>Přiložte studený obklad (led zabalený v ručníku) na tvář v oblasti bolesti. Aplikujte 15 minut, pak 15 minut pauza. Studený obklad pomáhá zmírnit otok a bolest.</p>

      <h3>Výplach slanou vodou</h3>
      <p>Rozpusťte půl čajové lžičky soli ve sklenici vlažné vody a jemně vyplachujte ústa. Slaná voda má mírné dezinfekční účinky a pomáhá zmírnit zánět.</p>

      <h3>Co naopak nedělat</h3>
      <ul>
        <li><strong>Nedávejte aspirin přímo na dáseň</strong> — může způsobit chemické popálení měkkých tkání</li>
        <li><strong>Neaplikujte teplo</strong> na oblast otoku — teplo zánět zhoršuje</li>
        <li><strong>Nevynechávejte čištění zubů</strong> v okolí bolestivého místa — hygiena je právě teď důležitější než jindy</li>
        <li><strong>Neodkládejte návštěvu zubaře</strong> — domácí léčba řeší příznak, ne příčinu</li>
      </ul>

      <h2>Kdy je bolest zubu naléhavá</h2>

      <p>Některé příznaky vyžadují okamžitou návštěvu zubaře nebo zubní pohotovosti:</p>

      <ul>
        <li>Silný otok tváře nebo dásní</li>
        <li>Horečka doprovázející bolest zubu</li>
        <li>Bolest trvající déle než 2 dny bez úlevy</li>
        <li>Potíže s otevíráním úst nebo polykáním</li>
        <li>Úraz zubu — vyražení, vylomení nebo nalomení</li>
        <li>Hnis vytékající z dásně</li>
      </ul>

      <p>V případě naléhavých stavů mimo ordinační hodiny můžete využít zubní pohotovost — nejbližší k Dejvicím je v Nemocnici Na Františku (Na Františku 847/8, Praha 1).</p>

      <h2>Jak probíhá vyšetření u zubaře</h2>

      <p>V naší ordinaci v Dejvicích začínáme vždy důkladným vyšetřením. Součástí je klinické vyšetření pod zvětšením (lupové brýle nebo mikroskop), rentgenové snímky a posouzení stavu dásní. Na základě vyšetření vám srozumitelně vysvětlíme, co je příčinou bolesti, a navrhneme plán ošetření.</p>

      <p>U nás pracujeme s mikroskopem, který umožňuje vidět detaily, které pouhým okem nejsou patrné. Díky tomu dokážeme zachytit problémy v rané fázi a ošetření provést s maximální přesností.</p>

      <h2>Prevence — jak bolesti zubů předejít</h2>

      <p>Většině příčin bolesti zubů lze předejít správnou péčí:</p>

      <ul>
        <li><strong>Pravidelné preventivní prohlídky</strong> — minimálně dvakrát ročně</li>
        <li><strong>Dentální hygiena</strong> u hygienistky — minimálně jednou za půl roku</li>
        <li><strong>Správná technika čištění</strong> — měkký kartáček, mezizubní kartáčky, zubní nit</li>
        <li><strong>Omezení sladkých a kyselých potravin</strong> — zejména mezi jídly</li>
        <li><strong>Ochranný chránič</strong> při sportu nebo při nočním skřípání zubů</li>
      </ul>

      <h2>Zubaři z Dejvic — jsme tu pro vás</h2>

      <p>Bolest zubu nemusí znamenat konec světa. V naší ordinaci na Kafkově ulici v Dejvicích vám pomůžeme rychle a šetrně. Přijímáme nové pacienty a vždy se snažíme najít termín co nejdříve, pokud jde o akutní bolest.</p>
    `,
  },
  {
    slug: "dentalni-hygiena-proc-je-dulezita",
    title: "Dentální hygiena — proč nestačí jen čistit zuby doma",
    subtitle: "Péče o zdravý chrup",
    excerpt:
      "Pravidelná profesionální dentální hygiena je základ zdravých zubů a dásní. Přečtěte si, co obnáší, jak často chodit a co hradí pojišťovna.",
    date: "2026-03-18",
    readTime: "7 min čtení",
    image: "/photos/blog-dentalni-hygiena.webp",
    imageAlt: "Nástroje pro dentální hygienu v moderní ordinaci",
    metaTitle:
      "Dentální hygiena — proč je důležitá | Zubaři z Dejvic, Praha 6",
    metaDescription:
      "Dentální hygiena je základ zdravých zubů. Zjistěte, co obnáší, jak často chodit a kolik stojí. Objednejte se u Zubařů z Dejvic — dentální hygiena Praha 6.",
    keywords: [
      "dentální hygiena",
      "dentální hygiena Praha 6",
      "čištění zubního kamene",
      "dentální hygienistka Dejvice",
      "profesionální čištění zubů",
    ],
    content: `
      <p class="lead">I když si zuby čistíte dvakrát denně a používáte mezizubní kartáčky, existují místa, kam se domácí péčí jednoduše nedostanete. Profesionální dentální hygiena je nepostradatelnou součástí péče o chrup — a investicí, která se vám mnohonásobně vrátí.</p>

      <h2>Co je dentální hygiena a proč ji potřebujete</h2>

      <p>Dentální hygiena je profesionální ošetření prováděné dentální hygienistkou. Zahrnuje důkladné odstranění zubního kamene, pigmentací (zabarvení od kávy, čaje, vína) a měkkého povlaku (plaku) z míst, kam se běžným kartáčkem nedostanete.</p>

      <p>Zubní plak se na zubech hromadí neustále. Pokud není pravidelně odstraňován, mineralizuje se a mění v zubní kámen. Ten nelze odstranit kartáčkem — pouze profesionálními nástroji v ordinaci. Zubní kámen dráždí dásně, způsobuje jejich zánět a je hlavní příčinou parodontózy.</p>

      <h2>Co se děje během návštěvy hygienistky</h2>

      <p>Návštěva dentální hygienistky obvykle trvá 45–60 minut a zahrnuje několik kroků:</p>

      <h3>1. Vyšetření a zhodnocení stavu</h3>
      <p>Hygienistka nejprve zhodnotí stav vašich dásní, zkontroluje přítomnost zubního kamene a pigmentací. Změří hloubku dásňových kapes — ukazatel zdraví parodontu (tkání kolem zubu).</p>

      <h3>2. Odstranění zubního kamene (scaling)</h3>
      <p>Pomocí ultrazvukového přístroje a ručních nástrojů (scalerů a kyret) hygienistka odstraní tvrdé usazeniny nad dásní i pod ní. Ultrazvuk rozbíjí kámen jemnými vibracemi za současného proudu vody.</p>

      <h3>3. Air-flow (pískování)</h3>
      <p>Speciální přístroj, který proudem jemného prášku, vody a vzduchu šetrně odstraní pigmentace a zbytky plaku. Zuby po air-flow získají zpět svůj přirozený odstín — nejde o bělení, ale o odstranění zabarvení.</p>

      <h3>4. Leštění (depurace)</h3>
      <p>Povrch zubů se vyleští speciální pastou, čímž se vytvoří hladký povrch, na kterém se plak a zabarvení hůře zachytávají.</p>

      <h3>5. Fluoridace</h3>
      <p>Na závěr se na zuby nanese fluoridový lak nebo gel, který posiluje sklovinu a chrání zuby před kazem.</p>

      <h3>6. Instruktáž domácí péče</h3>
      <p>Hygienistka vám ukáže správnou techniku čištění, doporučí vhodné pomůcky (typ kartáčku, velikost mezizubních kartáčků, jednosvazkový kartáček) a odpoví na vaše dotazy.</p>

      <h2>Jak často chodit na dentální hygienu</h2>

      <p>Obecné doporučení je navštívit hygienistku <strong>jednou za šest měsíců</strong>. Některé skupiny pacientů však mohou potřebovat častější návštěvy:</p>

      <ul>
        <li><strong>Kuřáci</strong> — kouření výrazně zvyšuje tvorbu pigmentací a riziko parodontózy</li>
        <li><strong>Pacienti s parodontózou</strong> — dle závažnosti každé 3–4 měsíce</li>
        <li><strong>Těhotné ženy</strong> — hormonální změny zvyšují citlivost dásní a riziko zánětu</li>
        <li><strong>Diabetici</strong> — cukrovka ovlivňuje hojení a zvyšuje riziko infekce dásní</li>
        <li><strong>Pacienti s implantáty nebo rozsáhlými protetickými pracemi</strong></li>
        <li><strong>Nositelé rovnátek</strong> — aparát ztěžuje čištění a zvyšuje riziko kazu</li>
      </ul>

      <h2>Bolí dentální hygiena?</h2>

      <p>Toto je jedna z nejčastějších obav. Odpověď závisí na stavu vašich zubů a dásní. Pokud chodíte pravidelně a vaše dásně jsou zdravé, ošetření je prakticky bezbolestné — můžete cítit mírný tlak nebo chladnou vodu.</p>

      <p>Pokud je přítomno velké množství kamene pod dásní nebo jsou dásně zánětlivé, může být ošetření citlivější. V takovém případě je možné použít lokální znecitlivění. Dobrá zpráva: každá další návštěva bývá méně nepříjemná, protože stav dásní se díky pravidelné péči zlepšuje.</p>

      <h2>Mýty o dentální hygieně</h2>

      <h3>„Hygiena zuby poškozuje"</h3>
      <p>Naopak — profesionální čištění odstraňuje škodlivé nánosy. Pocit „mezer mezi zuby" po hygieně je způsoben tím, že se odstranil kámen, který tyto mezery vyplňoval. Zuby se nepoškodí, kamínek ano — a to je správně.</p>

      <h3>„Stačí jednou za život"</h3>
      <p>Zubní kámen se tvoří neustále. Pravidelnost je klíčová. Jednorázová návštěva pomůže, ale dlouhodobý efekt zajistí pouze pravidelná péče.</p>

      <h3>„Když mi dásně nekrvácí, hygienu nepotřebuji"</h3>
      <p>Krvácení je jen jeden z příznaků. Zubní kámen pod dásní může být přítomen i bez viditelného krvácení a potichu ničit tkáně kolem zubů.</p>

      <h2>Správná domácí péče mezi návštěvami</h2>

      <p>Profesionální hygiena je důležitá, ale tvoří jen část péče o chrup. Doma byste měli:</p>

      <ul>
        <li><strong>Čistit zuby dvakrát denně</strong> — ráno a večer, vždy minimálně 2 minuty</li>
        <li><strong>Používat měkký kartáček</strong> — tvrdý kartáček může poškozovat dásně a sklovinu</li>
        <li><strong>Mezizubní kartáčky</strong> — každý den, ideálně večer. Velikost vám doporučí hygienistka</li>
        <li><strong>Jednosvazkový (solo) kartáček</strong> — pro těžko dostupná místa (za posledními zuby, kolem implantátů)</li>
        <li><strong>Zubní pasta s fluoridem</strong> — fluorid prokazatelně chrání před kazem</li>
        <li><strong>Ústní sprcha (irigátor)</strong> — vhodný doplněk, ale nenahrazuje mezizubní kartáčky</li>
      </ul>

      <h2>Kolik stojí dentální hygiena a co hradí pojišťovna</h2>

      <p>Profesionální dentální hygiena je v České republice většinou hrazena pacientem. Některé zdravotní pojišťovny přispívají na preventivní péči v rámci bonusových programů — doporučujeme ověřit u vaší pojišťovny. Spolupracujeme s pojišťovnami VZP, VoZP, ČPZP, ZPMVČR a OZP.</p>

      <p>Cena dentální hygieny se odvíjí od rozsahu ošetření a aktuálního stavu chrupu. Přesnou informaci vám rádi sdělíme při objednání nebo na první návštěvě.</p>

      <h2>Objednejte se na dentální hygienu</h2>

      <p>V naší ordinaci v Dejvicích se dentální hygiena provádí v příjemném prostředí s dostatkem času a individuálním přístupem. Naše hygienistka vám věnuje plnou pozornost a poradí s domácí péčí na míru vašim potřebám.</p>
    `,
  },
  {
    slug: "beleni-zubu-metody-a-ceny",
    title: "Bělení zubů — metody, ceny a na co si dát pozor",
    subtitle: "Estetická stomatologie",
    excerpt:
      "Chcete bělejší zuby? Porovnejte metody bělení, zjistěte reálné ceny a pochopte, co funguje a co je jen marketing.",
    date: "2026-03-10",
    readTime: "7 min čtení",
    image: "/photos/blog-beleni-zubu.webp",
    imageAlt: "Moderní estetická stomatologie a přirozený úsměv",
    metaTitle: "Bělení zubů — metody a ceny | Zubaři z Dejvic, Praha 6",
    metaDescription:
      "Chcete bělejší zuby? Porovnejte metody bělení zubů, zjistěte ceny a co funguje. Profesionální bělení v ordinaci Zubaři z Dejvic, Praha 6 Dejvice.",
    keywords: [
      "bělení zubů",
      "bělení zubů cena",
      "bělení zubů Praha",
      "profesionální bělení zubů",
      "bělení zubů doma",
    ],
    content: `
      <p class="lead">Zářivě bílý úsměv je touhou mnoha lidí. Trh nabízí desítky produktů a metod — od bělicích past po laserové bělení. Ne všechny ale fungují, a některé mohou zubům dokonce uškodit. Jako zubní lékaři vám přinášíme objektivní pohled na bělení zubů.</p>

      <h2>Proč se zuby zabarvují</h2>

      <p>Přirozená barva zubů je individuální a mění se s věkem. Zuby postupně tmavnou vlivem:</p>

      <ul>
        <li><strong>Vnějších pigmentací</strong> — káva, čaj, červené víno, koření (kurkuma), bobulové ovoce</li>
        <li><strong>Kouření</strong> — nikotin a dehet vytvářejí žlutohnědé povlaky</li>
        <li><strong>Stárnutí</strong> — sklovina se přirozeně ztenčuje a prosvítá tmavší zubovina</li>
        <li><strong>Léků</strong> — některá antibiotika (tetracyklin) mohou trvale zabarvit zuby, pokud se užívají v období vývoje chrupu</li>
        <li><strong>Úrazů</strong> — poraněný zub může zšednout kvůli poškození nervu</li>
        <li><strong>Nadměrného příjmu fluoridů</strong> v dětství (fluoróza) — bílé skvrny na zubech</li>
      </ul>

      <p>Důležité je rozlišovat mezi <strong>vnějším zabarvením</strong> (pigmentace na povrchu) a <strong>vnitřním zabarvením</strong> (změna barvy samotné zubní tkáně). Vnější pigmentace odstraní profesionální dentální hygiena. Vnitřní zabarvení řeší bělení.</p>

      <h2>Metody bělení zubů</h2>

      <h3>Profesionální bělení v ordinaci</h3>
      <p>Nejúčinnější a nejbezpečnější metoda. Zubní lékař aplikuje bělicí gel s vyšší koncentrací peroxidu (obvykle karbamid peroxid nebo peroxid vodíku) přímo na zuby. Dásně jsou chráněny speciální bariérou. Jedna návštěva trvá přibližně 60–90 minut. Výsledek je viditelný okamžitě — zuby se zesvětlí o 3–8 odstínů.</p>

      <h3>Domácí bělení pod dohledem zubaře</h3>
      <p>Zubní lékař vám zhotoví individuální nosiče (průhledné fólie na míru vašeho chrupu), které si doma plníte bělicím gelem s nižší koncentrací peroxidu. Nosiče se nosí několik hodin denně (nebo přes noc) po dobu 1–3 týdnů. Výsledek je postupný, ale dlouhodobý a velmi přirozený.</p>

      <h3>Kombinace obou metod</h3>
      <p>Pro nejlepší výsledky se často kombinuje ordinační bělení s následným domácím dobělováním. Tato kombinace dosahuje nejstabilnějších a nejpřirozenějších výsledků.</p>

      <h3>Volně prodejné přípravky</h3>
      <p>Na trhu najdete bělicí proužky, bělicí pasty, bělicí pera a LED sady. Jejich účinnost je výrazně nižší než u profesionálních metod, protože smějí obsahovat pouze nízké koncentrace bělicích látek. Bělicí pasty ve skutečnosti zuby nebělí — pouze odstraňují povrchové pigmentace díky abrazivu (což při dlouhodobém používání může poškodit sklovinu).</p>

      <h2>Na co si dát pozor</h2>

      <h3>Aktivní uhlí a jedlá soda</h3>
      <p>Na sociálních sítích jsou populární „přírodní" metody bělení pomocí aktivního uhlí nebo jedlé sody. <strong>Tyto metody zubní lékaři nedoporučují.</strong> Aktivní uhlí je silně abrazivní a při opakovaném používání obrušuje sklovinu. Jedlá soda má stejný problém — dočasně odstraní povrchové pigmentace, ale za cenu poškození skloviny.</p>

      <h3>Nelegální přípravky s vysokou koncentrací peroxidu</h3>
      <p>Pozor na bělicí přípravky nakupované z nespolehlivých zdrojů nebo nabízené v nezdravotnických zařízeních (kosmetické salóny). V EU je povoleno volně prodávat přípravky s maximálně 0,1 % peroxidu vodíku. Vyšší koncentrace (do 6 %) smí aplikovat pouze zubní lékař. Nekontrolované použití může způsobit poškození skloviny, popálení dásní nebo přecitlivělost zubů.</p>

      <h3>Citlivost po bělení</h3>
      <p>Přechodná citlivost zubů na studené a teplé je běžný vedlejší účinek bělení. Obvykle odezní během několika dní. Zubní lékař vám může doporučit desenzibilizační gel nebo pastu, které citlivost minimalizují.</p>

      <h2>Pro koho bělení není vhodné</h2>

      <ul>
        <li><strong>Těhotné a kojící ženy</strong> — z principu předběžné opatrnosti</li>
        <li><strong>Děti a mladiství</strong> — do 18 let není bělení doporučeno</li>
        <li><strong>Pacienti s nezaléčenými kazy</strong> — kazy je nutné nejprve ošetřit</li>
        <li><strong>Pacienti s poškodenou sklovinou</strong> nebo odhaleným kořenem zubu</li>
        <li><strong>Alergici na peroxidy</strong></li>
      </ul>

      <p>Důležité: bělení <strong>nezesvětlí</strong> výplně, korunky ani fazety. Pokud máte viditelné výplně na předních zubech, po bělení mohou být barevně neodpovídající a bude nutné je vyměnit.</p>

      <h2>Kolik stojí bělení zubů</h2>

      <p>Cena profesionálního bělení se v Praze obvykle pohybuje:</p>

      <ul>
        <li><strong>Ordinační bělení:</strong> 5 000 – 12 000 Kč (podle metody a rozsahu)</li>
        <li><strong>Domácí bělení s nosiči:</strong> 3 000 – 6 000 Kč (včetně zhotovení nosičů a gelu)</li>
        <li><strong>Kombinace:</strong> 7 000 – 15 000 Kč</li>
      </ul>

      <p>Bělení zubů není hrazeno ze zdravotního pojištění — jde o estetický výkon.</p>

      <h2>Jak udržet výsledky co nejdéle</h2>

      <p>Efekt bělení vydrží obvykle 1–3 roky, v závislosti na vašich návycích:</p>

      <ul>
        <li>Omezte silně barvicí potraviny a nápoje (káva, čaj, víno, kurkuma)</li>
        <li>Pokud kouříte — je to další důvod přestat</li>
        <li>Pravidelná dentální hygiena pomáhá udržet zuby čisté a světlé</li>
        <li>Občasné dobělení domácími nosiči (po konzultaci se zubařem)</li>
      </ul>

      <h2>Konzultace bělení zubů v naší ordinaci</h2>

      <p>Pokud zvažujete bělení zubů, rádi vám poradíme, která metoda je pro vás nejvhodnější. Vždy začínáme vyšetřením a dentální hygienou — bělení se provádí pouze na zdravé a čisté zuby. Zavolejte nám nebo napište a domluvíme konzultaci.</p>
    `,
  },
  {
    slug: "strach-ze-zubare-jak-prekonat",
    title: "Strach ze zubaře — jak ho překonat (nejen u dětí)",
    subtitle: "Pro bázlivé pacienty",
    excerpt:
      "Dentální fobie je běžnější, než si myslíte. Přečtěte si praktické tipy, jak překonat strach z ošetření — pro dospělé i děti.",
    date: "2026-03-04",
    readTime: "8 min čtení",
    image: "/photos/blog-strach-ze-zubare.webp",
    imageAlt: "Klidné a přívětivé prostředí moderní zubní ordinace",
    metaTitle:
      "Strach ze zubaře — jak ho překonat | Zubaři z Dejvic, Praha 6",
    metaDescription:
      "Bojíte se zubaře? Nejste sami. Přečtěte si praktické tipy, jak překonat strach z ošetření. Zubaři z Dejvic — šetrný přístup pro bázlivé pacienty, Praha 6.",
    keywords: [
      "strach ze zubaře",
      "dentální fobie",
      "zubař bez bolesti",
      "strach z vrtání",
      "zubař pro bázlivé Praha",
    ],
    content: `
      <p class="lead">Pokud se bojíte zubaře, nejste sami. Odhaduje se, že různou mírou strachu ze zubního ošetření trpí až 60–80 % populace. U 5–10 % lidí je strach tak intenzivní, že se kvalifikuje jako dentální fobie — stav, který vede k úplnému vyhýbání se zubní péči. Dobrou zprávou je, že se strach dá překonat.</p>

      <h2>Proč se lidé bojí zubaře</h2>

      <p>Strach ze zubaře má své kořeny a pochopení příčin je prvním krokem k jeho překonání:</p>

      <h3>Špatná zkušenost z dětství</h3>
      <p>Nejčastější příčina. Bolestivé ošetření v dětství, necitlivý přístup zubaře nebo pocit bezmoci v křesle — tyto zážitky se silně vryjí do paměti a ovlivňují vnímání zubní péče po celý život. Je důležité vědět, že moderní stomatologie se od dob vašeho dětství dramaticky změnila.</p>

      <h3>Strach z bolesti</h3>
      <p>I když moderní anestezie dokáže bolest eliminovat, mnoho lidí se obává samotného vpíchu nebo toho, že „na ně anestezie nezabere". Realita je taková, že současná anestetika jsou velmi účinná a lékař vždy ověří, zda znecitlivění správně funguje, než začne pracovat.</p>

      <h3>Ztráta kontroly</h3>
      <p>Ležet s otevřenými ústy a nemoci mluvit vytváří pocit zranitelnosti. Nemůžete vidět, co se děje, a nemáte kontrolu nad situací. Tento pocit je pro mnoho lidí nepříjemný i bez přítomnosti bolesti.</p>

      <h3>Stud za stav zubů</h3>
      <p>Paradoxně právě lidé, kteří zubaře odkládají nejdéle, se pak bojí jít — kvůli studu za stav svého chrupu. Vzniká bludný kruh: strach → odkládání → zhoršení stavu → větší stud → ještě větší strach. Pamatujte: žádný dobrý zubní lékař vás nebude soudit. Naším cílem je pomoci, ne hodnotit.</p>

      <h2>Důsledky neléčeného strachu</h2>

      <p>Strach ze zubaře má reálné zdravotní důsledky. Lidé, kteří odkládají zubní péči, mají prokazatelně:</p>

      <ul>
        <li>Vyšší výskyt pokročilých kazů a ztrát zubů</li>
        <li>Častější záněty dásní a parodontózu</li>
        <li>Vyšší celkové náklady na léčbu — problémy zachycené včas jsou levnější a jednodušší</li>
        <li>Nižší sebevědomí kvůli estetickému stavu chrupu</li>
        <li>Vyšší riziko systémových onemocnění (parodontóza je spojována s kardiovaskulárními chorobami a diabetem)</li>
      </ul>

      <h2>Praktické tipy, jak strach zmírnit</h2>

      <h3>1. Otevřeně komunikujte se zubařem</h3>
      <p>Nejdůležitější krok. Řekněte svému zubaři, že se bojíte. Dobrý zubní lékař to bude respektovat a přizpůsobí svůj přístup. V naší ordinaci je otevřená komunikace základem — chceme, abyste se cítili v bezpečí.</p>

      <h3>2. Domluvte si „stop signál"</h3>
      <p>Před ošetřením se domluvte s lékařem na signálu (například zvednutí ruky), kterým kdykoli ošetření zastavíte. Vědomí, že máte kontrolu, výrazně snižuje úzkost.</p>

      <h3>3. Začněte malými kroky</h3>
      <p>Nemusíte hned podstupovat složitý výkon. Začněte konzultací — přijďte se jen podívat, popovídat si a prohlédnout ordinaci. Dalším krokem může být dentální hygiena. Postupně si budujte pozitivní zkušenosti.</p>

      <h3>4. Dechová cvičení</h3>
      <p>Pomalé, hluboké dýchání aktivuje parasympatický nervový systém a snižuje stres. Před a během ošetření zkuste techniku 4-7-8: nádech 4 sekundy, zadržení 7 sekund, výdech 8 sekund.</p>

      <h3>5. Poslouchejte hudbu nebo podcast</h3>
      <p>Sluchátka v uších mohou pomoci odfiltrovat zvuky ordinace a odvést pozornost. Zeptejte se zubaře, zda je to možné — většina lékařů to vítá.</p>

      <h3>6. Vyberte správný čas návštěvy</h3>
      <p>Neplánujte návštěvu zubaře ve stresovém období. Ranní termíny bývají lepší — nemáte celý den na to, abyste se nervovali.</p>

      <h2>Moderní stomatologie — proč se nemusíte bát</h2>

      <p>Zubní lékařství prošlo za posledních 20 let obrovským vývojem:</p>

      <ul>
        <li><strong>Účinná lokální anestezie</strong> — moderní anestetika zabírají rychle a spolehlivě. Samotný vpich lze zmírnit předchozí aplikací povrchového znecitlivění (gelu na dáseň)</li>
        <li><strong>Šetrné techniky</strong> — mikroskop umožňuje pracovat s minimální invazivitou a zachovat maximum zdravé tkáně</li>
        <li><strong>Tiché nástroje</strong> — moderní turbínky a ultrazvuk jsou výrazně tišší než starší přístroje</li>
        <li><strong>Digitální rentgen</strong> — rychlý, s minimální radiační zátěží</li>
      </ul>

      <h2>Jak připravit dítě na návštěvu zubaře</h2>

      <p>Dětský strach ze zubaře se dá úspěšně předejít správným přístupem rodičů:</p>

      <ul>
        <li><strong>Mluvte o zubaři pozitivně</strong> — nikdy nepoužívejte zubaře jako strašáka („Když si nebudeš čistit zuby, zubař ti je vytrhne!")</li>
        <li><strong>Zahrajte si doma na zubaře</strong> — prohlédněte si navzájem zuby, používejte zrcátko</li>
        <li><strong>Nesdílejte vlastní strach</strong> — děti vnímají emoce rodičů. I když se sami bojíte, před dítětem to nedávejte najevo</li>
        <li><strong>Neříkejte „nebude to bolet"</strong> — tím paradoxně upozorňujete na možnost bolesti. Raději řekněte: „Paní doktorka se podívá na tvoje zoubky"</li>
        <li><strong>První návštěva by měla být pozitivní</strong> — ideálně preventivní prohlídka, ne akutní ošetření</li>
        <li><strong>Pochvalte dítě</strong> — po návštěvě oceňte jeho statečnost, bez ohledu na to, jak to probíhalo</li>
      </ul>

      <h2>Náš přístup k bázlivým pacientům</h2>

      <p>V ordinaci Zubaři z Dejvic víme, že strach ze zubaře je reálný a zaslouží respekt. Proto:</p>

      <ul>
        <li>Nikdy nespěcháme — na každé ošetření rezervujeme dostatek času</li>
        <li>Vše srozumitelně vysvětlíme předem</li>
        <li>Respektujeme váš stop signál</li>
        <li>Postupujeme v tempu, které vám vyhovuje</li>
        <li>Pracujeme s jemnou rukou a moderním vybavením</li>
      </ul>

      <p>Nebojte se nám ozvat. Často stačí jeden dobrý zážitek, aby se vnímání zubní péče změnilo.</p>
    `,
  },
  {
    slug: "zubni-implantaty-pruvodce",
    title: "Zubní implantáty — kompletní průvodce pro pacienty",
    subtitle: "Náhrada chybějících zubů",
    excerpt:
      "Zvažujete zubní implantát? Kompletní průvodce — jak probíhá implantace, kolik stojí, pro koho je vhodná a jak se o implantát starat.",
    date: "2026-02-24",
    readTime: "9 min čtení",
    image: "/photos/blog-zubni-implantaty.webp",
    imageAlt: "Koncept moderní implantologie a náhrady zubu",
    metaTitle:
      "Zubní implantáty — průvodce pro pacienty | Zubaři z Dejvic, Praha 6",
    metaDescription:
      "Zvažujete zubní implantát? Kompletní průvodce — jak probíhá implantace, kolik stojí a pro koho je vhodná. Konzultace u Zubařů z Dejvic, Praha 6.",
    keywords: [
      "zubní implantáty",
      "zubní implantát cena",
      "zubní implantáty Praha",
      "implantace zubu",
      "implantát vs můstek",
    ],
    content: `
      <p class="lead">Ztráta zubu — ať už následkem úrazu, kazu nebo parodontózy — je vždy nepříjemná zkušenost. Zubní implantát je dnes považován za nejmodernější a nejfyziologičtější způsob náhrady chybějícího zubu. V tomto článku vám vysvětlíme vše, co potřebujete vědět, než se pro implantát rozhodnete.</p>

      <h2>Co je zubní implantát</h2>

      <p>Zubní implantát je malý titanový šroub, který se chirurgicky zavádí do čelistní kosti na místo chybějícího zubu. Titan je biokompatibilní materiál — lidské tělo ho přijímá a kost se na něj pevně napojí (tento proces se nazývá <strong>osseointegrace</strong>). Na implantát se po zhojení nasadí protetická nástavba (abutment) a korunka, která vypadá a funguje jako přirozený zub.</p>

      <p>Implantát tedy sestává ze tří částí:</p>

      <ul>
        <li><strong>Implantát</strong> (titanový šroub v kosti) — nahrazuje kořen zubu</li>
        <li><strong>Abutment</strong> (nástavba) — spojuje implantát s korunkou</li>
        <li><strong>Korunka</strong> — viditelná část, která vypadá jako přirozený zub</li>
      </ul>

      <h2>Kdo je vhodný kandidát</h2>

      <p>Zubní implantát je vhodný pro většinu dospělých pacientů se ztrátou jednoho nebo více zubů. Podmínky pro úspěšnou implantaci:</p>

      <ul>
        <li><strong>Dostatečné množství a kvalita kosti</strong> — pokud je kosti málo, je někdy nutná augmentace (doplnění kosti)</li>
        <li><strong>Zdravé dásně</strong> — aktivní parodontóza musí být nejprve stabilizována</li>
        <li><strong>Dokončený růst čelistí</strong> — implantáty se nezavádějí dětem a dospívajícím</li>
        <li><strong>Celkový zdravotní stav</strong> — nekontrolovaný diabetes, imunosupresivní léčba nebo ozařování čelistí mohou být kontraindikací</li>
      </ul>

      <p><strong>Kouření</strong> výrazně snižuje úspěšnost implantace. Kuřákům doporučujeme kouření omezit nebo ideálně přestat alespoň 2–4 týdny před a po zákroku.</p>

      <h2>Jak probíhá celý proces</h2>

      <h3>1. Vstupní konzultace a plánování</h3>
      <p>Na první návštěvě zhodnotíme celkový stav dutiny ústní, provedeme rentgenové vyšetření a v případě potřeby zhotovíme CBCT snímek (3D rentgen čelistí). Na základě těchto údajů naplánujeme přesnou pozici implantátu.</p>

      <h3>2. Zavedení implantátu</h3>
      <p>Chirurgický zákrok probíhá v lokální anestezii. Lékař preparuje lůžko v kosti a zavede titanový implantát. Zákrok obvykle trvá 30–60 minut na jeden implantát. Po zákroku je obvyklý mírný otok a citlivost, které odezní během několika dní.</p>

      <h3>3. Hojení (osseointegrace)</h3>
      <p>Toto je klíčová fáze. Kost se postupně napojuje na povrch implantátu. Hojení trvá obvykle <strong>3–6 měsíců</strong> v závislosti na lokalizaci a kvalitě kosti. Během tohoto období nosíte provizorní řešení (provizorní korunka nebo snímací náhrada).</p>

      <h3>4. Protetická fáze</h3>
      <p>Po zhojení se na implantát nasadí abutment a zhotoví se finální korunka. Korunka je vyrobena na míru — tvar, barva a velikost odpovídají okolním zubům, takže implantát je od přirozeného zubu prakticky nerozeznatelný.</p>

      <h2>Implantát vs. můstek vs. snímací protéza</h2>

      <p>Při ztrátě zubu máte obvykle tři možnosti. Každá má své výhody:</p>

      <h3>Zubní implantát</h3>
      <ul>
        <li>Nenarušuje sousední zuby (na rozdíl od můstku)</li>
        <li>Zachovává čelistní kost (kost se pod implantátem neresorbuje)</li>
        <li>Vydrží desítky let při správné péči</li>
        <li>Přirozený pocit a funkce</li>
        <li>Vyšší počáteční investice</li>
      </ul>

      <h3>Můstek</h3>
      <ul>
        <li>Rychlejší řešení (bez čekání na osseointergraci)</li>
        <li>Nižší cena než implantát</li>
        <li>Vyžaduje obroušení sousedních (zdravých) zubů</li>
        <li>Kost pod můstkem se postupně vstřebává</li>
        <li>Životnost 10–15 let</li>
      </ul>

      <h3>Snímací protéza</h3>
      <ul>
        <li>Nejnižší cena</li>
        <li>Nenarušuje sousední zuby</li>
        <li>Menší komfort při nošení a jídle</li>
        <li>Nutnost vyndávat a čistit</li>
        <li>Kost pod protézou se vstřebává rychleji</li>
      </ul>

      <h2>Kolik stojí zubní implantát</h2>

      <p>Celková cena implantologického ošetření v Praze se obvykle pohybuje:</p>

      <ul>
        <li><strong>Chirurgická fáze</strong> (zavedení implantátu): 15 000 – 25 000 Kč</li>
        <li><strong>Abutment + korunka</strong>: 10 000 – 20 000 Kč</li>
        <li><strong>Celkem na jeden implantát</strong>: přibližně 25 000 – 45 000 Kč</li>
      </ul>

      <p>Cena se může lišit v závislosti na systému implantátu, typu korunky (metalokeramická vs. celokeramická) a případné potřebě augmentace kosti. Zubní implantáty nejsou hrazeny ze zdravotního pojištění.</p>

      <p>Přesnou kalkulaci vám sestavíme na základě individuálního vyšetření a plánu léčby.</p>

      <h2>Bolí zavedení implantátu?</h2>

      <p>Samotný zákrok probíhá v lokální anestezii a je bezbolestný. Většina pacientů udává, že zavedení implantátu bylo méně nepříjemné, než čekali. Po odeznění anestezie je běžná mírná bolest a citlivost, které jsou zvládnutelné běžnými léky proti bolesti (ibuprofen). Otok obvykle kulminuje 2.–3. den a poté ustupuje.</p>

      <h2>Jak o implantát pečovat</h2>

      <p>Implantát sice nemůže dostat kaz, ale tkáně kolem něj mohou onemocnět zánětem (periimplantitida). Péče o implantát je proto stejně důležitá jako péče o vlastní zuby:</p>

      <ul>
        <li>Důkladné čištění — kartáček, mezizubní kartáčky, solo kartáček</li>
        <li>Pravidelná dentální hygiena (minimálně dvakrát ročně)</li>
        <li>Pravidelné kontroly u zubaře</li>
        <li>Nekouřit — kouření dramaticky zvyšuje riziko komplikací</li>
      </ul>

      <h2>Jak dlouho implantát vydrží</h2>

      <p>Při správné péči a pravidelných kontrolách může zubní implantát sloužit <strong>celý život</strong>. Korunka nasazená na implantátu má životnost přibližně 15–25 let a po opotřebení se jednoduše vymění — implantát v kosti zůstává.</p>

      <h2>Konzultace v naší ordinaci</h2>

      <p>Pokud vám chybí zub a zvažujete implantát, rádi vás objednáme na konzultaci. Provedeme důkladné vyšetření, zhodnotíme vaše možnosti a sestavíme individuální plán léčby včetně cenové kalkulace. V ordinaci Zubaři z Dejvic přistupujeme k implantologii s maximální pečlivostí — od 3D plánování po finální nasazení korunky.</p>
    `,
  },
  {
    slug: "detsky-zubar-prvni-navsteva",
    title: "Kdy vzít dítě poprvé k zubaři a jak ho na to připravit",
    subtitle: "Dětská stomatologie",
    excerpt:
      "První návštěva zubaře formuje vztah dítěte k zubní péči na celý život. Přečtěte si, kdy přijít a jak dítě správně připravit.",
    date: "2026-02-17",
    readTime: "7 min čtení",
    image: "/photos/blog-detsky-zubar.webp",
    imageAlt: "Přátelské prostředí zubní ordinace pro dětské pacienty",
    metaTitle:
      "Dětský zubař — první návštěva a příprava | Zubaři z Dejvic, Praha 6",
    metaDescription:
      "Kdy vzít dítě poprvé k zubaři? Jak ho připravit a na co nezapomenout. Dětská stomatologie u Zubařů z Dejvic — šetrný přístup k dětem, Praha 6 Dejvice.",
    keywords: [
      "dětský zubař",
      "dětský zubař Praha 6",
      "první návštěva zubaře dítě",
      "dětská stomatologie Praha",
      "kazivost mléčných zubů",
    ],
    content: `
      <p class="lead">Péče o zuby začíná mnohem dříve, než si většina rodičů myslí. První návštěva zubaře je důležitým milníkem — nejen pro zdraví dětského chrupu, ale i pro budování pozitivního vztahu k zubní péči, který dítě provede celým životem.</p>

      <h2>Kdy přijít poprvé</h2>

      <p>Česká stomatologická komora doporučuje <strong>první návštěvu zubaře kolem prvního roku věku dítěte</strong>, tedy zhruba v době, kdy prořezávají první mléčné zuby. Cílem není ošetření, ale:</p>

      <ul>
        <li>Kontrola správného vývoje chrupu a čelistí</li>
        <li>Odhalení případných raných problémů</li>
        <li>Poradenství pro rodiče ohledně výživy a hygieny</li>
        <li>Seznámení dítěte s prostředím ordinace v klidném, nestresujícím kontextu</li>
      </ul>

      <p>Následné preventivní prohlídky by měly probíhat <strong>každých 6 měsíců</strong>. Pravidelnost je klíčová — pomáhá zachytit problémy včas a buduje u dítěte rutinu.</p>

      <h2>Jak probíhá první návštěva</h2>

      <p>První návštěva u zubaře je obvykle krátká a nenáročná. Lékař:</p>

      <ul>
        <li>Prohlédne dítěti zuby a dásně (často na klíně rodiče)</li>
        <li>Zkontroluje, zda zuby prořezávají správně</li>
        <li>Posoudí stav skusu</li>
        <li>Zhodnotí riziko vzniku kazu</li>
        <li>Poradí rodičům s čištěním a výživou</li>
      </ul>

      <p>Žádné vrtání, žádné bolestivé zákroky. Cílem je, aby si dítě odneslo <strong>pozitivní první zkušenost</strong>.</p>

      <h2>Jak dítě na návštěvu připravit</h2>

      <p>Přístup rodičů zásadně ovlivňuje, jak dítě návštěvu zubaře vnímá. Zde je několik osvědčených tipů:</p>

      <h3>Mluvte o zubaři pozitivně a přirozeně</h3>
      <p>Zubař je „paní doktorka, která se podívá na zoubky" — ne strašák. Vyprávějte o návštěvě běžně, jako o jakékoli jiné aktivitě. Přehnané ubezpečování („Neboj se, vůbec to nebude bolet!") může paradoxně vyvolat úzkost.</p>

      <h3>Zahrajte si doma na zubaře</h3>
      <p>Prohlédněte si navzájem zuby pomocí zrcátka. Počítejte zoubky. Nechte dítě „ošetřit" plyšáka. Tato hra odstraňuje neznámo a dodává návštěvě povědomý rámec.</p>

      <h3>Nesdílejte vlastní negativní zkušenosti</h3>
      <p>I když se vy sami zubaře bojíte, před dítětem to nedávejte najevo. Děti jsou velmi citlivé na emoce rodičů. Pokud nemůžete zakrýt vlastní nervozitu, nechte dítě doprovodit partnerem nebo prarodičem, který je klidnější.</p>

      <h3>Vyberte správný čas</h3>
      <p>Naplánujte návštěvu na dobu, kdy je dítě odpočaté a v dobré náladě — ideálně dopoledne. Vyhněte se termínům v čase spánku nebo když je dítě hladové.</p>

      <h3>Po návštěvě pochvalte</h3>
      <p>Oceňte dítě za statečnost, bez ohledu na to, jak návštěva probíhala. „Byl/a jsi moc šikovný/á, jak jsi otevřel/a pusinku!" Pozitivní zpětná vazba posiluje dobrý vztah k zubní péči.</p>

      <h2>Nejčastější problémy mléčných zubů</h2>

      <h3>Rané dětské kazy (bottle caries)</h3>
      <p>Nejčastější problém malých dětí. Vzniká, když dítě usíná s lahvičkou mléka, čaje nebo džusu — cukr z nápoje je v kontaktu se zuby celou noc. Kaz se typicky objevuje na horních předních zoubcích. Prevencí je nedávat dítěti sladké nápoje do lahvičky a neukládat ho s lahvičkou ke spánku.</p>

      <h3>Úrazy zubů</h3>
      <p>Děti jsou aktivní a úrazy zubů jsou časté — zejména v období, kdy se učí chodit, a pak ve školním věku při sportu. Pokud dítě utrpí úraz zubu, kontaktujte zubaře co nejdříve, i když se zdá, že je zub v pořádku. Některá poranění se projeví až s odstupem.</p>

      <h3>Předčasná ztráta mléčného zubu</h3>
      <p>Mléčné zuby drží v čelisti místo pro stálé zuby. Pokud dítě přijde o mléčný zub příliš brzy (kvůli kazu nebo úrazu), sousední zuby se mohou posunout a stálý zub pak nemá dostatek prostoru k prořezání. V takových případech se někdy používá udržovač místa.</p>

      <h2>Preventivní ošetření pro děti</h2>

      <h3>Pečetění fisur</h3>
      <p>Fisury jsou rýhy na žvýkacích plochách zadních zubů, kde se snadno zachytává plak a vzniká kaz. Pečetění spočívá v nanesení tenké ochranné vrstvy (pečetidla) do těchto rýh. Jedná se o bezbolestný, rychlý a velmi účinný preventivní zákrok. Doporučuje se u prvních stálých stoliček (šestek), které prořezávají kolem 6. roku věku.</p>

      <h3>Fluoridace</h3>
      <p>Profesionální aplikace fluoridového laku nebo gelu posiluje zubní sklovinu a zvyšuje její odolnost vůči kazu. Provádí se zpravidla při preventivních prohlídkách, 2–4× ročně dle individuálního rizika kazu.</p>

      <h2>Správné čištění zubů podle věku</h2>

      <h3>0–2 roky</h3>
      <p>Prvním zoubkům čistěte rodič — měkkým dětským kartáčkem nebo silikonovým návlekem na prst. Používejte dětskou pastu s obsahem fluoridu 1000 ppm, v množství velikosti zrnka rýže.</p>

      <h3>2–6 let</h3>
      <p>Dítě se učí čistit samo, ale <strong>rodič vždy dočišťuje</strong>. Množství pasty velikosti hrášku. Rodičovský dohled je zásadní — dítě v tomto věku nemá dostatečnou motoriku na důkladné čištění.</p>

      <h3>6–8 let</h3>
      <p>Dítě čistí samo pod dohledem rodiče. Rodič kontroluje a občas dočistí. Postupně přidáváme mezizubní kartáčky.</p>

      <h3>Od 8 let</h3>
      <p>Dítě by mělo být schopné čistit zuby samostatně, ale občasná kontrola je stále vhodná. V tomto věku je důležité vytvořit pevný návyk čištění dvakrát denně.</p>

      <h2>Výživa a zuby — co škodí nejvíce</h2>

      <ul>
        <li><strong>Sladké nápoje</strong> (džusy, slazené čaje, limonády) — nejhorší jsou při popíjení během celého dne</li>
        <li><strong>Lepivé sladkosti</strong> (gumové bonbóny, karamel) — ulpívají na zubech dlouho</li>
        <li><strong>Časté svačení sladkého mezi jídly</strong> — zuby nemají čas na remineralizaci</li>
        <li><strong>Kyselé potraviny a nápoje</strong> (citrusy, ocet, kyselé bonbóny) — oslabují sklovinu</li>
      </ul>

      <p>Tip: po kyselém jídle nebo pití <strong>nepijte hned</strong> — počkejte alespoň 30 minut. Kyselina dočasně změkčuje sklovinu a okamžité čištění by ji mohlo poškozovat.</p>

      <h2>Zubaři z Dejvic — rádi přivítáme i ty nejmenší</h2>

      <p>V naší ordinaci na Kafkově ulici přistupujeme k dětským pacientům s trpělivostí a pochopením. Víme, že pozitivní první zkušenost je základ — a děláme vše pro to, aby se u nás děti cítily bezpečně. Pokud hledáte zubaře pro své dítě v Dejvicích nebo Praha 6, rádi vás přivítáme.</p>
    `,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("cs-CZ", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
