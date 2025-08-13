import { Card } from "@/components/ui/card";
import MagneticElement from "./MagneticElement";

const values = [
  {
    number: "1",
    title: "Make problems smaller, not businesses bigger.",
    description: "Profit should fuel solutions, not be the reason they exist."
  },
  {
    number: "2", 
    title: "Growth isn't the default.",
    description: "Not every solution \"scales\". Sometimes the answer is fewer, intentional steps."
  },
  {
    number: "3",
    title: "Smaller actions, bigger breakthroughs.",
    description: "We learn through small, deliberate experiments, not grand predictions."
  },
  {
    number: "4",
    title: "Small, but compounded.",
    description: "Change is built on consistent, incremental shifts over time."
  },
  {
    number: "5",
    title: "Small, but shared.",
    description: "When single organizations become too large, power dynamics shift. We believe in a world of distributed power, trust and equal participation."
  },
  {
    number: "6",
    title: "Start with the smallest unit.",
    description: "Technology scales, but people change one at a time. We design for the individual human experience first."
  }
];

const ValuesSection = () => {
  return (
    <section className="py-32 px-6 bg-muted/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-1/4 w-32 h-32 rounded-full bg-gradient-cellular animate-pulse-glow" />
        <div className="absolute bottom-32 right-1/3 w-24 h-24 rounded-full bg-gradient-cellular animate-drift" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <MagneticElement strength={0.15}>
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20">
            <span className="text-gradient">Our Values</span>
          </h2>
        </MagneticElement>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <MagneticElement key={index} strength={0.08}>
              <Card className="p-8 hover-glow h-full group cursor-pointer border-primary/10 bg-card/80 backdrop-blur-sm">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-lg group-hover:animate-pulse-glow">
                    {value.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-gradient transition-all duration-300">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </Card>
            </MagneticElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;