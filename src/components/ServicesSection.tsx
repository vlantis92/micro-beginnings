import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MagneticElement from "./MagneticElement";

const strategyServices = [
  {
    title: "Strategy Sessions",
    description: "Targeted hourly engagements find new perspectives, possibilities and imagined spaces, while defining practical and immediate next steps."
  },
  {
    title: "Strategy Workshops", 
    description: "Structured workshops following a Smaller approach, that remove assumptions, return to first principles, and reframe complex problems with bite-sized actionable steps."
  },
  {
    title: "Embedded Support",
    description: "Up to six months of hands-on capacity, working within your team to move \"Oh, that's an interesting idea\" to real outcomes for your mission."
  }
];

const ServicesSection = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent/5 via-transparent to-primary/5" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <MagneticElement strength={0.15}>
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20">
            <span className="text-gradient">How We Help</span>
          </h2>
        </MagneticElement>
        
        {/* Strategy Services */}
        <div className="mb-20">
          <MagneticElement strength={0.12}>
            <h3 className="text-4xl font-bold mb-6 text-secondary">Strategy Services</h3>
            <p className="text-xl text-muted-foreground mb-12 max-w-4xl">
              Let us help support your mission, making the big problems you're tackling– smaller– one step at a time.
            </p>
          </MagneticElement>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {strategyServices.map((service, index) => (
              <MagneticElement key={index} strength={0.1}>
                <Card className="p-8 hover-glow h-full group cursor-pointer border-secondary/20 bg-card/90 backdrop-blur-sm">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl font-bold text-secondary mr-4">{index + 1}.</span>
                    <h4 className="text-xl font-bold text-foreground group-hover:text-gradient transition-all duration-300">
                      {service.title}
                    </h4>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </Card>
              </MagneticElement>
            ))}
          </div>
        </div>
        
        {/* Product Lab */}
        <MagneticElement strength={0.12}>
          <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-3xl p-12 border border-accent/20">
            <h3 className="text-4xl font-bold mb-6 text-accent">Product Lab</h3>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              The Smaller lab is our in-house product studio— bringing to life ideas that have high potential to be impactful.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Smaller by design, we start with focused experiments, shaped through real-world testing, 
              and refined into solutions that deliver measurable impact. We prioritise human experience, 
              sustainable business models, and intentional growth to ensure every product creates lasting value.
            </p>
          </div>
        </MagneticElement>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 right-20 w-14 h-14 rounded-full bg-accent-glow/20 animate-float" 
           style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/4 left-16 w-8 h-8 rounded-full bg-secondary-glow/30 animate-drift" 
           style={{ animationDelay: '4s' }} />
    </section>
  );
};

export default ServicesSection;