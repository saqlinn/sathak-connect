import { MapPin, Phone, Mail, User, Building, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-dark relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-silver/5 rounded-full blur-3xl translate-x-1/2" />
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">Get In Touch</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-6 text-gradient-silver">
            Contact Details
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Reach out to us for sponsorship inquiries, stall bookings, or any questions
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {/* Event Coordinator */}
            <div className="card-premium p-6 flex items-start gap-4 group hover:border-primary/50 transition-all duration-500">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-gradient-neon group-hover:shadow-neon transition-all duration-500">
                <User className="w-7 h-7 text-primary group-hover:text-background transition-colors" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Event Coordinator</h3>
                <p className="text-muted-foreground">Mr. Rajesh Kumar</p>
                <p className="text-muted-foreground text-sm">Sponsorship & Partnerships Lead</p>
              </div>
            </div>
            
            {/* Phone */}
            <div className="card-premium p-6 flex items-start gap-4 group hover:border-primary/50 transition-all duration-500">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-gradient-neon group-hover:shadow-neon transition-all duration-500">
                <Phone className="w-7 h-7 text-primary group-hover:text-background transition-colors" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                <a href="tel:+919876543210" className="text-primary hover:underline">+91 98765 43210</a>
                <p className="text-muted-foreground text-sm">Available 9 AM - 6 PM IST</p>
              </div>
            </div>
            
            {/* Email */}
            <div className="card-premium p-6 flex items-start gap-4 group hover:border-primary/50 transition-all duration-500">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-gradient-neon group-hover:shadow-neon transition-all duration-500">
                <Mail className="w-7 h-7 text-primary group-hover:text-background transition-colors" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Email</h3>
                <a href="mailto:sponsorship@sathakfest.com" className="text-primary hover:underline">sponsorship@sathakfest.com</a>
                <p className="text-muted-foreground text-sm">We respond within 24 hours</p>
              </div>
            </div>
          </div>
          
          {/* Address & Map Card */}
          <div className="card-premium p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-neon flex items-center justify-center shadow-neon">
                <Building className="w-7 h-7 text-background" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">College Address</h3>
                <p className="text-muted-foreground text-sm">Venue Location</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-foreground font-medium">Mohamed Sathak A.J. College of Engineering</p>
                  <p className="text-muted-foreground">Siruseri IT Park, Rajiv Gandhi Salai (OMR)</p>
                  <p className="text-muted-foreground">Chennai - 603 103, Tamil Nadu, India</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-foreground font-medium">Event Dates</p>
                  <p className="text-muted-foreground">February 2025 (Exact dates TBA)</p>
                </div>
              </div>
            </div>
            
            {/* Map placeholder */}
            <div className="aspect-video rounded-xl bg-muted/50 border border-border/50 flex items-center justify-center overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.9989012345!2d80.2234567!3d12.8234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDQ5JzI0LjQiTiA4MMKwMTMnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
