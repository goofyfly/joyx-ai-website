import React from 'react';

const BentoGrid: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">

        {/* Top Section: Text + Human Element */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">

          {/* Left: Value Proposition */}
          <div className="flex flex-col justify-center bg-blue-50/50 rounded-[2.5rem] p-10 md:p-14">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
              Fueling Growth for the <span className="text-joyx-blue border-b-4 border-joyx-cyan/30">Video Age.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              We craft impactful ad inventory through proprietary spatial computing technology, helping brands unlock the 96% of narrative time.
            </p>
            <div className="flex gap-4">
              <button className="bg-joyx-blue text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-blue-700 transition-all">
                Get Started
              </button>
              <button className="px-8 py-3 rounded-full font-bold border border-slate-300 hover:bg-white transition-all">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right: Real Human + Data Overlay (The "Real Business" Look) */}
          <div className="relative rounded-[2.5rem] overflow-hidden min-h-[400px] group">
            {/* Real human image, not abstract 3D */}
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop"
              alt="Team working on analytics"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Floating Data Card - Mimicking the reference */}
            <div className="absolute bottom-8 right-8 bg-white p-6 rounded-2xl shadow-2xl max-w-xs animate-fade-up">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold text-slate-400 uppercase">Rev. Uplift</span>
                <span className="text-xs text-green-500 font-bold">+24%</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-slate-900">$15,560</span>
              </div>
              {/* Simple CSS Chart Line */}
              <div className="mt-4 h-10 flex items-end gap-1">
                <div className="w-1/5 h-[40%] bg-blue-100 rounded-t-sm"></div>
                <div className="w-1/5 h-[60%] bg-blue-200 rounded-t-sm"></div>
                <div className="w-1/5 h-[45%] bg-blue-100 rounded-t-sm"></div>
                <div className="w-1/5 h-[80%] bg-joyx-blue rounded-t-sm relative">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded">Now</div>
                </div>
                <div className="w-1/5 h-[30%] bg-blue-50 rounded-t-sm"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Hard Data Blocks (Solid Colors) */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Dark Block - High Contrast */}
          <div className="bg-slate-900 rounded-[2rem] p-8 flex flex-col justify-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex -space-x-4 mb-4">
                <img className="w-10 h-10 rounded-full border-2 border-slate-900" src="https://i.pravatar.cc/100?img=1" alt="Client" />
                <img className="w-10 h-10 rounded-full border-2 border-slate-900" src="https://i.pravatar.cc/100?img=3" alt="Client" />
                <img className="w-10 h-10 rounded-full border-2 border-slate-900" src="https://i.pravatar.cc/100?img=8" alt="Client" />
              </div>
              <h3 className="text-4xl font-bold mb-1">12+</h3>
              <p className="text-slate-400">Global Patents Pending</p>
            </div>
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-joyx-blue opacity-20 blur-3xl rounded-full"></div>
          </div>

          {/* White Block - Clean Stat */}
          <div className="bg-white rounded-[2rem] p-8 flex flex-col justify-center shadow-sm border border-slate-100">
            <h3 className="text-4xl font-bold text-slate-900 mb-1">200%</h3>
            <p className="text-slate-500 font-medium">YoY Revenue Growth Forecast</p>
          </div>

          {/* Brand Color Block - Tech Focus */}
          <div className="bg-joyx-cyan rounded-[2rem] p-8 flex flex-col justify-center text-white relative overflow-hidden">
            <i className="fas fa-layer-group text-5xl mb-4 opacity-80"></i>
            <h3 className="text-3xl font-bold">100ms</h3>
            <p className="opacity-90">Real-time Rendering Latency</p>
            <i className="fas fa-arrow-right absolute top-8 right-8 opacity-50"></i>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BentoGrid;