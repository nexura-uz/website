import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import('@/components/layouts/about-page/hero-section'))
const StorySection = dynamic(() => import('@/components/layouts/about-page/our-story-section'))
const TwoCardSection = dynamic(() => import('@/components/layouts/about-page/two-card-section'))
const ValuesSection = dynamic(() => import('@/components/layouts/about-page/values-section'))
const TeamSection = dynamic(() => import('@/components/layouts/about-page/team-section'))
const PartnersSection = dynamic(() => import('@/components/layouts/about-page/partners-section'))
const CallSection = dynamic(() => import('@/components/layouts/about-page/call-section'))
const ClientSection = dynamic(() => import('@/components/layouts/about-page/client-testimonials-section'))

export default async function Page() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-primary">
            <HeroSection />
            <StorySection />
            <TwoCardSection />
            <ValuesSection />
            <TeamSection />
            <PartnersSection />
            <ClientSection />
            <CallSection />
        </div>
    )
}