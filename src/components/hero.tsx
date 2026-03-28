import Image from "next/image";

export function Hero() {
  return (
    <section className="flex-1 flex items-center relative overflow-hidden py-12">
      {/* Diagonal lines — architectural, from logo angle */}
      <div className="absolute top-0 right-0 w-[55%] h-full diagonal-lines-bold opacity-[0.07]" />

      {/* Teal accent shape — asymmetric, references the logo's rounded bottom */}
      <div className="absolute top-[8%] right-[5%] w-[28%] h-[38%] bg-gradient-to-b from-teal/[0.07] to-teal/[0.02] rounded-bl-[80px] rounded-tr-[40px]" />

      {/* Floating teal dot — visual anchor */}
      <div className="absolute top-[22%] right-[36%] w-2 h-2 rounded-full bg-teal/30 animate-fade-up [animation-delay:1.2s]" />
      <div className="absolute bottom-[30%] right-[12%] w-3 h-3 rounded-full bg-teal/15 animate-fade-up [animation-delay:1.5s]" />

      <div className="max-w-[1200px] mx-auto px-6 w-full relative z-10">
        <div className="grid md:grid-cols-[1fr_340px] gap-12 items-center">
          {/* Left — text */}
          <div>
            <div className="flex items-center gap-3 mb-8 animate-fade-up [animation-delay:0.2s]">
              <div className="w-2.5 h-2.5 rounded-full bg-teal" />
              <span className="text-[0.72rem] tracking-[0.14em] uppercase text-warm-gray font-normal">
                Kafkova 16, Praha 6 — Dejvice
              </span>
            </div>

            <h1 className="font-serif font-light text-[clamp(3rem,7vw,5.8rem)] leading-[1.02] tracking-[-0.02em] mb-8 animate-fade-up [animation-delay:0.4s]">
              Péče, které
              <br />
              <span className="text-teal-dark italic">důvěřujete</span>
            </h1>

            <div className="w-16 h-[2px] bg-teal/40 mb-8 animate-fade-up [animation-delay:0.55s]" />

            <p className="text-[1.05rem] text-warm-gray leading-[1.75] max-w-[440px] mb-14 animate-fade-up [animation-delay:0.6s]">
              Kvalitní stomatologie založená na důvěře, precizní práci
              a&nbsp;individuálním přístupu ke každému pacientovi.
            </p>

            <div className="flex items-center gap-8 animate-fade-up [animation-delay:0.8s]">
              <a
                href="/objednat"
                className="group text-[0.78rem] tracking-[0.06em] uppercase px-8 py-3.5 bg-teal-dark text-white rounded-full hover:bg-charcoal transition-all duration-300 hover:shadow-[0_4px_20px_rgba(30,122,112,0.25)]"
              >
                Objednat se
                <span className="inline-block ml-1.5 transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </a>
              <a
                href="tel:+420602595134"
                className="text-[0.88rem] text-warm-gray hover:text-teal-dark transition-colors duration-300"
              >
                +420 602 595 134
              </a>
            </div>
          </div>

          {/* Right — photo */}
          <div className="animate-fade-up [animation-delay:0.5s]">
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-2xl rounded-tr-[60px] overflow-hidden">
                <Image
                  src="/photos/hero.webp"
                  alt="Recepce ordinace Zubaři z Dejvic"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-3 -left-3 w-20 h-20 border-2 border-teal/15 rounded-xl rounded-tl-none -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
