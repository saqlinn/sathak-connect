import { Users, Package, Mic2, Share2, Calendar } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Massive Youth Engagement",
    description: "Connect with 10,000+ energetic college students and young professionals from across the region."
  },
  {
    icon: Package,
    title: "Product Display Opportunities",
    description: "Showcase your products at our Sathak Bazaar with dedicated stall space and demo zones."
  },
  {
    icon: Mic2,
    title: "Premium Stage Visibility",
    description: "Get announced on the main stage during peak hours with massive audience attention."
  },
  {
    icon: Share2,
    title: "Strong Online Presence",
    description: "Featured in reels, posts, stories, and announcements reaching 1.5 lakh+ impressions."
  },
  {
    icon: Calendar,
    title: "5-Day Continuous Branding",
    description: "Your brand stays visible throughout all 5 days of festivities and events."
  }
];

const WhySponsorSection = () => {
  return (
    <section id="why-sponsor" className="section-padding relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-navy-light/30 rounded-full blur-3xl translate-x-1/2" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">Partner Benefits</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
            Why Brands Should Sponsor
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Join us in creating an unforgettable celebration while maximizing your brand's reach and impact
          </p>
        </div>
        
        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="card-premium p-8 group hover:border-primary/50 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-gold flex items-center justify-center mb-6 group-hover:shadow-gold-lg transition-all duration-500 group-hover:scale-110">
                <benefit.icon className="w-8 h-8 text-background" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySponsorSection;
