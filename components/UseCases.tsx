import React from 'react';

const UseCases: React.FC = () => {
  return (
    // 保持高饱和度“电光蓝”背景
    <section className="py-24 bg-[#0033FF] text-white">
      <div className="container mx-auto px-6">

        {/* Header: 修改为居中布局，去掉"Success Stories" */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            Built for <span className="text-white">High-Value Content.</span>
          </h2>
          <p className="text-blue-100 text-lg leading-relaxed font-medium max-w-2xl mx-auto">
            Seamless integration for top-tier IPs, from live sports to premium streaming.
          </p>
        </div>

        {/* Masonry Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">

          {/* Card 1: Sports (无变动) */}
          <div className="md:col-span-2 relative group rounded-[2rem] overflow-hidden cursor-pointer shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=2069&auto=format&fit=crop"
              alt="NBA Arena"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded mb-2 inline-block">LIVE BROADCAST</span>
              <h3 className="text-2xl font-bold mb-1">Sports Events</h3>
              <p className="text-sm opacity-90 text-blue-100">Dynamic court-side & perimeter replacement.</p>
            </div>
          </div>

          {/* Card 2: In-Show Product (更换图片：专业影视剪辑工作室) */}
          <div className="md:row-span-2 relative group rounded-[2rem] overflow-hidden cursor-pointer bg-slate-900 shadow-2xl">
            {/* 新图：包含专业监视器和调色台的暗室环境 */}
            <img
              src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop"
              alt="Professional Film Editing Studio"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 pr-6">
              <h3 className="text-2xl font-bold mb-2">In-Show Product</h3>
              <p className="text-sm font-medium opacity-90 text-blue-100 leading-snug">
                Post-production insertion. <br />
                Zero reshoots.
              </p>
            </div>
          </div>

          {/* Card 3: Premium Drama (更换图片：家庭客厅观影体验) */}
          <div className="relative group rounded-[2rem] overflow-hidden cursor-pointer bg-blue-900 shadow-xl">
            {/* 新图：昏暗舒适的客厅，大屏幕电视，沉浸式观影 */}
            <img
              src="https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=2000&auto=format&fit=crop"
              alt="Cozy Living Room Watching Movie"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

            <div className="absolute bottom-8 left-8 pr-4">
              <h3 className="text-xl font-bold mb-1">Premium Drama</h3>
              <p className="text-xs font-medium opacity-90 text-blue-100">
                Native integration into top-tier narrative arcs (e.g., Disney+).
              </p>
            </div>
          </div>

          {/* Card 4: Campaign Insights (无变动) */}
          <div className="relative group rounded-[2rem] overflow-hidden cursor-pointer bg-cyan-900 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
              alt="Data Report"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-blue-900/80 mix-blend-multiply"></div>
            <div className="absolute bottom-8 left-8 pr-4">
              <h3 className="text-xl font-bold mb-1">Campaign Insights</h3>
              <p className="text-xs font-medium opacity-90 text-blue-100 leading-snug">
                Personalized attribution & ROI analysis.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default UseCases;