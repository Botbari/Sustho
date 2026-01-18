import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'bn' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Complete translation object for all pages
const translations = {
  // Header
  'site.title': {
    bn: 'সুস্থ আনে স্বাস্থ্য',
    en: 'Sustho Ane Shastho'
  },
  'site.subtitle': {
    bn: 'স্বাস্থ্য সহায়তা সেবা',
    en: 'Health Support Service'
  },
  'nav.home': {
    bn: 'হোম',
    en: 'Home'
  },
  'nav.health-disease': {
    bn: 'স্বাস্থ্য বিষয়ক রোগ',
    en: 'Health & Disease'
  },
  'nav.pregnancy-support': {
    bn: 'গর্ভাবস্থা সহায়তা',
    en: 'Pregnancy Support'
  },
  'nav.period-support': {
    bn: 'মাসিক সহায়তা',
    en: 'Period Support'
  },
  'nav.animal-bite': {
    bn: 'প্রাণীর কামড়',
    en: 'Animal Bite'
  },
  'nav.disaster-support': {
    bn: 'দুর্যোগ সহায়তা',
    en: 'Disaster Support'
  },
  'nav.child-health': {
    bn: 'শিশু স্বাস্থ্য পরামর্শ',
    en: 'Child Health'
  },
  'nav.medicine': {
    bn: 'ওষুধ পরামর্শ',
    en: 'Medicine Advice'
  },
  'nav.find-doctor': {
    bn: 'ডাক্তার খোঁজা',
    en: 'Find Doctor'
  },
  'nav.blood-donation': {
    bn: 'রক্তদান সহায়তা',
    en: 'Blood Donation'
  },
  'nav.health-alert': {
    bn: 'স্বাস্থ্য সতর্ক বার্তা',
    en: 'Health Alerts'
  },
  'nav.animal-treatment': {
    bn: 'পশু চিকিৎসা',
    en: 'Animal Treatment'
  },
  'nav.abortion-support': {
    bn: 'গর্ভপাত সহায়তা',
    en: 'Abortion Support'
  },
  'nav.ambulance': {
    bn: 'এম্বুলেন্স সেবা',
    en: 'Ambulance Service'
  },
  'nav.contact': {
    bn: 'যোগাযোগ',
    en: 'Contact'
  },
  'nav.about': {
    bn: 'আমাদের সম্পর্কে',
    en: 'About Us'
  },
  'nav.feedback': {
    bn: 'ফিডব্যাক সিস্টেম',
    en: 'Feedback System'
  },
  'nav.notification': {
    bn: 'নোটিফিকেশন সিস্টেম',
    en: 'Notification System'
  },
  'nav.price': {
    bn: 'দাম',
    en: 'Price'
  },

  // Home Page
  'home.hero.title': {
    bn: 'সুস্থ আনে স্বাস্থ্য',
    en: 'Sustho Ane Shastho'
  },
  'home.hero.subtitle': {
    bn: 'আধুনিক প্রযুক্তির সাহায্যে স্বাস্থ্য সেবা পান ঘরে বসে',
    en: 'Get healthcare services at home with modern technology'
  },
  'home.hero.cta': {
    bn: 'AI চালিত স্বাস্থ্য সহায়ক',
    en: 'AI-Powered Health Assistant'
  },
  'home.services.title': {
    bn: 'আমাদের সেবাসমূহ',
    en: 'Our Services'
  },
  'home.services.subtitle': {
    bn: 'বিশেষজ্ঞ পরামর্শ থেকে শুরু করে জরুরি সহায়তা - সব এক জায়গায়',
    en: 'From expert advice to emergency support - everything in one place'
  },
  'home.features.title': {
    bn: 'কেন আমাদের বেছে নিবেন?',
    en: 'Why Choose Us?'
  },
  'home.ai-support.title': {
    bn: 'AI সহায়তার মাধ্যম',
    en: 'AI Support Methods'
  },
  'home.ai-support.subtitle': {
    bn: 'আমাদের AI স্বাস্থ্য সহায়কের সাথে তিনটি ভিন্ন মাধ্যমে যোগাযোগ করুন',
    en: 'Connect with our AI health assistant through three different methods'
  },

  // Service descriptions
  'service.health-disease.title': {
    bn: 'স্বাস্থ্য বিষয়ক রোগ',
    en: 'Health & Disease'
  },
  'service.health-disease.desc': {
    bn: 'সাধারণ স্বাস্থ্য সমস্যা ও রোগের পরামর্শ',
    en: 'General health problems and disease advice'
  },
  'service.pregnancy-support.title': {
    bn: 'গর্ভাবস্থা সহায়তা',
    en: 'Pregnancy Support'
  },
  'service.pregnancy-support.desc': {
    bn: 'গর্ভাবস্থায় যত্ন ও পরামর্শ',
    en: 'Pregnancy care and advice'
  },
  'service.period-support.title': {
    bn: 'মাসিক সহায়তা',
    en: 'Period Support'
  },
  'service.period-support.desc': {
    bn: 'মাসিক চক্র সংক্রান্ত পরামর্শ',
    en: 'Menstrual cycle related advice'
  },
  'service.animal-treatment.title': {
    bn: 'পশু চিকিৎসা',
    en: 'Animal Treatment'
  },
  'service.animal-treatment.desc': {
    bn: 'পশু পাখির চিকিৎসা পরামর্শ',
    en: 'Animal and bird treatment advice'
  },
  'service.abortion-support.title': {
    bn: 'গর্ভপাত সহায়তা',
    en: 'Abortion Support'
  },
  'service.abortion-support.desc': {
    bn: 'গর্ভপাত পরবর্তী যত্ন ও পরামর্শ',
    en: 'Post-abortion care and advice'
  },
  'service.animal-bite.title': {
    bn: 'প্রাণীর কামড়',
    en: 'Animal Bite'
  },
  'service.animal-bite.desc': {
    bn: 'প্রাণীর কামড়ের প্রাথমিক চিকিৎসা',
    en: 'First aid for animal bites'
  },
  'service.child-health.title': {
    bn: 'শিশু স্বাস্থ্য পরামর্শ',
    en: 'Child Health Advice'
  },
  'service.child-health.desc': {
    bn: 'শিশুদের স্বাস্থ্য যত্ন ও পরামর্শ',
    en: 'Child health care and advice'
  },
  'service.medicine.title': {
    bn: 'ওষুধ পরামর্শ',
    en: 'Medicine Advice'
  },
  'service.medicine.desc': {
    bn: 'ওষুধ সংক্রান্ত তথ্য ও পরামর্শ',
    en: 'Medicine information and advice'
  },
  'service.find-doctor.title': {
    bn: 'ডাক্তার খোঁজা',
    en: 'Find Doctor'
  },
  'service.find-doctor.desc': {
    bn: 'আপনার এলাকার ডাক্তার খুঁজুন',
    en: 'Find doctors in your area'
  },
  'service.blood-donation.title': {
    bn: 'রক্তদান সহায়তা',
    en: 'Blood Donation'
  },
  'service.blood-donation.desc': {
    bn: 'রক্তদান ও গ্রহণের তথ্য',
    en: 'Blood donation and receiving information'
  },
  'service.health-alert.title': {
    bn: 'স্বাস্থ্য সতর্ক বার্তা',
    en: 'Health Alerts'
  },
  'service.health-alert.desc': {
    bn: 'জরুরি স্বাস্থ্য সতর্কতা',
    en: 'Emergency health alerts'
  },
  'service.ambulance.title': {
    bn: 'এম্বুলেন্স সেবা',
    en: 'Ambulance Service'
  },
  'service.ambulance.desc': {
    bn: 'জরুরি এম্বুলেন্স সেবা ও AI সহায়তা',
    en: 'Emergency ambulance service & AI support'
  },
  'service.disaster-support.title': {
    bn: 'দুর্যোগ সহায়তা',
    en: 'Disaster Support'
  },
  'service.disaster-support.desc': {
    bn: 'বন্যা, ঘূর্ণিঝড় ও দুর্যোগকালীন সহায়তা',
    en: 'Flood, cyclone & disaster support'
  },
  // Pricing Service Card
  'service.price.title': {
    bn: 'প্রাইসিং',
    en: 'Pricing'
  },
  'service.price.desc': {
    bn: 'সাশ্রয়ী সাবস্ক্রিপশন প্ল্যান ও দান',
    en: 'Affordable plans and donations'
  },

  // Common elements
  'common.ai-chat-support': {
    bn: 'AI চ্যাট সহায়তা',
    en: 'AI Chat Support'
  },
  'common.instant-answer': {
    bn: 'তাৎক্ষণিক উত্তর',
    en: 'Instant Answer'
  },
  'common.detailed-advice': {
    bn: 'বিস্তারিত পরামর্শ',
    en: 'Detailed Advice'
  },
  'common.available-24-7': {
    bn: '২৪/৭ উপলব্ধ',
    en: '24/7 Available'
  },

  // Features
  'feature.ai-advice.title': {
    bn: 'AI চালিত পরামর্শ',
    en: 'AI-Powered Advice'
  },
  'feature.ai-advice.desc': {
    bn: 'অত্যাধুনিক কৃত্রিম বুদ্ধিমত্তার সাহায্যে তাৎক্ষণিক স্বাস্থ্য পরামর্শ',
    en: 'Instant health advice with advanced artificial intelligence'
  },
  'feature.24-7.title': {
    bn: '২৪/৭ উপলব্ধ',
    en: '24/7 Available'
  },
  'feature.24-7.desc': {
    bn: 'দিন-রাত যেকোনো সময় আমাদের সেবা পাবেন',
    en: 'Get our services anytime, day or night'
  },
  'feature.expert-advice.title': {
    bn: 'বিশেষজ্ঞ পরামর্শ',
    en: 'Expert Advice'
  },
  'feature.expert-advice.desc': {
    bn: 'অভিজ্ঞ চিকিৎসকদের তত্ত্বাবধানে তৈরি পরামর্শ',
    en: 'Advice created under supervision of experienced doctors'
  },

  // AI Support Methods
  'ai-method.text.title': {
    bn: 'টেক্সট মেসেজ',
    en: 'Text Message'
  },
  'ai-method.text.desc': {
    bn: 'লিখে আপনার স্বাস্থ্য সমস্যার কথা জানান এবং তাৎক্ষণিক পরামর্শ পান',
    en: 'Write about your health problems and get instant advice'
  },
  'ai-method.image.title': {
    bn: 'ছবি আপলোড',
    en: 'Image Upload'
  },
  'ai-method.image.desc': {
    bn: 'প্রেসক্রিপশন, টেস্ট রিপোর্ট বা স্বাস্থ্য সমস্যার ছবি পাঠিয়ে পরামর্শ নিন',
    en: 'Send photos of prescriptions, test reports or health problems for advice'
  },
  'ai-method.voice.title': {
    bn: 'ভয়েস মেসেজ',
    en: 'Voice Message'
  },
  'ai-method.voice.desc': {
    bn: 'কথা বলে আপনার সমস্যা বর্ণনা করুন এবং কণ্ঠস্বরে পরামর্শ পান',
    en: 'Describe your problems by speaking and get voice advice'
  },

  // About Page
  'about.title': {
    bn: 'আমাদের সম্পর্কে',
    en: 'About Us'
  },
  'about.subtitle': {
    bn: 'সুস্থ আনে স্বাস্থ্য - বাংলাদেশের প্রথম AI চালিত স্বাস্থ্য সেবা প্ল্যাটফর্ম',
    en: 'Sustho Ane Shastho - Bangladesh\'s first AI-powered health service platform'
  },
  'about.mission.title': {
    bn: 'আমাদের মিশন',
    en: 'Our Mission'
  },
  'about.mission.desc': {
    bn: 'আমরা বিশ্বাস করি যে প্রতিটি মানুষের মানসম্পন্ন স্বাস্থ্য সেবা পাওয়ার অধিকার রয়েছে। আমাদের AI চালিত প্ল্যাটফর্ম ব্যবহার করে আমরা বাংলাদেশের প্রতিটি মানুষের কাছে সাশ্রয়ী, নির্ভরযোগ্য এবং তাৎক্ষণিক স্বাস্থ্য সেবা পৌঁছে দিতে চাই।',
    en: 'We believe that every person has the right to quality healthcare. Using our AI-powered platform, we want to deliver affordable, reliable and instant healthcare to every person in Bangladesh.'
  },
  'about.features.title': {
    bn: 'আমাদের বিশেষত্ব',
    en: 'Our Specialties'
  },
  'about.features.subtitle': {
    bn: 'কেন আমাদের প্ল্যাটফর্ম আলাদা',
    en: 'Why our platform is different'
  },
  'about.team.title': {
    bn: 'আমাদের টিম',
    en: 'Our Team'
  },
  'about.team.subtitle': {
    bn: 'অভিজ্ঞ পেশাদারদের একটি দল',
    en: 'A team of experienced professionals'
  },
  'about.cta.title': {
    bn: 'আজই শুরু করুন',
    en: 'Start Today'
  },
  'about.cta.desc': {
    bn: 'আমাদের AI স্বাস্থ্য সহায়কের সাথে কথা বলুন এবং তাৎক্ষণিক পরামর্শ নিন',
    en: 'Talk to our AI health assistant and get instant advice'
  },
  'about.cta.button': {
    bn: 'AI সহায়তা নিন',
    en: 'Get AI Support'
  },

  // Contact Page
  'contact.title': {
    bn: 'যোগাযোগ',
    en: 'Contact'
  },
  'contact.subtitle': {
    bn: 'আমাদের সাথে যোগাযোগ করুন এবং আপনার স্বাস্থ্য সেবার অভিজ্ঞতা শেয়ার করুন',
    en: 'Contact us and share your healthcare experience'
  },
  'contact.form.title': {
    bn: 'আমাদের লিখুন',
    en: 'Write to Us'
  },
  'contact.form.subtitle': {
    bn: 'আপনার মতামত ও প্রশ্ন পাঠান',
    en: 'Send your feedback and questions'
  },
  'contact.info.title': {
    bn: 'যোগাযোগের তথ্য',
    en: 'Contact Information'
  },
  'contact.info.subtitle': {
    bn: 'আমাদের সাথে সরাসরি যোগাযোগ করুন',
    en: 'Contact us directly'
  },

  // Medicine Page
  'medicine.title': {
    bn: 'ওষুধ পরামর্শ',
    en: 'Medicine Advice'
  },
  'medicine.subtitle': {
    bn: 'সাধারণ ওষুধ সম্পর্কে তথ্য এবং নিরাপদ ব্যবহারের পরামর্শ',
    en: 'Information about common medicines and safe usage advice'
  },
  'medicine.safety.title': {
    bn: 'ওষুধ ব্যবহারের নিরাপত্তা',
    en: 'Medicine Safety Guidelines'
  },

  // Find Doctor Page
  'doctor.title': {
    bn: 'ডাক্তার খোঁজা',
    en: 'Find Doctor'
  },
  'doctor.subtitle': {
    bn: 'আপনার এলাকার বিশেষজ্ঞ ডাক্তারদের খুঁজে নিন',
    en: 'Find specialist doctors in your area'
  },
  'doctor.register.title': {
    bn: 'ডাক্তার হিসেবে যোগ দিন',
    en: 'Join as a Doctor'
  },
  'doctor.register.desc': {
    bn: 'আপনি একজন ডাক্তার? আমাদের প্ল্যাটফর্মে যোগ দিয়ে রোগীদের সেবা করুন',
    en: 'Are you a doctor? Join our platform to serve patients'
  },

  // Blood Donation Page
  'blood.title': {
    bn: 'রক্তদান সহায়তা',
    en: 'Blood Donation Support'
  },
  'blood.subtitle': {
    bn: 'জীবন বাঁচানোর মহান কাজে অংশগ্রহণ করুন। রক্তদাতা হিসেবে নিবন্ধন করুন অথবা রক্তের প্রয়োজন পোস্ট করুন।',
    en: 'Participate in the noble work of saving lives. Register as a blood donor or post blood requirements.'
  },
  'blood.donors.title': {
    bn: 'রক্তদাতা খুঁজুন',
    en: 'Find Blood Donors'
  },
  'blood.requests.title': {
    bn: 'রক্তের অনুরোধ',
    en: 'Blood Requests'
  },

  // Health Alert Page
  'alert.title': {
    bn: 'স্বাস্থ্য সতর্ক বার্তা',
    en: 'Health Alerts'
  },
  'alert.subtitle': {
    bn: 'গুরুত্বপূর্ণ স্বাস্থ্য সতর্কতা এবং জরুরি তথ্য পান',
    en: 'Get important health alerts and emergency information'
  },

  // Feedback Page
  'feedback.title': {
    bn: 'ফিডব্যাক সিস্টেম',
    en: 'Feedback System'
  },
  'feedback.subtitle': {
    bn: 'আপনার মতামত ও পরামর্শ আমাদের সেবা উন্নত করতে সাহায্য করে',
    en: 'Your feedback and suggestions help us improve our services'
  },

  // Notification Page
  'notification.title': {
    bn: 'নোটিফিকেশন সিস্টেম',
    en: 'Notification System'
  },
  'notification.subtitle': {
    bn: 'ওষুধ খাওয়ার সময় এবং ডাক্তার দেখানোর রিমাইন্ডার সিস্টেম',
    en: 'Medicine reminder and doctor visit reminder system'
  },

  // Child Health Page
  'child.title': {
    bn: 'শিশু স্বাস্থ্য পরামর্শ',
    en: 'Child Health Advice'
  },
  'child.subtitle': {
    bn: 'শিশুদের সুস্বাস্থ্য ও সঠিক বৃদ্ধির জন্য সম্পূর্ণ গাইডলাইন',
    en: 'Complete guidelines for children\'s good health and proper growth'
  },

  // Period Support Page
  'period.title': {
    bn: 'মাসিক সহায়তা',
    en: 'Period Support'
  },
  'period.subtitle': {
    bn: 'মাসিক চক্র সম্পর্কে সঠিক তথ্য এবং স্বাস্থ্যকর জীবনযাত্রার পরামর্শ',
    en: 'Accurate information about menstrual cycle and healthy lifestyle advice'
  },

  // Animal Bite Page
  'bite.title': {
    bn: 'প্রাণীর কামড়',
    en: 'Animal Bite'
  },
  'bite.subtitle': {
    bn: 'প্রাণীর কামড়ের প্রাথমিক চিকিৎসা এবং জরুরি পরামর্শ',
    en: 'First aid for animal bites and emergency advice'
  },

  // Animal Treatment Page
  'animal.title': {
    bn: 'পশু চিকিৎসা',
    en: 'Animal Treatment'
  },
  'animal.subtitle': {
    bn: 'পশু পাখির রোগ চিকিৎসা এবং স্বাস্থ্য পরামর্শ',
    en: 'Animal and bird disease treatment and health advice'
  },

  // Abortion Support Page
  'abortion.title': {
    bn: 'গর্ভপাত সহায়তা',
    en: 'Abortion Support'
  },
  'abortion.subtitle': {
    bn: 'গর্ভপাত পরবর্তী শারীরিক ও মানসিক যত্ন এবং সহায়তা',
    en: 'Post-abortion physical and mental care and support'
  },

  // Disaster Support Page
  'disaster.title': {
    bn: 'দুর্যোগ সহায়তা',
    en: 'Disaster Support'
  },
  'disaster.subtitle': {
    bn: 'বন্যা, ঘূর্ণিঝড় ও অন্যান্য দুর্যোগে জরুরি সহায়তা এবং নির্দেশনা',
    en: 'Emergency assistance and guidance for floods, cyclones and other disasters'
  },

  // Health Disease Page
  'health.title': {
    bn: 'স্বাস্থ্য বিষয়ক রোগ',
    en: 'Health & Disease'
  },
  'health.subtitle': {
    bn: 'সাধারণ স্বাস্থ্য সমস্যা সম্পর্কে জানুন এবং AI সহায়তা নিন। রোগ সিলেক্ট করুন অথবা টেস্ট রিপোর্ট আপলোড করে বিশ্লেষণ করান।',
    en: 'Learn about common health problems and get AI assistance. Select diseases or upload test reports for analysis.'
  },

  // Common Buttons
  'button.send': {
    bn: 'পাঠান',
    en: 'Send'
  },
  'button.submit': {
    bn: 'জমা দিন',
    en: 'Submit'
  },
  'button.cancel': {
    bn: 'বাতিল',
    en: 'Cancel'
  },
  'button.save': {
    bn: 'সংরক্ষণ',
    en: 'Save'
  },
  'button.edit': {
    bn: 'সম্পাদনা',
    en: 'Edit'
  },
  'button.delete': {
    bn: 'মুছে দিন',
    en: 'Delete'
  },
  'button.view': {
    bn: 'দেখুন',
    en: 'View'
  },
  'button.download': {
    bn: 'ডাউনলোড',
    en: 'Download'
  },
  'button.upload': {
    bn: 'আপলোড',
    en: 'Upload'
  },
  'button.search': {
    bn: 'খুঁজুন',
    en: 'Search'
  },
  'button.filter': {
    bn: 'ফিল্টার',
    en: 'Filter'
  },
  'button.register': {
    bn: 'নিবন্ধন',
    en: 'Register'
  },
  'button.login': {
    bn: 'লগইন',
    en: 'Login'
  },
  'button.contact': {
    bn: 'যোগাযোগ',
    en: 'Contact'
  },
  'button.help': {
    bn: 'সাহায্য',
    en: 'Help'
  },
  'button.emergency': {
    bn: 'জরুরি',
    en: 'Emergency'
  },
  'button.call': {
    bn: 'কল করুন',
    en: 'Call'
  },

  // Common Labels
  'label.name': {
    bn: 'নাম',
    en: 'Name'
  },
  'label.email': {
    bn: 'ইমেইল',
    en: 'Email'
  },
  'label.phone': {
    bn: 'ফোন',
    en: 'Phone'
  },
  'label.address': {
    bn: 'ঠিকানা',
    en: 'Address'
  },
  'label.age': {
    bn: 'বয়স',
    en: 'Age'
  },
  'label.gender': {
    bn: 'লিঙ্গ',
    en: 'Gender'
  },
  'label.location': {
    bn: 'অবস্থান',
    en: 'Location'
  },
  'label.date': {
    bn: 'তারিখ',
    en: 'Date'
  },
  'label.time': {
    bn: 'সময়',
    en: 'Time'
  },
  'label.message': {
    bn: 'বার্তা',
    en: 'Message'
  },
  'label.description': {
    bn: 'বিবরণ',
    en: 'Description'
  },
  'label.category': {
    bn: 'ক্যাটাগরি',
    en: 'Category'
  },
  'label.status': {
    bn: 'অবস্থা',
    en: 'Status'
  },
  'label.priority': {
    bn: 'অগ্রাধিকার',
    en: 'Priority'
  },

  // Footer
  'footer.description': {
    bn: 'আপনার স্বাস্থ্য সেবার নির্ভরযোগ্য সহায়ক',
    en: 'Your reliable healthcare service assistant'
  },
  'footer.important-links': {
    bn: 'গুরুত্বপূর্ণ লিংক',
    en: 'Important Links'
  },
  'footer.contact': {
    bn: 'যোগাযোগ',
    en: 'Contact'
  },
  'footer.service-hours': {
    bn: 'সেবা সময়',
    en: 'Service Hours'
  },
  'footer.all-days': {
    bn: 'সপ্তাহের সবদিন',
    en: 'All days of the week'
  },
  'footer.online-service': {
    bn: '২৪/৭ অনলাইন সেবা',
    en: '24/7 Online Service'
  },
  'footer.emergency': {
    bn: 'জরুরি সেবা: ৯৯৯',
    en: 'Emergency Service: 999'
  },
  'footer.health-portal': {
    bn: 'স্বাস্থ্য বাতায়ন: ১৬২৬৩',
    en: 'Health Portal: 16263'
  },
  'footer.copyright': {
    bn: '© ২০২৫ সুস্থ আনে স্বাস্থ্য। সর্বস্বত্ব সংরক্ষিত।',
    en: '© 2025 Sustho Ane Shastho. All rights reserved.'
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('bn');

  const t = (key: string): string => {
    const translation = translations[key as keyof typeof translations];
    if (!translation) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    return translation[language] || translation.bn || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};