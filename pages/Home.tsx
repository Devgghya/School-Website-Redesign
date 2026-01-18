import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Stats from '../components/Stats';
import NewsEvents from '../components/NewsEvents';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-500">
      <Hero />
      <Features />
      <Stats />
      <NewsEvents />
      
      {/* Testimonial Section Mockup */}
      <section className="py-24 bg-brand-cream border-t border-slate-200">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-serif font-bold text-brand-navy mb-12">Voices of THPS</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-left">
                    <div className="flex text-brand-gold mb-4">★★★★★</div>
                    <p className="text-slate-600 italic mb-6">"The holistic approach at THPS helped my daughter find her confidence not just in academics, but on the stage. Truly a transformative environment."</p>
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-slate-200 rounded-full mr-3"></div>
                        <div>
                            <h4 className="font-bold text-slate-800">Mrs. Sharma</h4>
                            <p className="text-xs text-slate-500">Parent of Class X Student</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-left">
                    <div className="flex text-brand-gold mb-4">★★★★★</div>
                    <p className="text-slate-600 italic mb-6">"From the science labs to the football field, THPS gave me the tools to excel. I'm proud to carry its legacy forward at university."</p>
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-slate-200 rounded-full mr-3"></div>
                        <div>
                            <h4 className="font-bold text-slate-800">Aryan Singh</h4>
                            <p className="text-xs text-slate-500">Alumni, Batch of 2021</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;