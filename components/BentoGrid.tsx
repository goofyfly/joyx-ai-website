import React from 'react';

const BentoGrid: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">

        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">

          {/* Left: Value Proposition */}
          <div className="flex flex-col justify-center bg-blue-50/50 rounded-[2rem] p-10 md:p-14 border border-blue-100/50">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
              The Infrastructure for <span className="text-joyx-blue border-b-4 border-joyx-cyan/30">Native Ads.</span>
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

          {/* Right: Market Size (修改点1: 恢复真人办公室图 + 悬浮数据卡片) */}
          <div className="relative rounded-[2rem] overflow-hidden min-h-[400px] group shadow-sm">
            {/* 恢复第一版的真实团队照片 */}
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop"
              alt="Team Strategy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* 悬浮数据卡片：展示 $325B 市场规模 */}
            <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/20 max-w-xs animate-fade-up">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">Global Video Ad Market</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-slate-900">$325B</span>
              </div>
              <div className="mt-2 flex items-center gap-2 text-sm font-medium text-joyx-blue bg-blue-50 px-2 py-1 rounded w-fit">
                <i className="fas fa-chart-line"></i>
                <span>2028 Forecast</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Block 1: Patents (10+ Icons) */}
          <div className="bg-slate-900 rounded-[2rem] p-8 flex flex-col justify-between text-white relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20"><i className="fas fa-file-contract"></i></div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20"><i className="fas fa-eye"></i></div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20"><i className="fas fa-cloud"></i></div>
              </div>
              <h3 className="text-5xl font-bold mb-2">10+</h3>
              <p className="text-slate-300 font-medium">Global Patents Pending</p>
              <p className="text-xs text-slate-500 mt-2 opacity-60">Computer Vision · 3D Rendering · Cloud</p>
            </div>
          </div>

          {/* Block 2: Customization (修改点2: 去掉按钮，极致精简) */}
          <div className="bg-white rounded-[2rem] p-8 flex flex-col justify-center shadow-sm border border-slate-100 group hover:border-blue-200 transition-colors">
            <div className="mb-4">
              <span className="w-12 h-12 flex items-center justify-center rounded-2xl bg-blue-50 text-joyx-blue text-2xl">
                <i className="fas fa-gem"></i>
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">White-Glove Service</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Tailored dynamic insertion solutions designed specifically for top-tier sports & entertainment IPs.
            </p>
          </div>

          {/* Block 3: 3D Tech (修改点3: 重新设计，极简且硬核) */}
          <div className="bg-gradient-to-br from-joyx-cyan to-blue-500 rounded-[2rem] p-8 flex flex-col justify-center text-white relative overflow-hidden">
            {/* 极简图标 */}
            <i className="fas fa-cube text-4xl mb-4 opacity-80"></i>

            <h3 className="text-xl font-bold mb-2">Frame-level Matching</h3>
            <p className="text-white/90 text-sm leading-relaxed opacity-90">
              Real-time light & shadow calculation. <br />
              <span className="font-semibold text-white">Indistinguishable from reality.</span>
            </p>

            {/* 装饰：仅保留右上角一个微妙的光晕，去掉复杂纹理 */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 blur-[50px] rounded-full pointer-events-none"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BentoGrid;