import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://thehimalayanpublicschool.com/wp-content/uploads/2022/05/DJI_007.jpg"
          alt="The Himalayan Public School Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/60 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-3 py-1 mb-6 border border-brand-gold/50 rounded-full bg-brand-navy/50 backdrop-blur-sm">
              <span className="text-brand-gold text-xs font-bold tracking-widest uppercase">
                Est. 2005 • Dehradun
              </span>
            </div>
            
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Excellence in the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-200">
                Himalayas
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-xl font-light leading-relaxed">
              Where tradition meets innovation. Cultivating global leaders and critical thinkers in the serene heart of Dehradun.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-brand-gold hover:bg-amber-600 text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2 group shadow-lg shadow-brand-gold/20">
                Admissions Open 2026
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 rounded-lg font-semibold transition-all flex items-center justify-center gap-2">
                <PlayCircle size={20} />
                Virtual Tour
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;