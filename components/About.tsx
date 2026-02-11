import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white border-b border-slate-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Small & Beautiful. <br/><span className="text-slate-400">Agile & Global.</span></h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              We don't aim to be a massive conglomerate. We aim to be the sharpest tool in the shed. Our philosophy of "white-glove customization" ensures top-tier clients get specific, high-impact solutions.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-joyx-blue mt-1 shrink-0">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-slate-900">Palo Alto, CA</h4>
                  <p className="text-slate-500 text-sm">Global R&D & Strategic Partnership Hub.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-joyx-blue mt-1 shrink-0">
                  <i className="fas fa-building"></i>
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-slate-900">Kuala Lumpur, MY</h4>
                  <p className="text-slate-500 text-sm">Global Delivery & Operations Center.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
             <div className="absolute -inset-4 bg-gradient-to-r from-joyx-blue to-joyx-cyan opacity-20 blur-2xl rounded-full"></div>
             <img 
               src="https://picsum.photos/600/600?grayscale" 
               alt="Our Office" 
               className="relative rounded-2xl shadow-xl w-full"
             />
             <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-xs border border-slate-100 hidden md:block">
               <p className="text-slate-800 font-serif italic text-lg">"We empower IP owners to maximize value across all platforms."</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;