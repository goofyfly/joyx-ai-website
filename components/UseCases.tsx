import React from 'react';

const UseCases: React.FC = () => {
  return (
    // 保持高饱和度“电光蓝”背景，维持品牌冲击力
    <section className="py-24 bg-[#0033FF] text-white">
      <div className="container mx-auto px-6">

        {/* Header: 回归“High-Value”商业定位 */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-3xl">
            <span className="text-blue-200 font-bold tracking-wider uppercase text-sm mb-2 block">Success Stories</span>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              Built for <br />
              <span className="text-white">High-Value Content.</span>
            </h2>
          </div>
          <div className="max-w-xs">
            <p className="text-blue-100 text-lg leading-relaxed font-medium">
              Seamless integration for top-tier IPs, from live sports to premium streaming.
            </p>
          </div>
        </div>

        {/* Masonry Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">

          {/* Card 1: Sports (横跨两列 - 维持原图，因为它很完美) */}
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

          {/* Card 2: In-Show Product (竖跨两行 - 换成“影视制作工作室”图) */}
          <div className="md:row-span-2 relative group rounded-[2rem] overflow-hidden cursor-pointer bg-slate-900 shadow-2xl">
            {/* 新图：专业的影视后期/剪辑室，体现“Post-production”专业度 */}
            <img
              src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop"
              alt="Film Production Studio"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 pr-6">
              <h3 className="text-2xl font-bold mb-2">In-Show Product</h3>
              {/* 极简文案：只讲核心 */}
              <p className="text-sm font-medium opacity-90 text-blue-100 leading-snug">
                Post-production insertion. <br />
                Zero reshoots.
              </p>
            </div>
          </div>

          {/* Card 3: Premium Drama (换成“家庭电视观影”图) */}
          <div className="relative group rounded-[2rem] overflow-hidden cursor-pointer bg-blue-900 shadow-xl">
            {/* 新图：客厅电视正在播放电影，更有代入感 */}
            <img
              src="https://images.unsplash.com/photo-1593784991095-a20506948430?q=80&w=2000&auto=format&fit=crop"
              alt="Premium TV Drama"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* 叠加一层轻微的蓝色滤镜，模拟 Disney+ 的品牌氛围 */}
            <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

            <div className="absolute bottom-8 left-8 pr-4">
              <h3 className="text-xl font-bold mb-1">Premium Drama</h3>
              {/* 极简文案：强调顶级 IP */}
              <p className="text-xs font-medium opacity-90 text-blue-100">
                Native integration into top-tier narrative arcs (e.g., Disney+).
              </p>
            </div>
          </div>

          {/* Card 4: Campaign Insights (维持报表风格) */}
          <div className="relative group rounded-[2rem] overflow-hidden cursor-pointer bg-cyan-900 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
              alt="Data Report"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-blue-900/80 mix-blend-multiply"></div>
            <div className="absolute bottom-8 left-8 pr-4">
              <h3 className="text-xl font-bold mb-1">Campaign Insights</h3>
              {/* 极简文案 */}
              <p className="text-xs font-medium opacity-90 text-blue-100">
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