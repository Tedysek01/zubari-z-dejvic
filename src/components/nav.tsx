"use client";

import { useEffect, useState, useCallback } from "react";
import { AnnouncementBar } from "./announcement-bar";

const links = [
  { href: "/#o-nas", label: "O nás" },
  { href: "/sluzby", label: "Služby" },
  { href: "/cenik", label: "Ceník" },
  { href: "/blog", label: "Blog" },
  { href: "/#kontakt", label: "Kontakt" },
];

export function Nav({ showAnnouncement = false }: { showAnnouncement?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [barHeight, setBarHeight] = useState(0);

  const onBarHeight = useCallback((h: number) => setBarHeight(h), []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = () => {
    setMobileOpen(false);
    document.body.style.overflow = "";
  };

  // When scrolled, announcement hides and nav goes to top
  const navTop = showAnnouncement && !scrolled ? barHeight : 0;

  return (
    <>
      {showAnnouncement && (
        <AnnouncementBar onHeightChange={onBarHeight} hidden={scrolled} />
      )}

      <nav
        className={`fixed left-0 right-0 z-50 transition-all duration-300 bg-linen ${
          scrolled ? "border-b border-divider/50" : ""
        }`}
        style={{
          top: `${navTop}px`,
          paddingTop: scrolled
            ? "calc(env(safe-area-inset-top, 0px) + 0.75rem)"
            : showAnnouncement
              ? "1.25rem"
              : "calc(env(safe-area-inset-top, 0px) + 1.25rem)",
          paddingBottom: scrolled ? "0.75rem" : "1.25rem",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="" className="h-7 w-auto" />
            <span className="font-serif text-[1.25rem] tracking-tight">
              Zubaři z Dejvic
            </span>
          </a>

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

      {/* Spacer to push content below fixed nav + announcement */}
      <div style={{ height: `${(showAnnouncement ? barHeight : 0) + 80}px` }} />

      {mobileOpen && (
        <div
          className="fixed inset-0 bg-linen z-[200] flex flex-col items-center justify-center gap-8 overflow-y-auto"
          style={{
            paddingTop: "calc(env(safe-area-inset-top, 0px) + 2rem)",
            paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 2rem)",
          }}
        >
          <button
            onClick={closeMobile}
            className="absolute text-2xl p-2 cursor-pointer"
            style={{
              top: "calc(env(safe-area-inset-top, 0px) + 1rem)",
              right: "1.5rem",
            }}
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
