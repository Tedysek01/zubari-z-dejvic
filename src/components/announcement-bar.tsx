"use client";

import { useState } from "react";

export function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-teal-dark text-white text-center py-2.5 px-6 text-[0.8rem] tracking-wide relative safe-top">
      <span className="opacity-80">Přijímáme nové pacienty</span>
      <span className="mx-3 opacity-30">|</span>
      <a
        href="tel:+420602595134"
        className="underline underline-offset-2 decoration-white/30 hover:decoration-white/70 transition-all"
      >
        +420 602 595 134
      </a>
      <button
        onClick={() => setVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 opacity-40 hover:opacity-100 transition-opacity cursor-pointer"
        aria-label="Zavřít"
      >
        &times;
      </button>
    </div>
  );
}
