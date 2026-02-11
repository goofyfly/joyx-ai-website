import React from 'react';

const UseCases: React.FC = () => {
  return (
    <section className="py-24 bg-joyx-blue text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Built for High-Value Content</h2>
            <p className="text-blue-100 text-lg">
              From live sports to premium drama, our technology adapts to the environment seamlessly.
            </p>
          </div>
          <button className="hidden md:block bg-white text-joyx-blue px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
            View Case Studies
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Case 1: Sports */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl transform hover:-translate-y-2 transition-transform duration-300">
            <div className="h-64 overflow-hidden relative group">
               {/* Sports Image: Basketball Arena or similar */}
               <img 
                 src="https://images.unsplash.com/photo-1504450758481-7338eba7524a?auto=format&fit=crop&w=800&q=80" 
                 alt="Basketball stadium live game" 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
               />
               <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                 Live Broadcast
               </div>
               {/* Overlay scanning effect suggestion */}
               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Sports Events</h3>
              <p className="text-slate-600 mb-4">
                Dynamic digital billboards on court floors and stadium perimeters. Change sponsors every quarter without physical installation.
              </p>
              <div className="flex items-center text-joyx-blue font-semibold text-sm cursor-pointer hover:underline">
                <span>See the NBA Demo</span>
                <i className="fas fa-chevron-right ml-2 text-xs"></i>
              </div>
            </div>
          </div>

          {/* Case 2: TV Shows */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl transform hover:-translate-y-2 transition-transform duration-300 md:mt-16">
            <div className="h-64 overflow-hidden relative group">
               {/* TV/Entertainment Image: Person watching TV */}
               <img 
                 src="https://images.unsplash.com/photo-1522869635100-1f4d061dd70f?auto=format&fit=crop&w=800&q=80" 
                 alt="People watching TV in living room" 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
               />
               <div className="absolute top-4 left-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                 VOD & Streaming
               </div>
               <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Entertainment & TV</h3>
              <p className="text-slate-600 mb-4">
                Post-production product placement on tables, walls, or outdoor scenes without reshoots. Monetize back-catalog content instantly.
              </p>
              <div className="flex items-center text-joyx-blue font-semibold text-sm cursor-pointer hover:underline">
                <span>View Entertainment Reel</span>
                <i className="fas fa-chevron-right ml-2 text-xs"></i>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <button className="bg-white text-joyx-blue px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors w-full">
            View Case Studies
          </button>
        </div>
      </div>
    </section>
  );
};

export default UseCases;