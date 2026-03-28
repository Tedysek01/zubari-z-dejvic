import type { Metadata } from "next";
import Image from "next/image";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SubpageHeader } from "@/components/subpage-header";
import { ScrollReveal } from "@/components/scroll-reveal";
import { blogPosts, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Zubaři z Dejvic | Zubní ordinace Praha 6",
  description:
    "Odborné články o zubním zdraví, prevenci a moderní stomatologii. Praktické rady od zubních lékařů z ordinace Zubaři z Dejvic v Praze 6.",
};

export default function BlogPage() {
  return (
    <>
      <Nav />
      <SubpageHeader
        label="Blog"
        title="Rady pro zdravý úsměv"
        description="Odborné články o zubním zdraví, prevenci a moderní stomatologii — srozumitelně a bez zbytečného žargonu."
      />

      <section className="pb-28">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Featured (first) post */}
          <ScrollReveal>
            <a href={`/blog/${blogPosts[0].slug}`} className="group block mb-16">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-linen-dark">
                  <Image
                    src={blogPosts[0].image}
                    alt={blogPosts[0].imageAlt}
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
                <div>
                  <span className="text-[0.72rem] tracking-[0.1em] uppercase text-teal-dark font-medium">
                    {blogPosts[0].subtitle}
                  </span>
                  <h2 className="font-serif text-[1.6rem] font-light leading-[1.25] mt-3 mb-4 group-hover:text-teal-dark transition-colors duration-300">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-[0.92rem] text-warm-gray leading-relaxed mb-5">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-[0.78rem] text-warm-gray-light">
                    <span>{formatDate(blogPosts[0].date)}</span>
                    <span className="w-1 h-1 rounded-full bg-divider" />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                </div>
              </div>
            </a>
          </ScrollReveal>

          {/* Divider */}
          <div className="border-t border-divider mb-12" />

          {/* Grid of remaining posts */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {blogPosts.slice(1).map((post, i) => (
              <ScrollReveal key={post.slug} delay={i % 3}>
                <a href={`/blog/${post.slug}`} className="group block">
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-linen-dark mb-5">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    />
                  </div>
                  <span className="text-[0.68rem] tracking-[0.1em] uppercase text-teal-dark font-medium">
                    {post.subtitle}
                  </span>
                  <h3 className="font-serif text-[1.15rem] font-light leading-[1.3] mt-2 mb-3 group-hover:text-teal-dark transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-[0.85rem] text-warm-gray leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-[0.75rem] text-warm-gray-light">
                    <span>{formatDate(post.date)}</span>
                    <span className="w-1 h-1 rounded-full bg-divider" />
                    <span>{post.readTime}</span>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
