import { ScrollReveal } from "./scroll-reveal";

interface SubpageHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export function SubpageHeader({ label, title, description }: SubpageHeaderProps) {
  return (
    <section className="pt-8 pb-16 relative overflow-hidden">
      {/* Diagonal accent — brand signature */}
      <div className="absolute top-0 right-0 w-[40%] h-full diagonal-lines-bold opacity-[0.04]" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-teal" />
            <span className="text-[0.72rem] tracking-[0.12em] uppercase text-teal-dark font-medium">
              {label}
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          <h1 className="font-serif font-light text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.08] tracking-[-0.01em] max-w-[700px]">
            {title}
          </h1>
        </ScrollReveal>

        {description && (
          <ScrollReveal delay={2}>
            <p className="text-warm-gray text-[1.05rem] max-w-[540px] leading-[1.75] mt-6">
              {description}
            </p>
          </ScrollReveal>
        )}

        <ScrollReveal delay={2}>
          <div className="w-16 h-[2px] bg-teal/40 mt-8" />
        </ScrollReveal>
      </div>
    </section>
  );
}
