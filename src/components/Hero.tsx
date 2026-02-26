
import React from 'react';

interface HeroProps {
  onOpenBenefits: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenBenefits }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#006A4E] to-[#0F5132] pt-12 pb-16 sm:pt-16 sm:pb-20 md:pt-24 md:pb-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
        <div className="space-y-4 sm:space-y-6 text-center md:text-left z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
            Sustho AI Card
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#E5E7EB] font-medium max-w-lg mx-auto md:mx-0">
            স্বাস্থ্য, ডিসকাউন্ট ও সামাজিক সুরক্ষা—এক কার্ডে
          </p>
          <p className="text-[#F42A41] text-sm sm:text-base md:text-lg lg:text-xl font-bold uppercase tracking-wider">
            সবার জন্য স্বাস্থ্য | বিনা চিকিৎসায় কোনো মৃত্যু নয়
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 justify-center md:justify-start">
            <button className="bg-[#F42A41] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-bold shadow-lg hover:bg-[#DC2626] transition-all transform hover:-translate-y-1">
              Get Your Card
            </button>
            <button
              onClick={onOpenBenefits}
              className="border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-bold hover:bg-white/10 transition-all transform hover:-translate-y-1"
            >
              View Benefits
            </button>
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          <div className="relative z-10 w-full max-w-sm sm:max-w-md transform hover:scale-105 transition-transform duration-700">
            <img
              src={"https://res.cloudinary.com/drlo4ktpa/image/upload/v1772090719/sutho-card_l5toja.jpg"}
              alt="AI Medical Technology"
              className="rounded-2xl sm:rounded-[32px] shadow-2xl border-2 sm:border-4 border-white/10"
            />

            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl flex items-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#006A4E]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <div>
                <p className="text-[10px] sm:text-xs text-gray-500 font-bold uppercase">Verified Health</p>
                <p className="text-[#006A4E] text-xs sm:text-sm font-bold">100% Secured AI</p>
              </div>
            </div>
          </div>

          <div className="absolute w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-red-500/10 blur-[120px] rounded-full -top-20 -right-20"></div>
          <div className="absolute w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-green-500/20 blur-[120px] rounded-full -bottom-20 -left-20"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
