import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";
import { blogPosts, getBlogPost, formatDate } from "@/lib/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <Nav />

      <article className="pb-20">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Breadcrumb */}
          <ScrollReveal>
            <div className="flex items-center gap-2 pt-8 mb-10 text-[0.78rem] text-warm-gray-light">
              <a href="/blog" className="hover:text-charcoal transition-colors">Blog</a>
              <span>/</span>
              <span className="text-warm-gray">{post.subtitle}</span>
            </div>
          </ScrollReveal>

          {/* Header */}
          <ScrollReveal>
            <div className="max-w-[760px]">
              <span className="text-[0.72rem] tracking-[0.12em] uppercase text-teal-dark font-medium">
                {post.subtitle}
              </span>
              <h1 className="font-serif font-light text-[clamp(1.8rem,4vw,3rem)] leading-[1.15] mt-4 mb-6">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 text-[0.82rem] text-warm-gray-light mb-10">
                <span>{formatDate(post.date)}</span>
                <span className="w-1 h-1 rounded-full bg-divider" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Hero image */}
          <ScrollReveal>
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden bg-linen-dark mb-14">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                className="object-cover"
                priority
              />
            </div>
          </ScrollReveal>

          {/* Article content */}
          <ScrollReveal>
            <div
              className="prose-custom max-w-[720px] mx-auto"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal>
            <div className="max-w-[720px] mx-auto mt-16 p-8 bg-teal-muted rounded-2xl">
              <h3 className="font-serif text-[1.3rem] font-light mb-3">
                Potřebujete poradit?
              </h3>
              <p className="text-[0.92rem] text-warm-gray leading-relaxed mb-6">
                Rádi vám odpovíme na vaše dotazy. Zavolejte nám nebo se objednejte online.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/objednat"
                  className="text-[0.78rem] tracking-[0.06em] uppercase px-7 py-3 bg-teal-dark text-white rounded-full hover:bg-charcoal transition-colors duration-300"
                >
                  Objednat se &rarr;
                </a>
                <a
                  href="tel:+420602595134"
                  className="text-[0.78rem] tracking-[0.06em] uppercase px-7 py-3 border border-teal-dark/20 text-teal-dark rounded-full hover:bg-teal-dark hover:text-white transition-all duration-300"
                >
                  +420 602 595 134
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </article>

      {/* Related articles */}
      <section className="py-20 border-t border-divider">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-serif text-[1.6rem] font-light mb-10">
              Další články
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {relatedPosts.map((related, i) => (
              <ScrollReveal key={related.slug} delay={i}>
                <a href={`/blog/${related.slug}`} className="group block">
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-linen-dark mb-5">
                    <Image
                      src={related.image}
                      alt={related.imageAlt}
                      fill
                      className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    />
                  </div>
                  <span className="text-[0.68rem] tracking-[0.1em] uppercase text-teal-dark font-medium">
                    {related.subtitle}
                  </span>
                  <h3 className="font-serif text-[1.05rem] font-light leading-[1.3] mt-2 mb-2 group-hover:text-teal-dark transition-colors duration-300">
                    {related.title}
                  </h3>
                  <span className="text-[0.75rem] text-warm-gray-light">
                    {post.readTime}
                  </span>
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
