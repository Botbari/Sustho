
import React from 'react';
import { ModalType } from '../App';

interface BenefitsModalProps {
  type: ModalType;
  onClose: () => void;
}

const BenefitsModal: React.FC<BenefitsModalProps> = ({ type, onClose }) => {
  const isAiCard = type === 'ai-card';
  const themeColor = isAiCard ? '#006A4E' : '#F42A41';
  const secondaryColor = isAiCard ? 'text-[#006A4E]' : 'text-[#F42A41]';

  const benefits = isAiCard ? [
    { icon: '🏥', title: 'ডায়াগনস্টিক টেস্টে ছাড়', desc: '১৫–২০% পর্যন্ত ছাড় অংশগ্রহণকারী হাসপাতাল ও ডায়াগনস্টিক সেন্টারে।' },
    { icon: '👨‍⚕️', title: 'ডাক্তার কনসাল্টেশনে বিশেষ সুবিধা', desc: 'কম ফি ও অগ্রাধিকার সেবা। সিরিয়াল ও রিপোর্টে দ্রুততা।' },
    { icon: '🤖', title: 'AI–চালিত স্বাস্থ্য পরামর্শ', desc: 'উপসর্গ অনুযায়ী স্মার্ট গাইডলাইন এবং প্রাথমিক স্বাস্থ্য সিদ্ধান্তে সহায়তা।' },
    { icon: '💊', title: 'প্রেসক্রিপশন ও মেডিসিন ম্যানেজমেন্ট', desc: 'ডিজিটাল প্রেসক্রিপশন এবং সময়মতো মেডিসিন রিমাইন্ডার।' },
    { icon: '🚑', title: 'জরুরি স্বাস্থ্য সেবা সংযোগ', desc: 'ব্লাড সার্ভিস এবং ২৪/৭ অ্যাম্বুলেন্স সার্ভিস সংযোগ।' },
    { icon: '⭐', title: 'পয়েন্ট সিস্টেম সুবিধা', desc: 'পয়েন্ট ব্যবহার করে বাজার, শিক্ষা ও স্বাস্থ্য খাতে ছাড়।' },
  ] : [
    { icon: '👨‍👩‍👧‍👦', title: 'পুরো পরিবারের জন্য স্বাস্থ্য সুরক্ষা', desc: 'এক কার্ডে একাধিক সদস্যের পরিবারভিত্তিক স্বাস্থ্য সুবিধা।' },
    { icon: '🤖', title: 'AI–চালিত ফ্যামিলি হেলথ সাপোর্ট', desc: 'শিশু, নারী ও বয়স্কদের জন্য আলাদা হেলথ গাইডলাইন।' },
    { icon: '💊', title: 'ফ্যামিলি প্রেসক্রিপশন ম্যানেজমেন্ট', desc: 'সব সদস্যের প্রেসক্রিপশন এক জায়গায় ডিজিটালভাবে সংরক্ষণ।' },
    { icon: '🚑', title: '২৪/৭ জরুরি সেবা সংযোগ', desc: 'পুরো পরিবারের জন্য দ্রুত ব্লাড ও অ্যাম্বুলেন্স সার্ভিস।' },
    { icon: '⭐', title: 'ফ্যামিলি পয়েন্ট সিস্টেম', desc: 'যৌথ পয়েন্ট ব্যালেন্স বাজার, শিক্ষা ও স্বাস্থ্য খাতে ব্যবহারযোগ্য।' },
    { icon: '🛡️', title: 'সামাজিক নিরাপত্তা ও সুরক্ষা', desc: 'পরিবারকে কেন্দ্র করে বিশেষ স্বাস্থ্য ইনসেনটিভ সিস্টেম।' },
  ];

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-2xl bg-white rounded-[24px] overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-6 text-white flex justify-between items-center" style={{ backgroundColor: themeColor }}>
          <div>
            <h2 className="text-xl md:text-2xl font-bold">
              {isAiCard ? 'Sustho AI Card – Key Benefits' : 'Sustho Family Card – Family Benefits'}
            </h2>
            <p className="text-white/80 text-xs md:text-sm mt-1">সব সেবা এক কার্ডে</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-full transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        {/* Benefits List */}
        <div className="flex-grow overflow-y-auto p-6 space-y-6">
          <div className="grid gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="flex gap-4 group">
                <div className={`text-3xl flex-shrink-0 w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform`}>
                  {b.icon}
                </div>
                <div>
                  <h4 className={`text-lg font-bold ${secondaryColor}`}>{b.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-100 flex flex-col sm:flex-row gap-4">
          <button 
            onClick={onClose}
            className="flex-grow py-4 rounded-xl text-white font-bold text-lg shadow-lg transform active:scale-95 transition-all"
            style={{ backgroundColor: '#F42A41' }}
          >
            {isAiCard ? 'Get Sustho AI Card' : 'Subscribe Family Plan'}
          </button>
          <button onClick={onClose} className="sm:px-8 py-4 text-gray-400 font-bold hover:text-gray-600">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default BenefitsModal;
