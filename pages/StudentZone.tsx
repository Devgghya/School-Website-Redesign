import React from 'react';
import { FileText, Calendar, Award, Book, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const PortalCard: React.FC<{ title: string; icon: React.ReactNode; desc: string }> = ({ title, icon, desc }) => (
  <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all cursor-pointer group">
    <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center text-brand-navy mb-4 group-hover:bg-brand-navy group-hover:text-white transition-colors">
      {icon}
    </div>
    <h3 className="font-bold text-lg text-slate-800 mb-2">{title}</h3>
    <p className="text-sm text-slate-500">{desc}</p>
  </div>
);

const StudentZone: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-brand-navy mb-4">Student Zone</h1>
          <p className="text-slate-600">Access resources, results, and academic schedules.</p>
        </div>

        {/* Login Area Mockup */}
        <div className="bg-brand-navy rounded-3xl p-8 md:p-12 text-white mb-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
             <div className="absolute inset-0 bg-brand-gold/10" style={{ clipPath: 'circle(50% at 100% 0)' }}></div>
             <div className="relative z-10 md:w-1/2">
                <h2 className="text-2xl font-serif font-bold mb-4">Secure Parent & Student Portal</h2>
                <p className="text-slate-300 mb-6">Log in to view attendance, fee status, and personalized progress reports.</p>
             </div>
             <div className="relative z-10 bg-white/10 backdrop-blur-md p-6 rounded-xl w-full md:w-1/3 border border-white/20">
                <div className="flex items-center gap-3 text-sm font-medium mb-4">
                    <Lock size={16} className="text-brand-gold" /> Secure Login
                </div>
                <input type="text" placeholder="Admission Number" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-white/50 mb-3 focus:outline-none focus:border-brand-gold" />
                <input type="password" placeholder="Password" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-white/50 mb-4 focus:outline-none focus:border-brand-gold" />
                <button className="w-full bg-brand-gold hover:bg-amber-600 py-2 rounded-lg font-semibold transition-colors">Access Dashboard</button>
             </div>
        </div>

        {/* Public Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <PortalCard 
            title="Board Results" 
            icon={<Award size={24} />} 
            desc="View CBSE Class X and XII results archives." 
          />
          <PortalCard 
            title="Date Sheets" 
            icon={<Calendar size={24} />} 
            desc="Download upcoming exam schedules." 
          />
          <PortalCard 
            title="Syllabus" 
            icon={<Book size={24} />} 
            desc="Curriculum breakdown for the current academic year." 
          />
          <PortalCard 
            title="Forms & Downloads" 
            icon={<FileText size={24} />} 
            desc="Leave applications, medical forms, and circulars." 
          />
        </div>

        <div className="mt-12 text-center">
            <Link to="/" className="text-brand-navy font-medium hover:underline">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default StudentZone;