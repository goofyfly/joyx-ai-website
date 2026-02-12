import React from 'react';

const WhyJoyx: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">

        {/* Header: 左对齐，更具杂志感 */}
        <div className="mb-16 max-w-2xl">
          <span className="text-joyx-blue font-bold tracking-widest uppercase text-sm mb-3 block">Why JOYX Wins</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Reinventing Video Monetization <br />
            <span className="text-slate-400">with Native Intelligence.</span>
          </h2>
        </div>

        {/* Cards Layout */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="group relative p-10 rounded-[2rem] border border-slate-200 bg-white hover:border-joyx-blue/50 hover:shadow-2xl hover:shadow-joyx-blue/10 transition-all duration-300 flex flex-col h-full overflow-hidden">
            {/* Big Index Number (Watermark style) */}
            <div className="text-8xl font-extrabold text-slate-50 absolute -right-4 -top-6 group-hover:text-blue-50/80 transition-colors select-none">
              01
            </div>

            <div className="relative z-10 mt-4">
              <div className="w-12 h-12 mb-6 rounded-xl bg-blue-50 flex items-center justify-center text-joyx-blue text-xl">
                <i className="fas fa-chart-pie"></i> {/* Keep icon but make it subtle part of UI */}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-joyx-blue transition-colors">Maximize Inventory</h3>
              <p className="text-slate-500 leading-relaxed mb-8">
                Traditional ads fight for the 4% break time. We activate the <span className="font-bold text-slate-700">96% of narrative time</span> without interrupting the story.
              </p>
            </div>

            {/* Decorative Gradient Blob (Bottom Right) */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-joyx-blue to-cyan-400 opacity-0 group-hover:opacity-10 blur-2xl transition-opacity"></div>
          </div>

          {/* Card 2 */}
          <div className="group relative p-10 rounded-[2rem] border border-slate-200 bg-white hover:border-joyx-blue/50 hover:shadow-2xl hover:shadow-joyx-blue/10 transition-all duration-300 flex flex-col h-full overflow-hidden">
            <div className="text-8xl font-extrabold text-slate-50 absolute -right-4 -top-6 group-hover:text-blue-50/80 transition-colors select-none">
              02
            </div>

            <div className="relative z-10 mt-4">
              <div className="w-12 h-12 mb-6 rounded-xl bg-cyan-50 flex items-center justify-center text-joyx-cyan text-xl">
                <i className="fas fa-brain"></i>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-joyx-cyan transition-colors">Computer Vision</h3>
              <p className="text-slate-500 leading-relaxed mb-8">
                Not just stickers. Our CNN engine analyzes depth, lighting, and camera movement to render objects that <span className="font-bold text-slate-700">physically belong</span>.
              </p>
            </div>

            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-joyx-cyan to-blue-400 opacity-0 group-hover:opacity-10 blur-2xl transition-opacity"></div>
          </div>

          {/* Card 3 */}
          <div className="group relative p-10 rounded-[2rem] border border-slate-200 bg-white hover:border-joyx-blue/50 hover:shadow-2xl hover:shadow-joyx-blue/10 transition-all duration-300 flex flex-col h-full overflow-hidden">
            <div className="text-8xl font-extrabold text-slate-50 absolute -right-4 -top-6 group-hover:text-blue-50/80 transition-colors select-none">
              03
            </div>

            <div className="relative z-10 mt-4">
              <div className="w-12 h-12 mb-6 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 text-xl">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">Brand Safety</h3>
              <p className="text-slate-500 leading-relaxed mb-8">
                Protect viewer experience. No hard cuts, no skip buttons. Reach high-value <span className="font-bold text-slate-700">ad-free subscribers</span> natively.
              </p>
            </div>

            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-10 blur-2xl transition-opacity"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyJoyx;