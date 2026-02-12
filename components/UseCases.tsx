import React from 'react';

const UseCases: React.FC = () => {
  return (
    // CHANGE 1: Strong Blue Background like the reference
    <section className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Built for <br />
            <span className="text-blue-200">High-Value Content.</span>
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            From NBA courtsides to Netflix dramas, we make ads look like they belong there.
          </p>
        </div>

        {/* Masonry Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

          {/* Card 1: Large Wide (NBA/Sports) */}
          <div className="md:col-span-2 relative group rounded-[2rem] overflow-hidden cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1505666287802-931dc83948e9?q=80&w=2071&auto=format&fit=crop"
              alt="Sports Arena"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
            <div className="absolute bottom-8 left-8">
              <h3 className="text-2xl font-bold mb-1">Sports Broadcasting</h3>
              <p className="text-sm opacity-90">Live Dynamic Insertion</p>
            </div>
            {/* Pill Button Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="bg-white text-blue-700 px-6 py-3 rounded-full font-bold shadow-lg">View Project</span>
            </div>
          </div>

          {/* Card 2: Tall (Product Placement) */}
          <div className="md:row-span-2 relative group rounded-[2rem] overflow-hidden cursor-pointer bg-slate-800">
            <img
              src="https://images.unsplash.com/photo-1593784991095-a20506948430?q=80&w=1887&auto=format&fit=crop"
              alt="Product Placement"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-8 left-8">
              <h3 className="text-2xl font-bold mb-1">In-Show Product</h3>
              <p className="text-sm opacity-90">Post-production AI</p>
            </div>
          </div>

          {/* Card 3: Standard (TV Interface) */}
          <div className="relative group rounded-[2rem] overflow-hidden cursor-pointer bg-blue-800">
            <img
              src="https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?q=80&w=2070&auto=format&fit=crop"
              alt="Smart TV"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
            />
            <div className="absolute bottom-8 left-8">
              <h3 className="text-xl font-bold mb-1">Smart TV UI</h3>
              <p className="text-sm opacity-90">Non-intrusive Overlay</p>
            </div>
          </div>

          {/* Card 4: Standard (Dashboard/Tech) */}
          <div className="relative group rounded-[2rem] overflow-hidden cursor-pointer bg-cyan-900">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
              alt="Analytics Dashboard"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-8 left-8">
              <h3 className="text-xl font-bold mb-1">Real-time Analytics</h3>
              <p className="text-sm opacity-90">Client Dashboard</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default UseCases;