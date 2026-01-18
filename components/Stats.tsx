import React from 'react';

const StatItem: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="text-center p-6 border-r border-white/10 last:border-0">
    <div className="text-4xl md:text-5xl font-serif font-bold text-brand-gold mb-2">{value}</div>
    <div className="text-sm md:text-base text-slate-300 font-medium tracking-wide uppercase">{label}</div>
  </div>
);

const Stats: React.FC = () => {
  return (
    <section className="bg-brand-navy py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fbbf24 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatItem value="20+" label="Years of Legacy" />
          <StatItem value="100%" label="Board Pass Rate" />
          <StatItem value="15:1" label="Student-Teacher Ratio" />
          <StatItem value="5000+" label="Alumni Network" />
        </div>
      </div>
    </section>
  );
};

export default Stats;