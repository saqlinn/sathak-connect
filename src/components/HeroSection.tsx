import { Star, Download, Calendar, Monitor, Music, Headphones, ShoppingBag, Trophy } from "lucide-react";

const eventBadges = [
  { icon: Calendar, label: "5 Days" },
  { icon: Monitor, label: "Technical" },
  { icon: Music, label: "Cultural" },
  { icon: Headphones, label: "DJ Night" },
  { icon: ShoppingBag, label: "Bazaar" },
  { icon: Trophy, label: "Grand Finale" }
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-navy">
      {/* Animated background circle */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-navy-light/50 rounded-full blur-3xl translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto py-32">
        {/* Golden Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-gold mb-10 animate-fade-up">
          <Star className="w-5 h-5 text-background fill-background" />
          <span className="text-sm font-bold text-background tracking-wider uppercase">25th Silver Jubilee</span>
          <Star className="w-5 h-5 text-background fill-background" />
        </div>
        
        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 animate-fade-up animation-delay-100 tracking-tight">
          <span className="text-foreground">SATHAK FEST</span>
        </h1>
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 animate-fade-up animation-delay-200">
          <span className="text-gradient-gold">2025</span>
        </h2>
        
        {/* Divider */}
        <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8 animate-fade-up animation-delay-200" />
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-foreground/90 mb-12 animate-fade-up animation-delay-300">
          Hosted by Mohamed Sathak A.J. College of Engineering
        </p>
        
        {/* Event Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10 animate-fade-up animation-delay-400">
          {eventBadges.map((badge, index) => (
            <div key={index} className="pill-badge">
              <badge.icon className="w-5 h-5 text-primary" />
              <span>{badge.label}</span>
            </div>
          ))}
        </div>
        
        {/* Info Banner */}
        <div className="card-premium py-5 px-8 max-w-3xl mx-auto mb-12 animate-fade-up animation-delay-500">
          <p className="text-foreground/80 text-lg">
            Technical • Cultural • DJ Night • Bazaar • Celebrity Performances • Grand Outdoor Stage Event
          </p>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animation-delay-600">
          <a 
            href="#sponsorship" 
            className="btn-primary flex items-center gap-2 group"
          >
            <Star className="w-5 h-5 transition-transform group-hover:rotate-12 fill-current" />
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
          <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
