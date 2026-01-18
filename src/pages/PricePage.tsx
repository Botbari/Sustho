import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Shield, Heart, Star, Sparkles, Accessibility, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Basic Plan',
    monthly: '$0.50',
    yearly: '$6.00',
    features: ['AI text advice', 'General tips', 'Email support'],
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Standard Plan',
    monthly: '$0.80',
    yearly: '$9.60',
    features: ['AI text + image', 'Priority replies', 'Community access'],
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    name: 'Premium Plan',
    monthly: '$1.20',
    yearly: '$14.40',
    features: ['Text+Image+Voice', 'Faster responses', 'Early features'],
    gradient: 'from-rose-500 to-orange-500'
  },
  {
    name: 'Eye Access (Free)',
    monthly: 'Free',
    yearly: 'Special',
    features: ['Accessibility-first', 'Voice guidance', 'Screen-reader tuned'],
    gradient: 'from-emerald-500 to-teal-500',
    free: true
  }
];

const PricePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Top: Subscription Plans */}
      <section className="relative py-16 px-4">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-green-50" />
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-3">Pricing</h1>
            <p className="text-gray-600 text-lg">Choose a plan that suits your needs. Cancel anytime.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, idx) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                <div className={`absolute -inset-0.5 rounded-3xl bg-gradient-to-r ${plan.gradient} opacity-40 blur-xl group-hover:opacity-60 transition-opacity -z-10`} />
                <div className="relative rounded-3xl bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl text-white bg-gradient-to-r ${plan.gradient} shadow-lg`}>
                      {plan.free ? <Accessibility className="w-6 h-6" /> : <Star className="w-6 h-6" />}
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700">2xl radius</span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <div className="text-3xl font-extrabold text-gray-900">{plan.monthly}<span className="text-base font-medium text-gray-500"> / month</span></div>
                    <div className="text-sm text-gray-500">{plan.yearly} / year</div>
                  </div>

                  <ul className="space-y-2 text-gray-600 mb-6">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center">
                        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-600 to-green-600 mr-2 shadow" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <motion.button
                    whileHover={{ scale: 1.03, boxShadow: '0 20px 40px rgba(37, 99, 235, 0.3)' }}
                    whileTap={{ scale: 0.97 }}
                    className={`mt-auto inline-flex items-center justify-center w-full px-4 py-3 rounded-xl text-white font-semibold bg-gradient-to-r ${plan.gradient}`}
                  >
                    {plan.free ? 'Get Access' : 'Subscribe Now'}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Middle: Sponsorship */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50" />
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Become a Sponsor</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Support our mission to make healthcare accessible for everyone by becoming a sponsor.</p>
          </motion.div>

          <div className="relative">
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-3xl bg-white/50 blur-xl" />
              <div className="absolute bottom-6 right-10 w-28 h-28 rounded-full bg-white/40 blur-2xl" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="relative rounded-2xl bg-white/70 backdrop-blur-xl border border-white/60 shadow-lg p-6 flex items-center justify-center">
                  <div className="flex items-center text-gray-500">
                    <Shield className="w-5 h-5 mr-2 text-blue-500" />
                    <span className="font-semibold">Logo {i + 1}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -3, boxShadow: '0 25px 50px rgba(99,102,241,0.35)' }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center px-8 py-4 rounded-2xl text-white font-semibold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"
                style={{ transform: 'perspective(1000px) rotateX(6deg)' }}
              >
                <Sparkles className="w-5 h-5 mr-2" /> Sponsor Us
              </motion.button>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom: Donation */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-green-50" />
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Make a Donation</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Your contribution helps us provide free healthcare services to disabled and rural communities.</p>
          </motion.div>

          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {['$5', '$10', '$20', 'Custom'].map((amt) => (
              <motion.button
                key={amt}
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/60 shadow-md text-gray-800 font-semibold hover:shadow-xl"
              >
                {amt}
              </motion.button>
            ))}
          </div>

          <div className="text-center mb-10">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 25px 50px rgba(34,197,94,0.35)' }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center px-10 py-4 rounded-2xl text-white font-semibold bg-gradient-to-r from-green-600 to-emerald-600"
            >
              <Heart className="w-5 h-5 mr-2" /> Donate Now
            </motion.button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-gray-600">
            {[{ name: 'Visa' }, { name: 'MasterCard' }, { name: 'bKash' }, { name: 'Nagad' }, { name: 'PayPal' }].map(({ name }) => (
              <div key={name} className="inline-flex items-center px-4 py-2 rounded-xl bg-white/70 backdrop-blur-xl border border-white/60 shadow">
                <CreditCard className="w-4 h-4 mr-2 text-blue-500" />
                <span className="font-medium">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricePage;


