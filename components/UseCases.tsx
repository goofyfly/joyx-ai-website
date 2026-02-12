import React from 'react';

const UseCases: React.FC = () => {
  return (
    // 修改 1: 回归“电光蓝”背景，保持高视觉冲击力
    <section className="py-24 bg-[#0033FF] text-white">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            See our favorite <br />
            <span className="text-blue-200">implementation scenarios.</span>
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            From NBA courtsides to Disney dramas, we make ads look like they belong there.
          </p>
        </div>

        {/* Masonry Grid Layout (不规则拼贴感) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">

          {/* Card 1: Sports (横跨两列 - 大图) */}
          <div className="md:col-span-2 relative group rounded-[2rem] overflow-hidden cursor-pointer shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=2069&auto=format&fit=crop"
              alt="Sports Arena"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded mb-2 inline-block">LIVE</span>
              <h3 className="text-2xl font-bold mb-1">Sports Broadcasting</h3>
              <p className="text-sm opacity-90 text-blue-100">Dynamic court-side & perimeter replacement.</p>
            </div>
          </div>

          {/* Card 2: In-Show Product (竖跨两行 - 长图) - [已修复图片] */}
          <div className="md:row-span-2 relative group rounded-[2rem] overflow-hidden cursor-pointer bg-slate-800 shadow-2xl">
            {/* 换了一张更像产品植入场景的图片（咖啡厅/桌子） */}
            <img
              src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1974&auto=format&fit=crop"
              alt="Product Placement Scene"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 pr-4">
              <h3 className="text-2xl font-bold mb-1">In-Show Product</h3>
              <p className="text-sm opacity-90 text-blue-100">
                Placing beverages or tech gadgets onto tables in post-production. Zero reshoots.
              </p>
            </div>
          </div>

          {/* Card 3: Premium Drama (Disney Vibe) - [修正逻辑：原生植入非UI] */}
          <div className="relative group rounded-[2rem] overflow-hidden cursor-pointer bg-blue-900 shadow-xl">
            {/* 换了一张更有电影质感/奇幻剧集的图片 */}
            <img
              src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop"
              alt="Cinematic Movie Scene"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
            <div className="absolute bottom-8 left-8 pr-4">
              <h3 className="text-xl font-bold mb-1">Premium Drama</h3>
              <p className="text-xs opacity-90 text-blue-100 leading-snug">
                Native object insertion into narrative arcs (e.g., Disney+ series) without disrupting the story.
              </p>
            </div>
          </div>

          {/* Card 4: Post-Campaign Analysis - [修正逻辑：结案分析非实时] */}
          <div className="relative group rounded-[2rem] overflow-hidden cursor-pointer bg-cyan-900 shadow-xl">
            {/* 换成了报表/归因分析风格的图片 */}
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
              alt="Data Report"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-blue-900/80 mix-blend-multiply"></div>
            <div className="absolute bottom-8 left-8 pr-4">
              <h3 className="text-xl font-bold mb-1">Campaign Insights</h3>
              <p className="text-xs opacity-90 text-blue-100 leading-snug">
                Personalized backend attribution & comprehensive post-campaign ROI analysis.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default UseCases;