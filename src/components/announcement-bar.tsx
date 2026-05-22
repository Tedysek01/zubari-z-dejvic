"use client";

import { useState, useRef, useEffect } from "react";

export function AnnouncementBar({
  onHeightChange,
  hidden = false,
}: {
  onHeightChange?: (h: number) => void;
  hidden?: boolean;
}) {
  const [visible, setVisible] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || !visible) return;
    const ro = new ResizeObserver(() => {
      onHeightChange?.(ref.current!.offsetHeight);
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, [visible, onHeightChange]);

  useEffect(() => {
    if (!visible) onHeightChange?.(0);
  }, [visible, onHeightChange]);

  if (!visible) return null;

  return (
    <div
      ref={ref}
      className={`fixed top-0 left-0 right-0 z-[60] bg-teal-dark text-white text-center px-6 text-[0.8rem] tracking-wide transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
      style={{
        paddingTop: "calc(env(safe-area-inset-top, 0px) + 0.625rem)",
        paddingBottom: "0.625rem",
      }}
    >
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
