import { Button } from "@/components/ui/button";
import ParticleField from "./ParticleField";
import MagneticElement from "./MagneticElement";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/70" />
      
      {/* Particle field */}
      <ParticleField />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <MagneticElement strength={0.2}>
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-tight">
            <span className="text-gradient">Today's wicked problems,</span>
            <br />
            <span className="text-glow">made smaller.</span>
          </h1>
        </MagneticElement>
        
        <MagneticElement strength={0.15}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
            Your think and do partner.
          </p>
        </MagneticElement>
        
        <MagneticElement strength={0.1}>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Smaller is a thought, strategy and implementation partner for mission-led organisations. 
            We provide a new perspective to tackle complexity with clarity, focus, and incremental 
            steps that compound into lasting change.
          </p>
        </MagneticElement>
        
        <MagneticElement strength={0.25}>
          <Button variant="hero" size="lg" className="text-lg px-12 py-6 hover-glow">
            Let's make it smaller
          </Button>
        </MagneticElement>
      </div>
      
      {/* Floating cellular elements */}
      <div className="absolute top-20 left-20 w-16 h-16 rounded-full bg-gradient-to-r from-accent-glow/30 to-primary-glow/20 animate-drift" />
      <div className="absolute bottom-32 right-24 w-12 h-12 rounded-full bg-gradient-to-r from-secondary-glow/40 to-accent-glow/30 animate-pulse-glow" />
      <div className="absolute top-1/3 right-20 w-8 h-8 rounded-full bg-gradient-to-r from-primary-glow/50 to-secondary-glow/20 animate-float" />
    </section>
  );
};

export default HeroSection;