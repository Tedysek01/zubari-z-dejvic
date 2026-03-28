import { AnnouncementBar } from "@/components/announcement-bar";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Philosophy } from "@/components/philosophy";
import { Services } from "@/components/services";
import { Team } from "@/components/team";
import { Testimonials } from "@/components/testimonials";
import { Space } from "@/components/space";
import { Contact } from "@/components/contact";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-dvh">
        <AnnouncementBar />
        <Nav />
        <Hero />
      </div>
      <Philosophy />
      <Services />
      <Team />
      <Testimonials />
      <Space />
      <Contact />
      <FAQ />
      <Footer />
    </>
  );
}
