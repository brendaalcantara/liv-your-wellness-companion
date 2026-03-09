import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AudienceSection from "@/components/AudienceSection";
import FeaturesSection from "@/components/FeaturesSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import ProSection from "@/components/ProSection";
import PrivacySection from "@/components/PrivacySection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AudienceSection />
      <FeaturesSection />
      <DifferentialsSection />
      <ProSection />
      <PrivacySection />
      <PricingSection />
      <TestimonialsSection />
      <DownloadSection />
      <Footer />
    </div>
  );
};

export default Index;
