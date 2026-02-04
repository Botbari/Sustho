import React from "react";

const Subscription: React.FC = () => {
  return (
    <section id="plans" className="py-12 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#006A4E] text-center mb-10 sm:mb-16">
          Subscription Plans
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {/* Basic Plan */}
          <div className="bg-[#F9FAF9] p-6 sm:p-8 rounded-2xl sm:rounded-[24px] border border-gray-100 flex flex-col">
            <h3 className="text-lg sm:text-xl font-bold text-[#1E1E1E] mb-2">
              Basic Individual
            </h3>
            <div className="text-2xl sm:text-3xl font-bold text-[#006A4E] mb-6">
              ৳০{" "}
              <span className="text-sm sm:text-base font-normal text-gray-500">
                /মাস
              </span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center gap-2 text-gray-600">
                <svg
                  className="w-5 h-5 text-[#006A4E]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                </svg>
                Digital Medical Record
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <svg
                  className="w-5 h-5 text-[#006A4E]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                </svg>
                Basic AI Health Advice
              </li>
            </ul>
            <button className="w-full py-3 rounded-full border-2 border-[#006A4E] text-[#006A4E] font-bold hover:bg-[#006A4E] hover:text-white transition-colors">
              Get Started
            </button>
          </div>

          {/* Highlighted Family Plan - GOVERNMENT PROVIDED FREE */}
          <div className="relative bg-white p-8 rounded-[24px] border-2 border-[#F42A41] red-glow scale-105 z-10 flex flex-col shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#F42A41] text-white px-6 py-1 rounded-full text-xs font-bold shadow-md uppercase tracking-widest whitespace-nowrap">
              সরকারি সহায়তা প্রাপ্ত (Free)
            </div>
            <h3 className="text-xl font-bold text-[#F42A41] mb-2 text-center">
              Special Family Subscription
            </h3>
            <div className="text-4xl font-extrabold text-[#006A4E] mb-1 text-center">
              ৳০
            </div>
            <p className="text-center text-xs text-gray-500 font-bold mb-6 uppercase">
              Government Fully Funded
            </p>

            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center gap-2 text-gray-700 font-medium">
                <svg
                  className="w-5 h-5 text-[#F42A41]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                </svg>
                Coverage for All Family Members
              </li>
              <li className="flex items-center gap-2 text-gray-700 font-medium">
                <svg
                  className="w-5 h-5 text-[#F42A41]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1.011.414 0z" />
                </svg>
                Govt. Hospital Special Access
              </li>
              <li className="flex items-center gap-2 text-gray-700 font-medium">
                <svg
                  className="w-5 h-5 text-[#F42A41]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                </svg>
                Monthly Basic Ration Discount
              </li>
              <li className="flex items-center gap-2 text-gray-700 font-medium">
                <svg
                  className="w-5 h-5 text-[#F42A41]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                </svg>
                Social Security Support
              </li>
            </ul>
            <button className="w-full py-4 rounded-full bg-[#F42A41] text-white font-bold hover:bg-[#DC2626] shadow-lg transition-all transform hover:scale-105 active:scale-95">
              Apply via Govt. Portal
            </button>
            <p className="mt-4 text-[10px] text-gray-400 text-center italic leading-tight">
              *এই সাবস্ক্রিপশনটি বাংলাদেশ সরকারের সামাজিক নিরাপত্তা কর্মসূচির
              আওতায় সম্পূর্ণ বিনামূল্যে প্রদান করা হয়।
            </p>
          </div>

          {/* Pro Plan */}
          <div className="bg-[#F9FAF9] p-8 rounded-[24px] border border-gray-100 flex flex-col">
            <h3 className="text-xl font-bold text-[#1E1E1E] mb-2">
              Corporate Care
            </h3>
            <div className="text-3xl font-bold text-[#006A4E] mb-6">
              Custom{" "}
              <span className="text-base font-normal text-gray-500">/অফিস</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center gap-2 text-gray-600">
                <svg
                  className="w-5 h-5 text-[#006A4E]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                </svg>
                Employee Health Dashboard
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <svg
                  className="w-5 h-5 text-[#006A4E]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                </svg>
                Mental Health Programs
              </li>
            </ul>
            <button className="w-full py-3 rounded-full border-2 border-gray-400 text-gray-600 font-bold hover:bg-gray-200 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
