import { Check, Crown, Award, Medal, Star } from "lucide-react";

const plans = [
  {
    name: "Silver Sponsor",
    price: "₹25,000",
    icon: Medal,
    popular: false,
    gradient: "bg-gradient-to-br from-silver/20 to-silver/5",
    iconBg: "bg-silver/20",
    iconColor: "text-silver",
    features: [
      "Logo in sponsor acknowledgement page",
      "One sponsor post on social media",
      "Logo on sponsor board at venue",
      "Certificate of appreciation",
      "Brand mention in event newsletter"
    ]
  },
  {
    name: "Gold Sponsor",
    price: "₹50,000",
    icon: Award,
    popular: false,
    gradient: "bg-gradient-to-br from-yellow-500/20 to-yellow-600/5",
    iconBg: "bg-yellow-500/20",
    iconColor: "text-yellow-400",
    features: [
      "Logo on posters & digital banners",
      "One stage announcement",
      "Social media mention & tag",
      "Prominent logo placement",
      "Event day photo opportunity",
      "All Silver tier benefits"
    ]
  },
  {
    name: "Premium Sponsor",
    price: "₹1,00,000+",
    icon: Crown,
    popular: true,
    gradient: "bg-gradient-to-br from-primary/30 to-primary/5",
    iconBg: "bg-gradient-neon",
    iconColor: "text-background",
    features: [
      "Free stall access at Sathak Bazaar",
      "Premium reel collaboration",
      "Stage announcements every day",
      "Logo on all posters & banners",
      "LED screen branding",
      "Outdoor banner placement",
      "Product showcasing allowed",
      "VIP passes for brand representatives",
      "All Gold tier benefits"
    ]
  }
];

const SponsorshipPlans = () => {
  return (
    <section id="sponsorship" className="section-padding bg-gradient-dark relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-x-1/2" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-silver/5 rounded-full blur-3xl -translate-x-1/2" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">Pricing</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-gradient-silver">
            Sponsorship Plans
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Choose the perfect sponsorship tier that aligns with your marketing goals
          </p>
        </div>
        
        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative card-premium p-8 ${plan.gradient} ${
                plan.popular ? 'border-primary/50 scale-105 md:scale-110' : ''
              } transition-all duration-500 hover:border-primary/50`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 px-4 py-1.5 bg-gradient-neon rounded-full shadow-neon">
                    <Star className="w-4 h-4 text-background fill-background" />
                    <span className="text-sm font-bold text-background">Most Popular</span>
                  </div>
                </div>
              )}
              
              {/* Plan Icon */}
              <div className={`w-16 h-16 rounded-2xl ${plan.iconBg} flex items-center justify-center mb-6 mx-auto`}>
                <plan.icon className={`w-8 h-8 ${plan.iconColor}`} />
              </div>
              
              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-center text-foreground mb-2">{plan.name}</h3>
              
              {/* Price */}
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-gradient-neon">{plan.price}</span>
              </div>
              
              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* CTA Button */}
              <a 
                href="#contact"
                className={`block w-full text-center py-4 rounded-full font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'btn-primary' 
                    : 'border border-silver/30 text-foreground hover:bg-silver/10'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
        
        {/* Custom Package Note */}
        <p className="text-center text-muted-foreground mt-12">
          Looking for a custom package? <a href="#contact" className="text-primary hover:underline">Contact us</a> for tailored sponsorship solutions.
        </p>
      </div>
    </section>
  );
};

export default SponsorshipPlans;
