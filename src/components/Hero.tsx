import { ArrowRight, Smartphone, Code, Zap } from "lucide-react";
import heroImage from "@/assets/hero-mobile-dev.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 grid-bg opacity-30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <Smartphone className="w-16 h-16 text-primary float" />
      </div>
      <div className="absolute top-32 right-20 opacity-20">
        <Code className="w-12 h-12 text-secondary float" style={{ animationDelay: "2s" }} />
      </div>
      <div className="absolute bottom-32 left-20 opacity-20">
        <Zap className="w-14 h-14 text-primary float" style={{ animationDelay: "4s" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Next-Gen</span>
            <br />
            <span className="text-neon">Mobile Apps</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Transform your ideas into stunning mobile experiences with cutting-edge technology and futuristic design.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="btn-neon flex items-center gap-2">
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="btn-ghost-neon">
              View Our Work
            </button>
          </div>
        </div>

        {/* Hero Image/Visual */}
        <div className="relative max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <div className="relative">
            <img 
              src={heroImage} 
              alt="Futuristic Mobile App Development" 
              className="w-full h-auto rounded-3xl shadow-neon"
            />
            <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-3xl"></div>
          </div>
          
          {/* Floating Stats */}
          <div className="absolute -top-8 -left-8 card-glow p-4 animate-fade-in" style={{ animationDelay: "1s" }}>
            <div className="text-2xl font-bold text-primary">500+</div>
            <div className="text-sm text-muted-foreground">Apps Built</div>
          </div>
          
          <div className="absolute -bottom-8 -right-8 card-glow p-4 animate-fade-in" style={{ animationDelay: "1.2s" }}>
            <div className="text-2xl font-bold text-secondary">98%</div>
            <div className="text-sm text-muted-foreground">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;