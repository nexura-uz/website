import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("@/components/layouts/main-page/hero-section"))
const AboutUsSection = dynamic(() => import("@/components/layouts/main-page/about-us-section"))
const OurServicesSection = dynamic(() => import("@/components/layouts/main-page/our-services-section"))
const PortfolioSection = dynamic(() => import("@/components/layouts/main-page/portfolio-section"))
const WhyChooseUsSection = dynamic(() => import("@/components/layouts/main-page/why-choose-us-section"))
const BlogHighlightsSection = dynamic(() => import("@/components/layouts/main-page/blog-highlights-section"))

export default async function Page() {
    return (
        <>
            <HeroSection />
            <AboutUsSection />
            <OurServicesSection />
            <PortfolioSection />
            <WhyChooseUsSection />
            <BlogHighlightsSection />
        </>
    )
}