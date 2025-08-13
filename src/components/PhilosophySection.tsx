import MagneticElement from "./MagneticElement";

const PhilosophySection = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-accent/5" />
      
      <div className="max-w-6xl mx-auto">
        <MagneticElement strength={0.15}>
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
            <span className="text-gradient">Our Philosophy</span>
            <br />
            <span className="text-secondary">Smaller Wins</span>
          </h2>
        </MagneticElement>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <MagneticElement strength={0.1}>
            <div className="space-y-8">
              <p className="text-xl md:text-2xl text-foreground leading-relaxed">
                The world's appetite for more has left us with an environment under strain 
                and basic human needs unmet.
              </p>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Bigger solutions to big problems are built on the same mindset that created them.
                <br /><br />
                <strong className="text-foreground">There's another way: Smaller thinking.</strong>
              </p>
            </div>
          </MagneticElement>
          
          <MagneticElement strength={0.12}>
            <div className="space-y-6">
              <div className="text-lg text-muted-foreground leading-relaxed">
                <p className="mb-4">Smaller footprints. Smaller increments. Smaller empires.</p>
                <p className="mb-4 text-accent font-medium">Distributed. Collaborative.</p>
                <p className="text-xl font-semibold text-gradient">
                  A simple reframing, small is powerful.
                </p>
              </div>
            </div>
          </MagneticElement>
        </div>
      </div>
      
      {/* Floating microscopic elements */}
      <div className="absolute top-1/4 left-10 w-6 h-6 rounded-full bg-secondary-glow/30 animate-float" 
           style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/3 right-16 w-10 h-10 rounded-full bg-accent-glow/25 animate-drift" 
           style={{ animationDelay: '3s' }} />
    </section>
  );
};

export default PhilosophySection;