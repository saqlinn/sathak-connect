import { Mail, Phone, Clock, Star } from "lucide-react";

const CTASection = () => {
  return (
    <section id="cta" className="section-padding relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Limited Sponsor Slots Available</span>
          </div>
          
          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">Partner</span>
            <span className="text-gradient-gold"> With Us</span>
          </h2>
          
          {/* Description */}
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Be part of the biggest college celebration of the year. 
            First come, first served – secure your spot now!
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a 
              href="mailto:sponsorship@sathakfest.com" 
              className="btn-primary flex items-center gap-3 group w-full sm:w-auto justify-center"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Send Email
            </a>
            <a 
              href="tel:+916385238788" 
              className="btn-outline flex items-center gap-3 group w-full sm:w-auto justify-center"
            >
              <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Call Now
            </a>
          </div>
          
          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-muted-foreground text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              Quick Response
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-primary fill-primary" />
              Flexible Packages
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              Professional Support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
