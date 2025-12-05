import { Users, Wifi, CalendarDays, Target } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "10,000+",
    label: "Expected Attendees",
    description: "Students, faculty, and visitors"
  },
  {
    icon: Wifi,
    value: "1,50,000+",
    label: "Online Reach",
    description: "Social media impressions"
  },
  {
    icon: Target,
    value: "18-25",
    label: "Age Group",
    description: "Primary target demographic"
  },
  {
    icon: CalendarDays,
    value: "5 Days",
    label: "Event Duration",
    description: "Nonstop visibility"
  }
];

const AudienceSection = () => {
  return (
    <section id="audience" className="section-padding bg-gradient-dark relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping" />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-silver rounded-full animate-ping animation-delay-300" />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-primary/50 rounded-full animate-ping animation-delay-500" />
        <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-silver/50 rounded-full animate-ping animation-delay-200" />
      </div>
      
      {/* Background gradient orbs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-silver/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">Our Reach</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-gradient-silver">
            Audience & Reach
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Connect with thousands of engaged young consumers through our multi-platform presence
          </p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="card-premium p-8 text-center group hover:border-primary/50 transition-all duration-500"
            >
              {/* Icon */}
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-neon flex items-center justify-center group-hover:shadow-neon-lg transition-all duration-500 group-hover:scale-110">
                <stat.icon className="w-10 h-10 text-background" />
              </div>
              
              {/* Value */}
              <div className="text-4xl md:text-5xl font-bold text-gradient-neon mb-2">
                {stat.value}
              </div>
              
              {/* Label */}
              <h3 className="text-lg font-semibold text-foreground mb-2">{stat.label}</h3>
              
              {/* Description */}
              <p className="text-muted-foreground text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
        
        {/* Additional Info */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="card-premium p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gradient-silver mb-4">Demographics</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    College students (Engineering, Arts, Science)
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    Young professionals aged 18-25
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    Tech-savvy and trend-conscious
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    High purchasing power segment
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gradient-silver mb-4">Platform Reach</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-silver" />
                    Instagram: 50,000+ followers
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-silver" />
                    YouTube: Event documentation
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-silver" />
                    WhatsApp: Direct community reach
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-2 h-2 rounded-full bg-silver" />
                    Local media coverage
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
