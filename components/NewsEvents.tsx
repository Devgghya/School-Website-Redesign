import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const NewsCard: React.FC<{
  category: string;
  date: string;
  title: string;
  image: string;
}> = ({ category, date, title, image }) => (
  <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-slate-100 flex flex-col h-full">
    <div className="h-48 overflow-hidden relative">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-navy uppercase">
        {category}
      </div>
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <div className="flex items-center text-slate-400 text-sm mb-3">
        <Calendar size={14} className="mr-2" />
        {date}
      </div>
      <h3 className="font-serif font-bold text-lg text-slate-800 mb-4 group-hover:text-brand-gold transition-colors">
        {title}
      </h3>
      <div className="mt-auto">
        <button className="text-brand-navy font-semibold text-sm flex items-center group/btn">
          Read More 
          <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  </div>
);

const NewsEvents: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <span className="text-brand-gold font-semibold uppercase tracking-wider text-sm">Happenings</span>
            <h2 className="text-4xl font-serif font-bold text-brand-navy mt-2">Campus Updates</h2>
          </div>
          <a href="#" className="hidden md:flex items-center text-slate-600 hover:text-brand-navy font-medium">
            View Archive <ArrowRight size={16} className="ml-2" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <NewsCard
            category="Achievement"
            date="Oct 15, 2026"
            title="THPS Debate Team wins Regional Championship"
            image="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1000&auto=format&fit=crop"
          />
          <NewsCard
            category="Event"
            date="Nov 02, 2026"
            title="Annual Sports Day: Fostering Team Spirit"
            image="https://images.unsplash.com/photo-1561089489-f13d5e730d72?q=80&w=1000&auto=format&fit=crop"
          />
          <NewsCard
            category="Academic"
            date="Nov 10, 2026"
            title="Science Exhibition showcases Student Innovation"
            image="https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=1000&auto=format&fit=crop"
          />
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <a href="#" className="text-brand-navy font-semibold flex justify-center items-center">
             View All Updates <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsEvents;