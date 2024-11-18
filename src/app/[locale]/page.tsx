import dynamic from "next/dynamic";
import { getPostListAction } from "../actions/posts";
import { Suspense } from "react";

const HeroSection = dynamic(
  () => import("@/components/layouts/main-page/hero-section")
);
const AboutUsSection = dynamic(
  () => import("@/components/layouts/main-page/about-us-section")
);
const OurServicesSection = dynamic(
  () => import("@/components/layouts/main-page/our-services-section")
);
const PortfolioSection = dynamic(
  () => import("@/components/layouts/main-page/portfolio-section")
);
const WhyChooseUsSection = dynamic(
  () => import("@/components/layouts/main-page/why-choose-us-section")
);
const BlogHighlightsSection = dynamic(
  () => import("@/components/layouts/main-page/blog-highlights-section")
);

export default async function Page({ params }: { params: Promise<any> }) {
  const locale = (await params).locale;
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <OurServicesSection />
      <PortfolioSection />
      <WhyChooseUsSection />
      <BlogSSR locale={locale} />
    </>
  );
}

async function BlogSSR({ locale }: { locale: string }) {
  const posts = await getPostListAction({ take: 3 });
  return (
    <Suspense fallback={<div />}>
      <BlogHighlightsSection posts={posts} locale={locale} />
    </Suspense>
  );
}
