import CursorFollower from "@/components/CursorFollower";
import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import ValuesSection from "@/components/ValuesSection";
import ServicesSection from "@/components/ServicesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <CursorFollower />
      <HeroSection />
      <PhilosophySection />
      <ValuesSection />
      <ServicesSection />
    </div>
  );
};

export default Index;
