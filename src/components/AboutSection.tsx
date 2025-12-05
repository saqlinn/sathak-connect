import { Calendar, Users, Wifi, Music, ShoppingBag, Trophy } from "lucide-react";

const highlights = [
  {
    icon: Calendar,
    title: "5 Days",
    description: "Non-stop entertainment"
  },
  {
    icon: Music,
    title: "DJ Night",
    description: "Epic music experience"
  },
  {
    icon: ShoppingBag,
    title: "Sathak Bazaar",
    description: "50+ exhibition stalls"
  },
  {
    icon: Trophy,
    title: "Competitions",
    description: "Cultural & Technical"
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gradient-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">About The Event</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
            The Biggest College Fest
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Celebrating 25 years of excellence, SATHAK FEST 2025 brings together the brightest minds 
            for a spectacular 5-day celebration featuring cultural performances, technical competitions, 
            DJ Night extravaganza, Sathak Bazaar with 50+ stalls, and a grand outdoor stage finale.
          </p>
        </div>
        
        {/* Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="card-premium p-6 text-center group hover:border-primary/50 transition-all duration-500"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:shadow-gold transition-all duration-500">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>
        
        {/* Stats */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="card-premium p-8 flex items-center gap-6 group hover:border-primary/50 transition-all duration-500">
            <div className="w-20 h-20 rounded-2xl bg-gradient-gold flex items-center justify-center shrink-0 group-hover:shadow-gold-lg transition-all duration-500">
              <Users className="w-10 h-10 text-background" />
            </div>
            <div>
              <div className="text-4xl font-bold text-gradient-gold mb-1">10,000+</div>
              <p className="text-muted-foreground">Expected Footfall</p>
            </div>
          </div>
          
          <div className="card-premium p-8 flex items-center gap-6 group hover:border-primary/50 transition-all duration-500">
            <div className="w-20 h-20 rounded-2xl bg-gradient-gold flex items-center justify-center shrink-0 group-hover:shadow-gold-lg transition-all duration-500">
              <Wifi className="w-10 h-10 text-background" />
            </div>
            <div>
              <div className="text-4xl font-bold text-gradient-gold mb-1">1,50,000+</div>
              <p className="text-muted-foreground">Digital Impressions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
