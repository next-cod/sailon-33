import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileCta } from "@/components/layout/MobileCta";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { JourneySection } from "@/components/sections/JourneySection";
import { CharacterSection } from "@/components/sections/CharacterSection";
import { ControlSection } from "@/components/sections/ControlSection";
import { AutomationSection } from "@/components/sections/AutomationSection";
import { DemoSection } from "@/components/sections/DemoSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { ChannelsSection } from "@/components/sections/ChannelsSection";
import { SetupSection } from "@/components/sections/SetupSection";
import { CustomSection } from "@/components/sections/CustomSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { siteConfig } from "@/config/links";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Сейлон",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: siteConfig.description,
    offers: { "@type": "AggregateOffer", lowPrice: "10000", highPrice: "30000", priceCurrency: "RUB" },
  };
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <HowItWorksSection />
        <JourneySection />
        <CharacterSection />
        <ControlSection />
        <AutomationSection />
        <DemoSection />
        <BenefitsSection />
        <ChannelsSection />
        <SetupSection />
        <CustomSection />
        <TeamSection />
        <TrustSection />
        <PricingSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <MobileCta />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
