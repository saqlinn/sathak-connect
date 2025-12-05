import { Sparkles, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/70" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-silver/10 rounded-full blur-3xl animate-float" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8 animate-fade-up">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">25th Silver Jubilee Celebration</span>
        </div>
        
        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up animation-delay-100">
          <span className="text-gradient-silver">SATHAK FEST</span>
          <span className="text-gradient-neon"> 2025</span>
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-silver-light mb-4 animate-fade-up animation-delay-200">
          Mohamed Sathak A.J. College of Engineering
        </p>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up animation-delay-300">
          5 Days of Cultural, Technical, DJ Night, Bazaar & Grand Outdoor Finale
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animation-delay-400">
          <a 
            href="#sponsorship" 
            className="btn-primary flex items-center gap-2 group"
          >
            <Sparkles className="w-5 h-5 transition-transform group-hover:rotate-12" />
            Become a Sponsor
          </a>
          <a 
            href="#contact" 
            className="btn-outline flex items-center gap-2 group"
          >
            <Download className="w-5 h-5 transition-transform group-hover:translate-y-1" />
            Download Brochure
          </a>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-silver/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
