"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "/#o-nas", label: "O nás" },
  { href: "/sluzby", label: "Služby" },
  { href: "/cenik", label: "Ceník" },
  { href: "/blog", label: "Blog" },
  { href: "/#kontakt", label: "Kontakt" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = () => {
    setMobileOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-linen backdrop-blur-xl border-b border-divider/50"
            : "bg-linen"
        }`}
        style={{
          paddingBottom: scrolled ? "0.75rem" : "1.25rem",
          paddingTop: scrolled
            ? "calc(0.75rem + env(safe-area-inset-top, 0px))"
            : "calc(1.25rem + env(safe-area-inset-top, 0px))",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="" className="h-7 w-auto" />
            <span className="font-serif text-[1.25rem] tracking-tight">
              Zubaři z Dejvic
            </span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.82rem] text-warm-gray tracking-wide hover:text-charcoal transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/objednat"
              className="text-[0.78rem] tracking-[0.05em] uppercase text-white bg-teal-dark px-5 py-2 rounded-full hover:bg-charcoal transition-colors"
            >
              Objednat se
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => {
              setMobileOpen(true);
              document.body.style.overflow = "hidden";
            }}
            aria-label="Menu"
          >
            <span className="block w-5 h-[1.5px] bg-charcoal mb-[5px]" />
            <span className="block w-5 h-[1.5px] bg-charcoal mb-[5px]" />
            <span className="block w-5 h-[1.5px] bg-charcoal" />
          </button>
        </div>
      </nav>

      {/* Mobile overlay — outside <nav> so backdrop-blur doesn't create a containing block */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-linen z-[200] flex flex-col items-center justify-center gap-8 overflow-y-auto"
          style={{
            paddingTop: "calc(4rem + env(safe-area-inset-top, 0px))",
            paddingBottom: "calc(4rem + env(safe-area-inset-bottom, 0px))",
          }}
        >
          <button
            onClick={closeMobile}
            className="absolute top-6 right-6 text-2xl p-2 cursor-pointer"
            aria-label="Zavřít"
          >
            &times;
          </button>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMobile}
              className="font-serif text-2xl"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/objednat"
            onClick={closeMobile}
            className="text-[0.85rem] tracking-[0.05em] uppercase text-white bg-teal-dark px-8 py-3 rounded-full mt-4"
          >
            Objednat se
          </a>
        </div>
      )}
    </>
  );
}
