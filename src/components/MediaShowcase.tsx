
import React from 'react';

const MediaShowcase: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-[#F9FAF9] border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#006A4E] text-center mb-12">আমাদের লক্ষ্য ও সেবা</h2>

        <div className="bg-white p-6 md:p-10 rounded-[32px] shadow-lg border border-gray-100">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Image Box */}
            <div className="overflow-hidden rounded-[24px] shadow-md group">
              <img
                src="https://images.unsplash.com/photo-1516589174184-c685265142ec?auto=format&fit=crop&w=800&q=80"
                alt="Health Mission"
                className="w-full h-[300px] object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="p-4 bg-white">
                <p className="text-[#006A4E] font-bold text-lg">মানবিক স্বাস্থ্যসেবা</p>
                <p className="text-gray-500 text-sm">প্রত্যন্ত অঞ্চলে স্বাস্থ্য সেবা পৌঁছে দেওয়াই আমাদের লক্ষ্য।</p>
              </div>
            </div>

            {/* Video Box */}
            <div className="overflow-hidden rounded-[24px] shadow-md group relative">
              <div className="w-full h-[300px] overflow-hidden rounded-xl">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/-UWaofWv2iQ?autoplay=1&mute=1&loop=1&playlist=-UWaofWv2iQ&controls=1"
                  title="Tree Health Video"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>



              {/* <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/0 transition-all">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
                </div>
              </div> */}
              <div className="p-4 bg-white">
                <p className="text-[#F42A41] font-bold text-lg">অত্যাধুনিক প্রযুক্তি</p>
                <p className="text-gray-500 text-sm">এআই প্রযুক্তির মাধ্যমে রোগ নির্ণয় ও দ্রুত সেবা প্রদান।</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaShowcase;
