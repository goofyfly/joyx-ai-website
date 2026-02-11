import React from 'react';

const WhyJoyx: React.FC = () => {
  const cards = [
    {
      title: "Maximize Inventory",
      icon: "fa-chart-line",
      description: "Traditional ads fight for the 4% break time. We activate the 96% of non-ad video time without interrupting the story.",
      highlight: "Unlock 96% More Time"
    },
    {
      title: "Smart Insertion",
      icon: "fa-brain",
      description: "Automated by AI. From 2D Logos to 3D virtual objects, embedded in real-time with frame-level lighting matching.",
      highlight: "CNN + Spatial Computing"
    },
    {
      title: "Premium Experience",
      icon: "fa-eye",
      description: "Soft marketing that respects the viewer. No hard cuts, no skip buttons. Reach high-value ad-free subscribers.",
      highlight: "Non-Intrusive"
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-sm font-bold tracking-widest text-joyx-blue uppercase mb-2">Why JOYX Wins</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Reinventing Video Monetization</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 border border-slate-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-joyx-blue text-2xl mb-6 group-hover:bg-joyx-blue group-hover:text-white transition-colors duration-300">
                <i className={`fas ${card.icon}`}></i>
              </div>
              
              <h4 className="text-xl font-bold text-slate-900 mb-4">{card.title}</h4>
              <p className="text-slate-600 leading-relaxed mb-6">
                {card.description}
              </p>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-sm font-semibold text-joyx-cyan">{card.highlight}</span>
                <i className="fas fa-arrow-right text-slate-300 group-hover:text-joyx-blue group-hover:translate-x-1 transition-all"></i>
              </div>

              {/* Decorative gradient blob */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-100 to-transparent rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500 ease-out"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoyx;