// components/FAQSection.tsx
'use client';

import React, { useState } from 'react';
import { FaChevronDown, FaComments, FaMobileAlt, FaLayerGroup } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import ContactUs from '@/components/ContactUs';
import Address from '@/components/Address';
import Footer from '@/components/Footer';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  icon: React.ReactNode;
}

const FAQSection: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: 'How does fintech differ from traditional banking?',
      answer: 'Fintech companies leverage technology to provide financial services more efficiently, often with lower costs, faster processing times, and better user experiences compared to traditional banks. They typically focus on digital-first solutions, mobile accessibility, and innovative features like AI-powered insights and automated financial management.',
      icon: <FaComments className="w-5 h-5" />
    },
    {
      id: 2,
      question: 'How does mobile banking work?',
      answer: 'Mobile banking works through secure applications that connect to your bank\'s systems via encrypted internet connections. Users can access account information, transfer funds, pay bills, and perform various banking functions directly from their smartphone or tablet. The apps use multi-factor authentication and encryption to ensure security.',
      icon: <FaMobileAlt className="w-5 h-5" />
    },
    {
      id: 3,
      question: 'How do cryptocurrencies work?',
      answer: 'Cryptocurrencies are digital currencies that use blockchain technology to secure transactions and control the creation of new units. They operate on decentralized networks of computers, using cryptographic techniques to verify transactions and maintain a public ledger. Popular cryptocurrencies include Bitcoin, Ethereum, and many others.',
      icon: <FaLayerGroup className="w-5 h-5" />
    }
  ];

  const toggleItem = (id: number): void => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div>
    <section className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - FAQ Questions */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, staggerChildren: 0.2 }}
          >
            {faqItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 transition-all duration-300 ${
                  openItem === item.id ? 'bg-white/20' : 'hover:bg-white/15'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.button
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between p-6 text-left"
                  type="button"
                  aria-expanded={openItem === item.id}
                  whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                >
                  <div className="flex items-center space-x-4">
                    <motion.div 
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 flex-shrink-0"
                      whileHover={{ rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {item.icon}
                    </motion.div>
                    <h3 className="text-white font-medium text-lg pr-4">
                      {item.question}
                    </h3>
                  </div>
                  <motion.div 
                    className="flex-shrink-0"
                    animate={{ rotate: openItem === item.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown className="w-6 h-6 text-white/70" />
                  </motion.div>
                </motion.button>
                
                <AnimatePresence>
                  {openItem === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <motion.div 
                        className="px-6 pb-6"
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        <div className="ml-16 text-white/80 leading-relaxed">
                          {item.answer}
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side - FAQ Content */}
          <motion.div 
            className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="inline-block">
                  <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                    FAQ
                  </span>
                  <motion.div 
                    className="w-12 h-1 bg-blue-600 mt-1"
                    initial={{ width: 0 }}
                    animate={{ width: '3rem' }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  ></motion.div>
                </div>
              </motion.div>
              
              <motion.h2 
                className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Frequently Asked Questions
              </motion.h2>
              
              <motion.p 
                className="text-gray-600 leading-relaxed text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Affronting discretion as do is announcing. Now months esteem oppose nearer enable too six. She 
                numerous unlocked you perceive speedily. Affixed offence spirits or ye of offices between. Real on shot 
                it were four an as.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    <section>
        <ContactUs/>
        <Address/>
        <Footer/>

    </section>
    </div>
  );
};

export default FAQSection;
