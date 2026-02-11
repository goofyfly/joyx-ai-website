import React from 'react';

const BentoGrid: React.FC = () => {
  return (
    <section id="technology" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Core Technology</h2>
          <p className="text-slate-600 text-lg">
            Our proprietary engine combines computer vision with spatial rendering to create the world's most seamless ad insertions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-auto md:grid-rows-2 gap-6 h-auto md:h-[600px]">
          
          {/* Block A: Large (Proprietary AI) */}
          <div className="md:col-span-2 md:row-span-2 bg-white rounded-3xl p-8 shadow-sm border border-slate-200 relative overflow-hidden group">
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="inline-block px-3 py-1 bg-blue-100 text-joyx-blue text-xs font-bold rounded-full mb-4">
                  CORE ENGINE
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Proprietary AI Engine</h3>
                <p className="text-slate-600 max-w-sm">
                  Built on CNN video detection and 3D spatial rendering engines. We analyze depth, lighting, and motion in milliseconds.
                </p>
              </div>
              <div className="mt-8 bg-slate-100 rounded-xl p-4 border border-slate-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-mono text-slate-500">Processing Stream</span>
                  <span className="text-xs font-mono text-green-500">LIVE</span>
                </div>
                <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-joyx-blue w-3/4 animate-pulse"></div>
                </div>
                <div className="mt-2 text-xs font-mono text-slate-400">
                  Detecting surfaces... Lighting match... Render.
                </div>
              </div>
            </div>
            {/* Abstract Background Graphic */}
            <img 
              src="https://picsum.photos/600/800?grayscale&blur=2" 
              alt="AI Graphic" 
              className="absolute top-0 right-0 w-1/2 h-full object-cover opacity-10 group-hover:scale-110 transition-transform duration-700"
            />
          </div>

          {/* Block B: Wide (Patents) */}
          <div className="md:col-span-2 bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 shadow-lg text-white relative overflow-hidden flex flex-col justify-center">
            <div className="relative z-10">
              <h3 className="text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-joyx-cyan to-white">
                12+
              </h3>
              <h4 className="text-xl font-semibold mb-2">Patents Pending</h4>
              <p className="text-slate-300 text-sm max-w-md">
                Deep technical accumulation in video object detection, tracking, and cloud computing.
              </p>
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20">
               <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-[spin_10s_linear_infinite]">
                  <path fill="#06B6D4" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-46.9C87.4,-34.7,90.1,-20.4,85.8,-7.1C81.5,6.2,70.2,18.5,59.6,29.1C49,39.7,39.1,48.6,28.3,55.2C17.5,61.8,5.8,66.1,-5.2,64.8C-16.2,63.5,-26.5,56.6,-36.3,49.4C-46.1,42.2,-55.4,34.7,-64.1,24.6C-72.8,14.5,-80.9,1.8,-80.4,-10.6C-79.9,-23,-70.8,-35.1,-59.8,-43.8C-48.8,-52.5,-35.9,-57.8,-23.4,-66.1C-10.9,-74.4,1.2,-85.7,14.5,-84.9C27.8,-84.1,42.4,-71.2,44.7,-76.4Z" transform="translate(100 100)" />
                </svg>
            </div>
          </div>

          {/* Block C: Small (Vertical Focus) */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 flex flex-col justify-center hover:border-joyx-blue transition-colors cursor-default">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-500 mb-4">
               <i className="fas fa-bullseye text-xl"></i>
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-2">Vertical Focus</h4>
            <p className="text-sm text-slate-600">
              We specialize in "In-Video Insertion" with extreme precision.
            </p>
          </div>

          {/* Block D: Small (Partners) */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 flex flex-col justify-center items-center text-center">
            <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-6">Trusted By</h4>
            <div className="flex gap-4 opacity-60 grayscale hover:grayscale-0 transition-all">
               <i className="fab fa-aws text-3xl"></i>
               <i className="fas fa-basketball text-3xl"></i> {/* NBA proxy */}
               <i className="fas fa-film text-3xl"></i> {/* Disney proxy */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BentoGrid;