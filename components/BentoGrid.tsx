import React from 'react';

const BentoGrid: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">

        {/* Top Section: Text + Market Opportunity */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">

          {/* Left: Value Proposition */}
          <div className="flex flex-col justify-center bg-blue-50/50 rounded-[2rem] p-10 md:p-14 border border-blue-100/50">
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
              <button className="px-8 py-3 rounded-full font-bold border border-slate-300 hover:bg-white transition-all text-slate-600">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right: Market Size Visualization (修改点 1: $325B Market) */}
          <div className="relative rounded-[2rem] overflow-hidden min-h-[400px] group bg-white border border-slate-200 shadow-sm">
            {/* Background Map/Abstract for context */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

            <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8">
              <div className="w-full max-w-sm">
                <h3 className="text-slate-500 font-bold tracking-widest uppercase text-sm mb-2">Global Video Ad Market</h3>
                <div className="flex items-baseline justify-center gap-2 mb-6">
                  <span className="text-6xl font-extrabold text-slate-900">$325B</span>
                  <span className="text-joyx-blue font-bold bg-blue-100 px-2 py-1 rounded text-sm">2028 Forecast</span>
                </div>

                {/* Simplified Trend Chart */}
                <div className="h-32 flex items-end justify-between gap-2 px-4">
                  <div className="w-full bg-slate-100 rounded-t-lg h-[40%] relative group-hover:h-[42%] transition-all"><span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-slate-400">2024</span></div>
                  <div className="w-full bg-slate-200 rounded-t-lg h-[55%] relative group-hover:h-[58%] transition-all"></div>
                  <div className="w-full bg-blue-100 rounded-t-lg h-[75%] relative group-hover:h-[78%] transition-all"></div>
                  <div className="w-full bg-joyx-blue rounded-t-lg h-[100%] relative shadow-lg group-hover:shadow-joyx-blue/50 transition-all">
                    <span className="absolute top-2 left-1/2 -translate-x-1/2 text-white font-bold text-xs">Target</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Tech Moat & Services */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Block 1: Patents (修改点 2: 10+ Patents & Tech Icons) */}
          <div className="bg-slate-900 rounded-[2rem] p-8 flex flex-col justify-between text-white relative overflow-hidden group">
            <div className="relative z-10">
              {/* Replacing Avatars with Tech Icons */}
              <div className="flex gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20"><i className="fas fa-file-contract"></i></div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20"><i className="fas fa-eye"></i></div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20"><i className="fas fa-cloud"></i></div>
              </div>
              <h3 className="text-5xl font-bold mb-2">10+</h3>
              <p className="text-slate-300 font-medium">Global Patents Pending</p>
              <p className="text-xs text-slate-500 mt-2">Video Detection · Object Tracking · Cloud Computing</p>
            </div>
            {/* Hover Effect */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-joyx-blue opacity-10 blur-3xl rounded-full group-hover:opacity-20 transition-opacity"></div>
          </div>

          {/* Block 2: Customization (修改点 4: 定制化方案) */}
          <div className="bg-white rounded-[2rem] p-8 flex flex-col justify-center shadow-sm border border-slate-100 relative overflow-hidden group hover:border-blue-200 transition-colors">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <i className="fas fa-gem text-6xl text-joyx-blue"></i>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Customized Solutions</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              "White-glove" service for top-tier partners. We tailor dynamic billboards for sports & entertainment IPs.
            </p>
            <div className="mt-4 flex items-center gap-2 text-joyx-blue font-bold text-sm cursor-pointer">
              <span>Explore Scenarios</span> <i className="fas fa-arrow-right text-xs"></i>
            </div>
          </div>

          {/* Block 3: 3D Tech (修改点 3: 3D光影渲染 & 逼真度) */}
          <div className="bg-joyx-cyan rounded-[2rem] p-8 flex flex-col justify-center text-white relative overflow-hidden group">
            <div className="mb-4 opacity-90">
              <i className="fas fa-cube text-4xl mb-2"></i>
            </div>
            <h3 className="text-xl font-bold mb-2 leading-tight">3D Lighting & Frame-level Matching</h3>
            <p className="text-white/90 text-sm">
              Unmatched realism. Our engine calculates light & shadow in real-time for seamless "non-intrusive" insertion.
            </p>
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BentoGrid;