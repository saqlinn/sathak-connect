import { Star, Instagram, Youtube, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold">
              <Star className="w-5 h-5 text-background fill-background" />
            </div>
            <div>
              <h3 className="font-bold text-foreground">SATHAK FEST 2025</h3>
              <p className="text-xs text-primary">25th Silver Jubilee Celebration</p>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
            >
              <Youtube className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
          
          {/* Copyright */}
          <p className="text-muted-foreground text-sm text-center md:text-right">
            © 2025 Mohamed Sathak A.J. College of Engineering. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
