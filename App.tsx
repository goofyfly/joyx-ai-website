import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyJoyx from './components/WhyJoyx';
import BentoGrid from './components/BentoGrid';
import UseCases from './components/UseCases';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <WhyJoyx />
        <BentoGrid />
        <UseCases />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;