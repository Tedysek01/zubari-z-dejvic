"use client";

import { useState } from "react";
import { ScrollReveal } from "./scroll-reveal";

const testimonials = [
  {
    quote:
      "Poprvé v životě jsem u zubaře necítila stres. Všechno mi vysvětlili dopředu, atmosféra je neuvěřitelně klidná.",
    name: "Lucie M.",
    detail: "Pacientka od roku 2022",
  },
  {
    quote:
      "Profesionální přístup kombinovaný s lidskostí. Konečně ordinace, kde se necítím jako na běžícím pásu.",
    name: "Petr K.",
    detail: "Pacient od roku 2021",
  },
  {
    quote:
      "Syn se tam těší. To říká o zubní ordinaci asi všechno.",
    name: "Karolína S.",
    detail: "Pacientka od roku 2023",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  return (
    <section className="py-28 bg-teal-muted relative overflow-hidden">
      {/* Subtle diagonal texture */}
      <div className="absolute inset-0 diagonal-lines opacity-[0.03]" />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-teal/20 to-transparent" />

      <div className="max-w-[860px] mx-auto px-6 text-center relative z-10">
        <ScrollReveal>
          <span className="text-[0.72rem] tracking-[0.12em] uppercase text-teal-dark font-medium">
            Co říkají pacienti
          </span>

          {/* Big quote — with animated transition */}
          <blockquote className="mt-12 mb-10" key={active}>
            <span className="block font-serif text-[4rem] text-teal/25 leading-none mb-2 select-none">&ldquo;</span>
            <p className="font-serif text-[clamp(1.4rem,2.8vw,2.2rem)] leading-[1.45] font-light text-charcoal quote-animate">
              {t.quote}
            </p>
          </blockquote>

          <div className="mb-12 quote-animate" key={`author-${active}`}>
            <div className="w-8 h-[1px] bg-teal/40 mx-auto mb-5" />
            <div className="text-[0.9rem] font-medium text-charcoal">
              {t.name}
            </div>
            <div className="text-[0.78rem] text-warm-gray mt-0.5">{t.detail}</div>
          </div>

          {/* Navigation dots — pill style */}
          <div className="flex items-center justify-center gap-2.5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-400 cursor-pointer ${
                  i === active
                    ? "bg-teal-dark w-8"
                    : "bg-teal-dark/15 w-2 hover:bg-teal-dark/30"
                }`}
                aria-label={`Recenze ${i + 1}`}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
