import HeroSection from "@/components/heroSection";
import PromoteSection from "@/components/promoteSection";
import FaqSection from "@/components/faqSection";
import DevicesSection from "@/components/devicesSection";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <main>
        {/* heroSection */}
        <HeroSection />
        {/* promoteSection */}
        <PromoteSection />
        {/* faqSection */}
        <FaqSection />
        {/* devicesSection */}
        <DevicesSection />
      </main>
      {/* footer */}
      <Footer />
    </>
  );
}
