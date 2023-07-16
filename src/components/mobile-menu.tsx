/* eslint-disable react/display-name */
import { useState, forwardRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const MobileMenu = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        title='Toggle Menu'
        className="menu-toggle mr-0 md:-mr-5 flex items-center justify-start md:justify-end p-2 rounded-md transition duration-300 ease-in-out"
      >
        <span
          className={`menu-icon ${isOpen ? 'cross' : 'lines'}`}
        ></span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <>
          
          <div className="backdrop"></div>
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 1 }}
            className={`mobile-menu ${isOpen ? 'menu-open' : ''}`}
            ref={ref}
          >
            <button
              onClick={closeMenu}
              className="close-icon flex items-center justify-center absolute top-4 right-10 w-8 h-8 rounded-md bg-gray-200 text-gray-600 hover:bg-gray-300 transition duration-300"
            >
              <svg
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 8.586L7.293 5.879a1 1 0 0 0-1.414 1.414L8.586 10l-2.707 2.707a1 1 0 0 0 1.414 1.414L10 11.414l2.707 2.707a1 1 0 0 0 1.414-1.414L11.414 10l2.707-2.707a1 1 0 0 0-1.414-1.414L10 8.586z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <ul className="menu-items">
              <li className="menu-item">
                <Link href="/">Home</Link>
              </li>
              <li className="menu-item">
                <Link href="/about">About</Link>
              </li>
              {/* Add more menu items as needed */}
            </ul>
          </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
});

export default MobileMenu;