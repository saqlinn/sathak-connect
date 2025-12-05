import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhySponsorSection from "@/components/WhySponsorSection";
import SponsorshipPlans from "@/components/SponsorshipPlans";
import BazaarSection from "@/components/BazaarSection";
import AudienceSection from "@/components/AudienceSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhySponsorSection />
      <SponsorshipPlans />
      <BazaarSection />
      <AudienceSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
