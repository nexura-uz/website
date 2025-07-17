import HeroSection from "@/components/sections/hero";
import PortfolioSection from "@/components/sections/portfolio";
import ServicesSection from "@/components/sections/services";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
    </div>
  );
}
