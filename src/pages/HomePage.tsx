import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import AIPopup from "../components/AIPopup";
import VoiceChatbot from "../components/VoiceChatbot";
import CameraDetection from "../components/CameraDetection";
import {
  Heart,
  Baby,
  Calendar,
  Stethoscope,
  AlertTriangle,
  Shield,
  Users,
  Pill,
  UserCheck,
  Droplets,
  Bell,
  Sparkles,
  Type,
  Image,
  Mic,
  Truck,
  Eye,
  CreditCard,
  Leaf
} from 'lucide-react';

const HomePage: React.FC = () => {
  const [isAIPopupOpen, setIsAIPopupOpen] = React.useState(false);
  const [isVoiceChatbotOpen, setIsVoiceChatbotOpen] = React.useState(false);
  const [isCameraOpen, setIsCameraOpen] = React.useState(false);
  const { t } = useLanguage();

  const services = [
    {
      icon: Heart,
      title: t("service.health-disease.title"),
      description: t("service.health-disease.desc"),
      path: "/health-disease",
      gradient: "from-red-500 to-pink-500",
      hasChat: true,
    },
    {
      icon: Baby,
      title: t("service.pregnancy-support.title"),
      description: t("service.pregnancy-support.desc"),
      path: "/pregnancy-support",
      gradient: "from-pink-500 to-purple-500",
      hasChat: true,
    },
    {
      icon: Calendar,
      title: t("service.period-support.title"),
      description: t("service.period-support.desc"),
      path: "/period-support",
      gradient: "from-purple-500 to-indigo-500",
      hasChat: true,
    },
    {
      icon: Stethoscope,
      title: t("service.animal-treatment.title"),
      description: t("service.animal-treatment.desc"),
      path: "/animal-treatment",
      gradient: "from-green-500 to-emerald-500",
      hasChat: true,
    },
    {
      icon: AlertTriangle,
      title: t("service.abortion-support.title"),
      description: t("service.abortion-support.desc"),
      path: "/abortion-support",
      gradient: "from-orange-500 to-red-500",
      hasChat: true,
    },
    {
      icon: Shield,
      title: t("service.animal-bite.title"),
      description: t("service.animal-bite.desc"),
      path: "/animal-bite",
      gradient: "from-yellow-500 to-orange-500",
      hasChat: true,
    },
    {
      icon: Users,
      title: t("service.child-health.title"),
      description: t("service.child-health.desc"),
      path: "/child-health",
      gradient: "from-blue-500 to-cyan-500",
      hasChat: true,
    },
    {
      icon: Pill,
      title: t("service.medicine.title"),
      description: t("service.medicine.desc"),
      path: "/medicine",
      gradient: "from-teal-500 to-green-500",
      hasChat: false,
    },
    {
      icon: UserCheck,
      title: t("service.find-doctor.title"),
      description: t("service.find-doctor.desc"),
      path: "/find-doctor",
      gradient: "from-indigo-500 to-purple-500",
      hasChat: false,
    },
    {
      icon: Droplets,
      title: t("service.blood-donation.title"),
      description: t("service.blood-donation.desc"),
      path: "/blood-donation",
      gradient: "from-red-500 to-rose-500",
      hasChat: false,
    },
    {
      icon: Bell,
      title: t("service.health-alert.title"),
      description: t("service.health-alert.desc"),
      path: "/health-alert",
      gradient: "from-amber-500 to-yellow-500",
      hasChat: false,
    },
    {
      icon: Truck,
      title: t("service.ambulance.title"),
      description: t("service.ambulance.desc"),
      path: "/ambulance",
      gradient: "from-red-500 to-orange-500",
      hasChat: true,
    },
    {
      icon: CreditCard,
      title: t("service.price.title"),
      description: t("service.price.desc"),
      path: "/price",
      gradient: "from-blue-600 to-green-600",
      hasChat: false,
    },
    {
      icon: AlertTriangle,
      title: t('service.disaster-support.title'),
      description: t('service.disaster-support.desc'),
      path: '/disaster-support',
      gradient: 'from-red-500 to-orange-500',
      hasChat: true
    },
    {
  icon: Leaf,
 title: t('service.tree-health.title'),
 description: t('service.tree-health.desc'),
  path: '/tree-health',
  gradient: 'from-green-600 to-emerald-600',
  hasChat: true
}
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-3 py-3">
              {t("home.hero.title")}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              {t("home.hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <motion.div
                className="inline-block bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg cursor-pointer"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                  y: -2,
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsAIPopupOpen(true)}
              >
                {t("home.hero.cta")}
              </motion.div>

              {/* Eye Button - 3D Style */}
              <motion.div
                className="relative group"
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsVoiceChatbotOpen(true)}
                style={{
                  transform: "perspective(1000px) rotateX(5deg)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                <motion.div
                  className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-2xl cursor-pointer flex items-center space-x-3"
                  whileHover={{
                    boxShadow: "0 25px 50px rgba(147, 51, 234, 0.4)",
                    transform:
                      "perspective(1000px) rotateX(10deg) translateY(-5px)",
                  }}
                  transition={{ type: "spring", stiffness: 400 }}
                  style={{
                    transform: "perspective(1000px) rotateX(5deg)",
                    boxShadow: "0 15px 35px rgba(147, 51, 234, 0.3)",
                  }}
                >
                  <Eye className="w-6 h-6" />
                  <span>Eye</span>

                  {/* Floating particles */}
                  <div className="absolute -top-2 -right-2 w-2 h-2 bg-white/30 rounded-full animate-bounce" />
                  <div className="absolute -bottom-2 -left-2 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {t("home.services.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t("home.services.subtitle")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={service.path}>
                  <motion.div
                    className="group relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100 overflow-hidden"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 25px 50px rgba(0,0,0,0.1)",
                      y: -5,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Background Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    />

                    {/* Icon */}
                    <motion.div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} text-white mb-6`}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <service.icon className="w-8 h-8" />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>

                    {/* AI Chat Badge */}
                    {service.hasChat && (
                      <motion.div
                        className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Heart className="w-4 h-4 mr-1" />
                        {t("common.ai-chat-support")}
                      </motion.div>
                    )}

                    {/* Hover Arrow */}
                    <motion.div
                      className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className="text-blue-600 font-bold">→</span>
                    </motion.div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {t("home.features.title")}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: t("feature.ai-advice.title"),
                description: t("feature.ai-advice.desc"),
              },
              {
                icon: Shield,
                title: t("feature.24-7.title"),
                description: t("feature.24-7.desc"),
              },
              {
                icon: Users,
                title: t("feature.expert-advice.title"),
                description: t("feature.expert-advice.desc"),
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-green-600 text-white mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <feature.icon className="w-8 h-8" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Support Information Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white mb-6 shadow-2xl"
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ type: "spring", stiffness: 400 }}
              style={{
                transform: "perspective(1000px) rotateX(5deg)",
                boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)",
              }}
            >
              <Sparkles className="w-10 h-10" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {t("home.ai-support.title")}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t("home.ai-support.subtitle")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Type,
                title: t("ai-method.text.title"),
                description: t("ai-method.text.desc"),
                color: "from-blue-500 to-indigo-500",
                bgColor: "from-blue-50 to-indigo-50",
                borderColor: "border-blue-200",
                features: [
                  t("common.instant-answer"),
                  t("common.detailed-advice"),
                  t("common.available-24-7"),
                ],
              },
              {
                icon: Image,
                title: t("ai-method.image.title"),
                description: t("ai-method.image.desc"),
                color: "from-green-500 to-emerald-500",
                bgColor: "from-green-50 to-emerald-50",
                borderColor: "border-green-200",
                features: ["Image Analysis", "Report Review", "Quick Solution"],
              },
              {
                icon: Mic,
                title: t("ai-method.voice.title"),
                description: t("ai-method.voice.desc"),
                color: "from-red-500 to-pink-500",
                bgColor: "from-red-50 to-pink-50",
                borderColor: "border-red-200",
                features: [
                  "Voice Recognition",
                  "Natural Conversation",
                  "Easy to Use",
                ],
              },
            ].map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                className={`group relative bg-gradient-to-br ${method.bgColor} rounded-3xl p-8 border-2 ${method.borderColor} hover:shadow-2xl transition-all duration-500 overflow-hidden`}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                }}
                style={{
                  transform: "perspective(1000px) rotateX(2deg)",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* 3D Background Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Floating particles */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-white/30 rounded-full animate-bounce" />
                <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse" />

                <motion.div
                  className={`w-20 h-20 bg-gradient-to-br ${method.color} rounded-3xl flex items-center justify-center text-white mx-auto mb-6 shadow-xl relative overflow-hidden`}
                  whileHover={{ rotate: 15, scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  style={{
                    transform: "perspective(500px) rotateX(10deg)",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
                  <method.icon className="w-10 h-10 relative z-10" />
                </motion.div>

                <h3 className="font-bold text-gray-800 mb-4 text-2xl group-hover:text-indigo-600 transition-colors duration-300 text-center">
                  {method.title}
                </h3>

                <p className="text-gray-700 leading-relaxed text-center mb-6 text-lg">
                  {method.description}
                </p>

                <div className="space-y-3">
                  {method.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center justify-center text-gray-600 bg-white/60 rounded-xl p-3 backdrop-blur-sm"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i }}
                    >
                      <span
                        className={`w-3 h-3 bg-gradient-to-r ${method.color} rounded-full mr-3 shadow-sm`}
                      ></span>
                      {feature}
                    </motion.div>
                  ))}
                </div>

                {/* Hover Effect Border */}
                <div
                  className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:${method.borderColor} transition-colors duration-300`}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                কিভাবে ব্যবহার করবেন?
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                নিচের "AI চালিত স্বাস্থ্য সহায়ক" বাটনে ক্লিক করুন এবং আপনার
                পছন্দের মাধ্যমে (টেক্সট, ছবি বা ভয়েস) আমাদের AI এর সাথে কথা
                বলুন। আমাদের উন্নত AI সিস্টেম আপনার প্রশ্নের সঠিক উত্তর দিতে
                সক্ষম।
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Popup */}
      <AIPopup isOpen={isAIPopupOpen} onClose={() => setIsAIPopupOpen(false)} />

      {/* Voice Chatbot */}
      <VoiceChatbot
        isOpen={isVoiceChatbotOpen}
        onClose={() => setIsVoiceChatbotOpen(false)}
        onOpenCamera={() => setIsCameraOpen(true)}
      />

      {/* Camera Detection */}
      <CameraDetection
        isOpen={isCameraOpen}
        onClose={() => setIsCameraOpen(false)}
      />
    </div>
  );
};

export default HomePage;
