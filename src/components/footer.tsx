export function Footer() {
  return (
    <footer className="py-16 border-t border-divider">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-14">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="" className="h-6 w-auto" />
              <span className="font-serif text-[1.1rem]">Zubaři z Dejvic</span>
            </a>
            <p className="text-[0.82rem] text-warm-gray leading-relaxed">
              Kvalitní stomatologie založená na&nbsp;důvěře a&nbsp;individuálním přístupu.
            </p>
          </div>

          {/* Ordinace */}
          <div>
            <h4 className="text-[0.72rem] tracking-[0.1em] uppercase text-charcoal font-medium mb-5">
              Ordinace
            </h4>
            <div className="space-y-2.5">
              <a href="/#o-nas" className="block text-[0.82rem] text-warm-gray hover:text-charcoal transition-colors">O nás</a>
              <a href="/sluzby" className="block text-[0.82rem] text-warm-gray hover:text-charcoal transition-colors">Služby</a>
              <a href="/cenik" className="block text-[0.82rem] text-warm-gray hover:text-charcoal transition-colors">Ceník</a>
              <a href="/#tym" className="block text-[0.82rem] text-warm-gray hover:text-charcoal transition-colors">Náš tým</a>
              <a href="/#ordinace" className="block text-[0.82rem] text-warm-gray hover:text-charcoal transition-colors">Prostory</a>
            </div>
          </div>

          {/* Pro pacienty */}
          <div>
            <h4 className="text-[0.72rem] tracking-[0.1em] uppercase text-charcoal font-medium mb-5">
              Pro pacienty
            </h4>
            <div className="space-y-2.5">
              <a href="/objednat" className="block text-[0.82rem] text-warm-gray hover:text-charcoal transition-colors">Objednat se</a>
              <a href="/blog" className="block text-[0.82rem] text-warm-gray hover:text-charcoal transition-colors">Blog</a>
              <a href="/#faq" className="block text-[0.82rem] text-warm-gray hover:text-charcoal transition-colors">Časté dotazy</a>
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="text-[0.72rem] tracking-[0.1em] uppercase text-charcoal font-medium mb-5">
              Kontakt
            </h4>
            <div className="space-y-2.5 text-[0.82rem] text-warm-gray">
              <p>Kafkova 605/16<br />Praha 6 — Dejvice</p>
              <a href="tel:+420602595134" className="block hover:text-charcoal transition-colors">+420 602 595 134</a>
              <a href="mailto:stomordinace@gmail.com" className="block hover:text-charcoal transition-colors">stomordinace@gmail.com</a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-divider flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="text-[0.75rem] text-warm-gray-light">
            &copy; {new Date().getFullYear()} Zubaři z Dejvic s.r.o. Všechna práva vyhrazena.
          </div>
          <div className="flex gap-6">
            <span className="text-[0.75rem] text-warm-gray-light">
              Spolupráce s VZP, VoZP, ČPZP, ZPMVČR, OZP
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
