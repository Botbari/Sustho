
import React from 'react';
import { ModalType } from '../App';

interface MyCardsProps {
  onOpenBenefits: (type: ModalType) => void;
}

const MyCards: React.FC<MyCardsProps> = ({ onOpenBenefits }) => {
  return (
    <section id="my-cards" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#006A4E] mb-12 flex items-center gap-3">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
          My Cards
        </h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 1: Sustho AI Card */}
          <div className="group relative overflow-hidden bg-gradient-to-br from-[#006A4E] to-[#22C55E] rounded-[24px] p-6 md:p-8 shadow-xl border-l-8 border-[#F42A41] transition-all hover:scale-[1.01] duration-300">
            <div className="flex justify-between mb-6">
              <div className="flex items-center gap-3">
                <h3 className="text-white text-2xl font-bold italic">Sustho AI Card</h3>
                {/* Bangladesh Flag */}
                <div className="w-7 h-4.5 bg-[#006A4E] rounded-sm relative border border-white/20 overflow-hidden shadow-sm">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 bg-[#F42A41] rounded-full"></div>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => onOpenBenefits('ai-card')}
                className="bg-white/10 hover:bg-white text-white hover:text-[#006A4E] px-3 py-1 rounded-full text-xs font-bold transition-all border border-white/20"
              >
                View Benefits
              </button>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-full md:w-1/2 aspect-video bg-black rounded-xl overflow-hidden relative shadow-inner border border-white/10">
                <video autoPlay muted loop playsInline className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700">
                  <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-human-brain-and-data-processing-34446-large.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <div className="text-[#FACC15] text-2xl font-bold flex items-center gap-2 mb-2">
                  <span>⭐</span> 1,250 Pts
                </div>
                <p className="text-[#F9FAF9] text-sm leading-relaxed mb-4">
                  বিনা চিকিৎসায় কোনো মৃত্যু নয়। আপনার কার্ডের মাধ্যমে ডিজিটাল স্বাস্থ্যসেবা গ্রহণ করুন।
                </p>
              </div>
            </div>
            
            <div className="mt-8 pt-4 border-t border-white/10 flex justify-between items-center text-white/60 font-mono text-sm tracking-widest">
              <span>**** **** **** 5543</span>
              <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded">OFFICIAL BD</span>
            </div>
          </div>

          {/* Card 2: Sustho Family Card */}
          <div className="group relative overflow-hidden bg-gradient-to-br from-[#F42A41] to-[#B91C1C] rounded-[24px] p-6 md:p-8 shadow-xl transition-all hover:scale-[1.01] duration-300">
            <div className="flex justify-between mb-6">
              <h3 className="text-white text-2xl font-bold italic">Sustho Family Card</h3>
              <button 
                onClick={() => onOpenBenefits('family-card')}
                className="bg-white/10 hover:bg-white text-white hover:text-[#F42A41] px-3 py-1 rounded-full text-xs font-bold transition-all border border-white/20"
              >
                View Benefits
              </button>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-full md:w-1/2 aspect-video bg-white/10 rounded-xl overflow-hidden shadow-inner border border-white/20">
                <img 
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=400&q=80" 
                  alt="Mother and Child Care" 
                  className="w-full h-full object-cover opacity-90 transition-all duration-500 scale-105 group-hover:scale-100"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <div className="text-[#FEF08A] text-2xl font-bold flex items-center gap-2 mb-2">
                  <span>⭐</span> 2,500 Pts
                </div>
                <p className="text-white text-sm leading-relaxed mb-4">
                  মা ও শিশুর নিরাপদ ভবিষ্যতের জন্য। সরকারি সহায়তায় ফ্রি স্বাস্থ্য পরীক্ষা ও বিশেষ ছাড়।
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 flex justify-between items-center">
              <div className="flex -space-x-3">
                 {[1,2,3].map(i => (
                   <div key={i} className="w-8 h-8 rounded-full border-2 border-[#F42A41] bg-gray-200 overflow-hidden">
                      <img src={`https://picsum.photos/40/40?random=${i+20}`} alt="member" />
                   </div>
                 ))}
                 <div className="w-8 h-8 rounded-full border-2 border-[#F42A41] bg-white flex items-center justify-center text-[#F42A41] text-[10px] font-bold">+2</div>
              </div>
              <span className="text-white/60 text-xs font-mono uppercase">Family Secure ID</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyCards;
