//src/pages/SusthoCardPage.tsx

import React, { useState } from 'react';
import Hero from '../components/Hero';
import MyCards from '../components/MyCards';
import RecentTransactions from '../components/RecentTransactions';
import PointsSystem from '../components/PointsSystem';
import Subscription from '../components/Subscription';
import MediaShowcase from '../components/MediaShowcase';
import Chatbot from '../components/Chatbot';
import BenefitsModal from '../components/BenefitsModal';

export type ModalType = 'ai-card' | 'family-card' | null;

const SusthoCardPage: React.FC = () => {
  const [showChat, setShowChat] = useState(false);
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const openBenefits = (type: ModalType) => setActiveModal(type);
  const closeBenefits = () => setActiveModal(null);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Hero onOpenBenefits={() => openBenefits('ai-card')} />
        <MyCards onOpenBenefits={openBenefits} />
        <RecentTransactions />
        <PointsSystem />
        <Subscription />
        <MediaShowcase />
      </main>
      
      {/* Floating Action Button for AI Assistant */}
      <button 
        onClick={() => setShowChat(!showChat)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#006A4E] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#0F5132] transition-transform hover:scale-110 z-50"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12"/><circle cx="17" cy="7" r="5"/></svg>
      </button>

      {showChat && <Chatbot onClose={() => setShowChat(false)} />}
      
      {activeModal && (
        <BenefitsModal 
          type={activeModal} 
          onClose={closeBenefits} 
        />
      )}
    </div>
  );
};

export default SusthoCardPage;
