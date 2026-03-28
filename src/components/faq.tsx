"use client";

import { useState } from "react";
import { ScrollReveal } from "./scroll-reveal";

const questions = [
  {
    q: "Přijímáte nové pacienty?",
    a: "Ano, nové pacienty aktivně přijímáme. Úvodní konzultace trvá přibližně 45 minut — probereme vaši historii, provedeme vyšetření a společně nastavíme plán péče.",
  },
  {
    q: "Pracujete se zdravotními pojišťovnami?",
    a: "Ano, spolupracujeme se zdravotními pojišťovnami. Podrobnosti rádi probereme při objednání nebo na úvodní konzultaci.",
  },
  {
    q: "Mám strach ze zubaře. Pomůžete mi?",
    a: "Absolutně. Strach z ošetření je běžný a bereme ho vážně. Pracujeme s šetrnou anestezií, vše vysvětlujeme předem a tempo přizpůsobíme vašemu komfortu. Kdykoliv můžete říct stop.",
  },
  {
    q: "Jak se objednat?",
    a: "Zavolejte nám na +420 602 595 134 nebo napište na stomordinace@gmail.com.",
  },
  {
    q: "Kde vás najdu?",
    a: "Kafkova 605/16, Praha 6 — Dejvice. Nejbližší metro je Dejvická (linka A), nejbližší tramvajová zastávka Vítězné náměstí. Parkování zdarma v zónách na ul. Dejvická a Václavkova.",
  },
];

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setActiveIndex(activeIndex === i ? null : i);
  };

  return (
    <section id="faq" className="py-28">
      <div className="max-w-[760px] mx-auto px-6">
        <ScrollReveal>
          <span className="text-[0.72rem] tracking-[0.12em] uppercase text-teal-dark font-medium">
            Časté dotazy
          </span>
          <h2 className="font-serif font-light text-[clamp(2rem,3.5vw,3rem)] leading-[1.18] mt-4 mb-4">
            Vše, co chcete vědět
          </h2>
          <div className="w-12 h-[2px] bg-teal/30 mb-12" />
        </ScrollReveal>

        <div>
          {questions.map((item, i) => (
            <ScrollReveal key={i} delay={Math.min(i, 3)}>
              <div className="border-b border-divider group">
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between py-6 text-left font-serif text-[1.12rem] text-charcoal hover:text-teal-dark transition-colors duration-300 cursor-pointer"
                  aria-expanded={activeIndex === i}
                >
                  {item.q}
                  <span
                    className={`ml-6 text-teal shrink-0 text-lg transition-transform duration-400 ${
                      activeIndex === i ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <div className={`faq-answer ${activeIndex === i ? "open" : ""}`}>
                  <div>
                    <p className="text-[0.9rem] text-warm-gray leading-[1.8] pb-6 pr-10">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
