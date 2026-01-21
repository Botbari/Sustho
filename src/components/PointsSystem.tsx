
import React from 'react';

const PointsSystem: React.FC = () => {
  const pointsData = [
    {
      title: "Health Ecosystem",
      desc: "Earn points by visiting verified hospitals and pharmacy purchases.",
      icon: (
        <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: "border-green-500"
    },
    {
      title: "Market Discount",
      desc: "Redeem points for household essentials and nutrition packs.",
      icon: (
        <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      color: "border-red-500"
    },
    {
      title: "Education Support",
      desc: "Convert high-value points to school fees or skill-based course vouchers.",
      icon: (
        <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      color: "border-blue-500"
    }
  ];

  return (
    <section id="points" className="py-20 px-6 bg-[#F3F4F6]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#006A4E] mb-4">How Your Points Work</h2>
        <p className="text-[#6B7280] max-w-2xl mx-auto mb-16 text-lg">
          সাসথ্য আইআই (Sustho AI) কার্ডের মাধ্যমে আপনি যত বেশি স্বাস্থ্য সচেতন হবেন, তত বেশি পয়েন্ট অর্জন করবেন।
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {pointsData.map((item, idx) => (
            <div key={idx} className={`bg-white p-10 rounded-[24px] shadow-sm border-b-4 ${item.color} hover:shadow-md transition-shadow group`}>
              <div className="mb-6 flex justify-center transform group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#374151] mb-3">{item.title}</h3>
              <p className="text-[#6B7280] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PointsSystem;
