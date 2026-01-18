import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
               <img 
                 src={`${import.meta.env.BASE_URL}e07adf3b-ca22-4d24-9eb1-63504724b6e3.png`}
                 alt="THPS Logo" 
                 className="h-12 w-auto rounded-xl" 
               />
               <div className="flex flex-col">
                <span className="font-serif font-bold text-xl text-white leading-none">The Himalayan</span>
                <span className="text-[10px] uppercase tracking-widest text-brand-gold">Public School</span>
                <span className="text-[10px] font-serif text-slate-300">Learn to Serve</span>
               </div>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Nurturing minds and building character since 2005. A legacy of excellence in the heart of Dehradun.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/TheHimalayanPublicSchool/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://www.youtube.com/@thehimalayanpublicschool" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-brand-gold transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Admissions</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Faculty</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Student Zone */}
          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-6">Student Zone</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Student Portal</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Exam Datesheets</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Results</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Holiday Homework</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">School Calendar</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="text-brand-gold mr-3 mt-1 shrink-0" />
                <span>Chander Vihar, Patel Nagar Thana Road,<br />Kargi, P.O. Banjarawala,<br />Dehradun, Uttarakhand - 248001</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-brand-gold mr-3 shrink-0" />
                <span>+91 75056 74954, 0135 4518193</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-brand-gold mr-3 shrink-0" />
                <span className="break-all">thehimalayanpublicschool@yahoo.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; 2026 The Himalayan Public School. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;