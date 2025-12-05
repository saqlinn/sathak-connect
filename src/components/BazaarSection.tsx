import { Store, Bike, Smartphone, Shirt, UtensilsCrossed, Rocket, Users, Zap } from "lucide-react";

const stallCategories = [
  { icon: Bike, name: "Bike Brands" },
  { icon: Smartphone, name: "Tech Products" },
  { icon: Shirt, name: "Fashion" },
  { icon: UtensilsCrossed, name: "Food & Beverages" },
  { icon: Rocket, name: "Startups" },
  { icon: Store, name: "Retail" }
];

const benefits = [
  "Demo zone for product showcasing",
  "Sampling opportunities",
  "Test rides & trials",
  "High footfall exposure",
  "Direct customer engagement",
  "5-day continuous presence"
];

const BazaarSection = () => {
  return (
    <section id="bazaar" className="section-padding relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-silver/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-medium tracking-wider uppercase text-sm">Exhibition Zone</span>
            <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-gradient-silver">
              Sathak Bazaar
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              A 5-day exhibition extravaganza featuring 50+ stalls where brands can directly 
              engage with thousands of young consumers. Perfect for product launches, brand 
              activations, and customer engagement activities.
            </p>
            
            {/* Benefits Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>
            
            {/* CTA */}
            <a href="#contact" className="btn-primary inline-flex items-center gap-2">
              <Store className="w-5 h-5" />
              Book Your Stall
            </a>
          </div>
          
          {/* Categories Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {stallCategories.map((category, index) => (
              <div 
                key={index}
                className="card-premium p-6 text-center group hover:border-primary/50 transition-all duration-500"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-gradient-neon group-hover:shadow-neon transition-all duration-500">
                  <category.icon className="w-7 h-7 text-primary group-hover:text-background transition-colors" />
                </div>
                <h3 className="font-semibold text-foreground">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
        
        {/* Stats Bar */}
        <div className="mt-16 card-premium p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Store className="w-6 h-6 text-primary" />
                <span className="text-3xl font-bold text-gradient-neon">50+</span>
              </div>
              <p className="text-muted-foreground text-sm">Exhibition Stalls</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="w-6 h-6 text-primary" />
                <span className="text-3xl font-bold text-gradient-neon">10K+</span>
              </div>
              <p className="text-muted-foreground text-sm">Daily Visitors</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Zap className="w-6 h-6 text-primary" />
                <span className="text-3xl font-bold text-gradient-neon">5</span>
              </div>
              <p className="text-muted-foreground text-sm">Days Duration</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Rocket className="w-6 h-6 text-primary" />
                <span className="text-3xl font-bold text-gradient-neon">100%</span>
              </div>
              <p className="text-muted-foreground text-sm">Engagement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BazaarSection;
