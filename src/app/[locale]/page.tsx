import AboutUsSection from "@/components/layouts/main-page/about-us-section";
import BlogHighlightsSection from "@/components/layouts/main-page/blog-highlights-section";
import ClientTestimonialsSection from "@/components/layouts/main-page/client-testimonials-section";
import HeroSection from "@/components/layouts/main-page/hero-section";
import OurServicesSection from "@/components/layouts/main-page/our-services-section";
import PortfolioSection from "@/components/layouts/main-page/portfolio-section";
import WhyChooseUsSection from "@/components/layouts/main-page/why-choose-us-section";

export default async function Page() {
    return (
        <>
            <HeroSection />
            <AboutUsSection />
            <OurServicesSection />
            <PortfolioSection />
            <WhyChooseUsSection />
            <ClientTestimonialsSection />
            <BlogHighlightsSection />
        </>
    )
}