import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Shield, Zap, Award, Target, Eye, Lightbulb, Globe, Stethoscope, Bot, Sparkles, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  const stats = [
    {
      number: t('language') === 'bn' ? '১০০+' : '100+',
      label: t('language') === 'bn' ? 'স্বাস্থ্য বিষয়' : 'Health Topics',
      icon: Heart,
      color: 'from-red-500 to-pink-500'
    },
    {
      number: '24/7',
      label: t('language') === 'bn' ? 'সেবার সময়' : 'Service Hours',
      icon: Clock,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: t('language') === 'bn' ? '৫০০+' : '500+',
      label: t('language') === 'bn' ? 'সন্তুষ্ট ব্যবহারকারী' : 'Satisfied Users',
      icon: Users,
      color: 'from-green-500 to-emerald-500'
    },
    {
      number: t('language') === 'bn' ? '৯৯%' : '99%',
      label: t('language') === 'bn' ? 'নির্ভুলতা' : 'Accuracy',
      icon: Award,
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  const features = [
    {
      icon: Bot,
      title: t('feature.ai-advice.title'),
      description: t('feature.ai-advice.desc'),
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'from-blue-50 to-indigo-50'
    },
    {
      icon: Shield,
      title: t('language') === 'bn' ? 'নিরাপদ ও গোপনীয়' : 'Safe & Confidential',
      description: t('language') === 'bn' ? 'আপনার ব্যক্তিগত তথ্য সম্পূর্ণ নিরাপদ এবং গোপনীয় রাখা হয়' : 'Your personal information is kept completely safe and confidential',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50'
    },
    {
      icon: Zap,
      title: t('feature.24-7.title'),
      description: t('feature.24-7.desc'),
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'from-yellow-50 to-orange-50'
    },
    {
      icon: Globe,
      title: t('language') === 'bn' ? 'সর্বত্র উপলব্ধ' : 'Available Everywhere',
      description: t('language') === 'bn' ? 'ইন্টারনেট সংযোগ থাকলেই যেকোনো জায়গা থেকে সেবা নিতে পারেন' : 'Get services from anywhere with internet connection',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50'
    }
  ];

  const team = [
    {
      name: "Md All Asmoule C. ",
      role: "Entrepreneur, AI Helper & Author",
      qualification: "B. Sc. in Software Engineering ",
      experience: " 7 বছর +",
      image:
        "https://knowledgepanelservice.com/wp-content/uploads/2023/10/IMG_5537-scaled-e1698578825600-683x1024.jpg",
    },
    {
      name: "Masuma Akter Akhi",
      role: "Front-end Developer",
      qualification: "B. Sc. in Software Engineering",
      experience: "2 বছর",
      image:
        "https://masuma-portfolio-website.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fphoto.4daccbc8.png&w=384&q=90",
    },

    {
      name: "Md Raihan Chowdhuory",
      role: "Back-end Developer",
      qualification: "B. Sc. in Software Engineering",
      experience: "2 বছর",
      image: "https://avatars.githubusercontent.com/u/145869865?v=4",
    },
  ];

  const values = [
    {
      icon: Target,
      title: t('language') === 'bn' ? 'আমাদের লক্ষ্য' : 'Our Goal',
      description: t('language') === 'bn' ? 'প্রতিটি বাংলাদেশীর হাতের মুঠোয় মানসম্পন্ন স্বাস্থ্য সেবা পৌঁছে দেওয়া' : 'Delivering quality healthcare to every Bangladeshi'
    },
    {
      icon: Eye,
      title: t('language') === 'bn' ? 'আমাদের দৃষ্টিভঙ্গি' : 'Our Vision',
      description: t('language') === 'bn' ? 'একটি সুস্থ বাংলাদেশ গড়ে তোলা যেখানে সবার জন্য স্বাস্থ্য সেবা সহজলভ্য' : 'Building a healthy Bangladesh where healthcare is accessible to all'
    },
    {
      icon: Lightbulb,
      title: t('language') === 'bn' ? 'আমাদের মূল্যবোধ' : 'Our Values',
      description: t('language') === 'bn' ? 'সততা, নির্ভরযোগ্যতা, গোপনীয়তা এবং মানবিক সেবার প্রতি অঙ্গীকার' : 'Commitment to honesty, reliability, privacy and humanitarian service'
    }
  ];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-green-500 text-white mb-6 shadow-2xl"
            whileHover={{ scale: 1.1, rotate: 10 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Heart className="w-12 h-12" />
          </motion.div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">আমাদের সম্পর্কে</h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('about.subtitle')}
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-r from-blue-50 via-purple-50 to-green-50 rounded-3xl shadow-2xl p-12 mb-16 border border-blue-200"
        >
          <div className="text-center">
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-r from-blue-500 to-green-500 text-white mb-6 shadow-2xl"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Sparkles className="w-10 h-10" />
            </motion.div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">আমাদের মিশন</h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              {t('about.mission.desc')}
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="text-center bg-white rounded-3xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div
                className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-4 shadow-lg`}
                whileHover={{ rotate: 15, scale: 1.1 }}
              >
                <stat.icon className="w-8 h-8" />
              </motion.div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</h3>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">আমাদের বিশেষত্ব</h2>
            <p className="text-xl text-gray-600">{t('about.features.subtitle')}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className={`bg-gradient-to-br ${feature.bgColor} rounded-3xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300`}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg`}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <feature.icon className="w-8 h-8" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-3xl shadow-2xl p-12 mb-16 border border-purple-200"
        >
          <div className="text-center mb-12">
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-r from-purple-500 to-indigo-500 text-white mb-6 shadow-2xl"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Heart className="w-10 h-10" />
            </motion.div>
            <h2 className="text-4xl font-bold text-purple-800 mb-4">আমাদের মূল্যবোধ</h2>
            <p className="text-xl text-purple-600">যে নীতিমালায় আমরা কাজ করি</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="text-center bg-white/60 rounded-2xl p-8 backdrop-blur-sm border border-purple-200 hover:bg-white/80 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -3 }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <value.icon className="w-8 h-8" />
                </motion.div>
                <h3 className="text-xl font-bold text-purple-800 mb-4">{value.title}</h3>
                <p className="text-purple-700 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-r from-green-500 to-emerald-500 text-white mb-6 shadow-2xl"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Users className="w-10 h-10" />
            </motion.div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">{t('about.team.title')}</h2>
            <p className="text-xl text-gray-600">{t('about.team.subtitle')}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-all duration-300 text-center"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 shadow-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm mb-1">{member.qualification}</p>
                <p className="text-gray-500 text-sm">অভিজ্ঞতা: {member.experience}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl shadow-2xl p-12 text-center text-white"
        >
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white/20 text-white mb-6 shadow-2xl backdrop-blur-sm"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <Stethoscope className="w-10 h-10" />
          </motion.div>
          <h2 className="text-4xl font-bold mb-4">আজই শুরু করুন</h2>
          <p className="text-xl mb-8 text-blue-100">
            {t('about.cta.desc')}
          </p>
          <motion.button
            className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/'}
          >
            {t('about.cta.button')}
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;