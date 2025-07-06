/* eslint-disable @next/next/no-html-link-for-pages */
'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
// import { useRouter } from 'next/navigation';

interface NavItem {
  label: string;
  href: string;
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const router = useRouter();

  // Define your navigation items here - customize these based on your routes
  const navItems: NavItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Work', href: '/work' },
    { label: 'Quote', href: '/quote' },
    { label: 'Contact Us', href: '/contactUs' }

  ];

//   const handleNavClick = (href: string): void => {
//     router.push(href);
//     setIsMenuOpen(false);
//   };

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6">
        {/* Logo */}
        <div className="text-black font-bold  text-2xl">
          {/* <a href="/"></a> */}
          <Link className='' href="/">LOGO</Link>
        </div>

        {/* Burger Menu Button */}
        <div className='  p-2 bg-black rounded-full'>

        
        <button
          onClick={toggleMenu}
          className="relative cursor-pointer w-8 h-8 flex flex-col justify-center items-center space-y-1 z-50"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={{
              rotate: isMenuOpen ? 45 : 0,
              y: isMenuOpen ? 8 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="w-6 h-0.5 bg-white block origin-center"
          />
          <motion.span
            animate={{
              opacity: isMenuOpen ? 0 : 1,
            }}
            transition={{ duration: 0.3 }}
            className="w-6 h-0.5 bg-white block"
          />
          <motion.span
            animate={{
              rotate: isMenuOpen ? -45 : 0,
              y: isMenuOpen ? -8 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="w-6 h-0.5 bg-white block origin-center"
          />
        </button>
        </div>
      </nav>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ 
                type: 'tween',
                duration: 0.4,
                ease: 'easeInOut'
              }}
              className="fixed  top-0 left-0 right-0 h-2/4 bg-gradient-to-b from-gray-900/95 to-gray-800/95 backdrop-blur-lg z-40 pt-20 pb-8"
            >
              <div className="container mx-auto px-6">
                <ul className="space-y-4">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className='grid mt-2 grid-cols-2 text-white'
                      transition={{ 
                        delay: index * 0.1,
                        duration: 0.3 
                      }}
                    >
                      {/* <button
                        onClick={() => handleNavClick(item.href)}
                        className="block w-full text-left text-lg font-medium py-3 px-4 rounded-lg transition-all duration-300 text-white hover:text-blue-400 hover:bg-white/5"
                      >
                        {item.label}

                      </button> */}
                      <div>
                        <p></p>
                        <p></p>
                        <p></p>
                      </div>
                      <a className='text-end' href={item.href}>{item.label}</a>

                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}