import React from 'react';
import Navbar from './components/Navbar';
import RequestDemoModal from './components/RequestDemoModal';
import Hero from './components/Hero';
import WhyJoyx from './components/WhyJoyx';
import BentoGrid from './components/BentoGrid';
import UseCases from './components/UseCases';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
      <Navbar onOpenModal={openModal} />
      <main>
        <Hero onOpenModal={openModal} />
        <WhyJoyx />
        <BentoGrid onOpenModal={openModal} />
        <UseCases />
        <About />
      </main>
      <Footer />
      <RequestDemoModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;