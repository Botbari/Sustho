import React from "react";

const RecentTransactions: React.FC = () => {
  const transactions = [
    {
      date: "১২ মে, ২০২৪",
      location: "লাজ ফার্মা, গুলশান",
      type: "মেডিসিন ক্রয়",
      amount: "৳১,২০০",
      status: "পয়েন্ট যুক্ত (+৫০)",
      color: "text-green-600",
    },
    {
      date: "১০ মে, ২০২৪",
      location: "স্কয়ার হাসপাতাল",
      type: "ডাক্তার কনসাল্টেশন",
      amount: "৳৮০০",
      status: "ডিসকাউন্ট প্রাপ্ত (১৫%)",
      color: "text-[#F42A41]",
    },
    {
      date: "০৮ মে, ২০২৪",
      location: "পপুলার ডায়াগনস্টিক",
      type: "রক্ত পরীক্ষা",
      amount: "ফ্রি",
      status: "ফ্যামিলি কার্ড বেনিফিট",
      color: "text-blue-600",
    },
    {
      date: "০৫ মে, ২০২৪",
      location: "স্বপ্ন সুপার শপ",
      type: "পুষ্টিজাত পণ্য",
      amount: "৳৫০০",
      status: "পয়েন্ট ব্যবহার (-১০০)",
      color: "text-amber-600",
    },
  ];

  return (
    <section className="py-10 sm:py-16 px-4 sm:px-6 bg-[#F9FAF9]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 sm:mb-10 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#006A4E]">
              Recent Transactions
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm mt-1">
              আপনার কার্ড ব্যবহারের সর্বশেষ ইতিহাস
            </p>
          </div>
          <button className="text-[#006A4E] font-bold flex items-center gap-2 hover:underline">
            সকল লেনদেন দেখুন
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                    তারিখ
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                    স্থান/প্রতিষ্ঠান
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                    সেবার ধরন
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                    পরিমাণ
                  </th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                    স্ট্যাটাস
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {transactions.map((t, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {t.date}
                    </td>
                    <td className="px-6 py-4 text-sm font-bold text-[#1E1E1E]">
                      {t.location}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {t.type}
                    </td>
                    <td className="px-6 py-4 text-sm font-bold">{t.amount}</td>
                    <td className={`px-6 py-4 text-sm font-medium ${t.color}`}>
                      {t.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentTransactions;
