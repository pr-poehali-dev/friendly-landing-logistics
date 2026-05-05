import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import OrderSection from "@/components/OrderSection";
import FooterSection from "@/components/FooterSection";

export default function Index() {
  return (
    <div className="min-h-screen warm-texture font-golos">
      <HeroSection />
      <ServicesSection />
      <OrderSection />
      <FooterSection />
    </div>
  );
}
