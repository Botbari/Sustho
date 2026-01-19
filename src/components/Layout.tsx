import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Menu, X, Home, Globe, Coins } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { label } from 'framer-motion/client';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const menuItems = [
    { path: '/', label: t('nav.home'), icon: Home },
    { path: '/health-disease', label: t('nav.health-disease') }, 
    { path: '/tree-health', label: t('nav.tree-health') },
    { path: '/pregnancy-support', label: t('nav.pregnancy-support') },
    { path: '/period-support', label: t('nav.period-support') },
    { path: '/animal-bite', label: t('nav.animal-bite') },
    { path: '/disaster-support', label: t('nav.disaster-support') },
    { path: '/child-health', label: t('nav.child-health') },
    { path: '/medicine', label: t('nav.medicine') },
    { path: '/find-doctor', label: t('nav.find-doctor') },
    { path: '/blood-donation', label: t('nav.blood-donation') },
    { path: '/health-alert', label: t('nav.health-alert') },
    { path: '/animal-treatment', label: t('nav.animal-treatment') },
    { path: '/abortion-support', label: t('nav.abortion-support') },
    { path: '/ambulance', label: t('nav.ambulance') },
    { path: '/contact', label: t('nav.contact') },
    { path: '/about', label: t('nav.about') },
    { path: '/feedback', label: t('nav.feedback') },
    { path: '/notification', label: t('nav.notification') },
    { path: '/price', label: t('nav.price') }

  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <motion.header 
        className="bg-white/95 backdrop-blur-lg shadow-lg border-b border-blue-100 sticky top-0 z-50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <motion.div
                className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-xl"
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Heart className="w-8 h-8 text-white" />
              </motion.div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  {t('site.title')}
                </h1>
                <p className="text-sm text-gray-600">{t('site.subtitle')}</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {menuItems.slice(0, 7).map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    location.pathname === item.path
                      ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              <Link
                to="/price"
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  location.pathname === '/price'
                    ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {t('nav.price')}
              </Link>

              <Link
                to="/about"
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  location.pathname === '/about'
                    ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {t('nav.about')}
              </Link>
              
              {/* Language Switcher */}
              <motion.button
                onClick={() => setLanguage(language === 'bn' ? 'en' : 'bn')}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg font-medium bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-purple-600 hover:to-indigo-600 transition-all duration-200 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Globe className="w-4 h-4" />
                <span>{language === 'bn' ? 'English' : 'বাংলা'}</span>
                
              </motion.button>
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 font-bold">
  3000 Points
</div>

            </nav>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 rounded-lg bg-blue-50 text-blue-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            className="lg:hidden bg-white border-t border-blue-100"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="grid grid-cols-1 gap-2">
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                      location.pathname === item.path
                        ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg'
                        : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </motion.header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <motion.footer 
        className="bg-gradient-to-r from-blue-900 to-green-900 text-white py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">{t('site.title')}</h3>
              <p className="text-blue-100">{t('footer.description')}</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('footer.important-links')}</h4>
              <div className="space-y-2">
                <Link to="/about" className="block text-blue-100 hover:text-white transition-colors">
                  {t('nav.about')}
                </Link>
                <Link to="/contact" className="block text-blue-100 hover:text-white transition-colors">
                  {t('nav.contact')}
                </Link>
                <Link to="/health-alert" className="block text-blue-100 hover:text-white transition-colors">
                  {t('nav.health-alert')}
                </Link>
                <Link to="/disaster-support" className="block text-blue-100 hover:text-white transition-colors">
                  {t('nav.disaster-support')}
                </Link>
                <Link to="/feedback" className="block text-blue-100 hover:text-white transition-colors">
                  {t('nav.feedback')}
                </Link>
                <Link to="/notification" className="block text-blue-100 hover:text-white transition-colors">
                  {t('nav.notification')}
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('footer.contact')}</h4>
              <div className="text-blue-100 space-y-2">
                <p>ইমেইল: info@sustho.com</p>
                <p>ফোন: +৮৮০ ১২৩৪-৫৬৭৮৯০</p>
                <p>ঠিকানা: ধানমন্ডি, ঢাকা</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">{t('footer.service-hours')}</h4>
              <div className="text-blue-100 space-y-2">
                <p>{t('footer.all-days')}</p>
                <p>{t('footer.online-service')}</p>
                <p>{t('footer.emergency')}</p>
                <p>{t('footer.health-portal')}</p>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-700 mt-8 pt-8 text-center text-blue-100">
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Layout;