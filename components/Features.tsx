import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Trophy, Users, Globe, Leaf, Monitor } from 'lucide-react';

const FeatureCard: React.FC<{
  title: string;
  desc: string;
  icon: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ title, desc, icon, className = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className={`p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow group ${className}`}
  >
    <div className="w-12 h-12 rounded-lg bg-brand-cream text-brand-navy flex items-center justify-center mb-6 group-hover:bg-brand-navy group-hover:text-brand-gold transition-colors duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-serif font-bold text-slate-800 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{desc}</p>
  </motion.div>
);

const Features: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-cream">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-gold font-semibold uppercase tracking-wider text-sm">Why Choose THPS?</span>
          <h2 className="text-4xl font-serif font-bold text-brand-navy mt-3 mb-6">
            Beyond Traditional Learning
          </h2>
          <p className="text-slate-600 text-lg">
            We blend the academic rigor of traditional Indian education with modern pedagogical approaches to nurture holistic growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Bento Grid Layout */}
          <FeatureCard
            title="Academic Excellence"
            desc="Consistently producing district toppers with a curriculum designed for competitive success."
            icon={<Trophy size={24} />}
            className="md:col-span-2 bg-gradient-to-br from-white to-slate-50"
            delay={0.1}
          />
          <FeatureCard
            title="Global Perspective"
            desc="International exchange programs and a curriculum that builds global citizenship."
            icon={<Globe size={24} />}
            delay={0.2}
          />
          <FeatureCard
            title="Holistic Growth"
            desc="Sports, arts, and leadership programs integrated into the daily schedule."
            icon={<Users size={24} />}
            delay={0.3}
          />
          <FeatureCard
            title="Eco-Friendly Campus"
            desc="Nestled in nature, promoting sustainability and environmental awareness."
            icon={<Leaf size={24} />}
            delay={0.4}
          />
          <FeatureCard
            title="Digital Innovation"
            desc="Smart classrooms and coding labs preparing students for the future."
            icon={<Monitor size={24} />}
            className="bg-brand-navy text-white md:col-span-1"
            delay={0.5}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;