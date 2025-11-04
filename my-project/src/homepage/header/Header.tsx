import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Grid } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import prof from "../../assets/prof.jpg";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

function Header({ darkMode, setDarkMode }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const location = useLocation();

  // Update current time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? "PM" : "AM";
      const displayHours = hours % 12 || 12;
      const formattedTime = `${displayHours}:${minutes.toString().padStart(2, "0")} ${ampm}`;
      
      setCurrentTime(formattedTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex justify-between items-center px-3 md:px-12 py-3 
                 bg-lightBg dark:bg-[#011C2A] text-lightText dark:text-darkText
                 fixed top-0 left-0 w-full z-50 transition-colors duration-300 bg-white/20 backdrop-blur-md dark:bg-[#001D2A]/30
                 mb-4 md:mb-6"
    >
      {/* Active Status Indicator - Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex flex-col items-center gap-2"
      >
        <div className="relative w-10 h-10">
          {/* Profile Image Circle */}
          <img
            src={prof}
            alt="Profile"
            className="w-full h-full rounded-full object-cover border-1"
          />

          {/* Animated Connection Dot with Ripple Effect */}
          <div className="absolute top-0 right-0 w-3 h-3">
            {/* Main Dot */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.8, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 w-full h-full rounded-full bg-green-400 border-2 border-white shadow-lg"
            />
            
            {/* Ripple Effect 1 */}
            <motion.div
              animate={{
                scale: [1, 2, 2],
                opacity: [0.7, 0, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
              }}
              className="absolute inset-0 w-full h-full rounded-full bg-green-400"
            />
            
            {/* Ripple Effect 2 */}
            <motion.div
              animate={{
                scale: [1, 2.5, 2.5],
                opacity: [0.5, 0, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeOut",
                delay: 0.3,
              }}
              className="absolute inset-0 w-full h-full rounded-full bg-green-400"
            />
          </div>
        </div>

        {/* Current Time */}
        <p className="text-xs md:text-sm font-semibold text-gray-300">
          {currentTime}
        </p>
      </motion.div>

      {/* Desktop Navigation - Center */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="hidden md:flex space-x-7 text-base font-medium"
      >
        <Link
          to="/"
          className={`cursor-pointer duration-300 transition-colors ${
            location.pathname === "/"
              ? "transition-colors underline decoration-4 decoration-orange-500"
              : "hover:text-orange-300"
          }`}
        >
          Home
        </Link>

        <Link
          to="/projects"
          className={`cursor-pointer duration-300 transition-colors ${
            location.pathname === "/projects"
              ? "transition-colors underline decoration-4 decoration-orange-500"
              : "hover:text-orange-300"
          }`}
        >
          My Projects
        </Link>

        <Link
          to="/contact"
          className={`cursor-pointer duration-300 transition-colors ${
            location.pathname === "/contact"
              ? "transition-colors underline decoration-4 decoration-orange-500"
              : "hover:text-orange-300"
          }`}
        >
          Contact me
        </Link>
      </motion.nav>

      {/* Right-side controls */}
      <div className="flex items-center space-x-4">
        {/* Dark Mode Toggle */}
        <motion.button
          onClick={() => setDarkMode(!darkMode)}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-2xl p-2 transition-all duration-300"
        >
          {darkMode ? (
            <Moon size={24} className="text-orange-400" />
          ) : (
            <Sun size={24} />
          )}
        </motion.button>

        {/* Mobile Menu Icon */}
        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.9 }}
          className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-[#012b40] transition-colors"
        >
          <Grid size={26} className="text-orange-400" />
        </motion.button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full right-4 mt-2 bg-white dark:bg-[#012b40] 
                       rounded-2xl shadow-lg border dark:border-orange-400 text-black 
                       dark:text-white flex flex-col py-3 w-48 md:hidden z-50"
          >
            <Link to="/" onClick={() => setMenuOpen(false)}>
              <motion.div
                whileHover={{ x: 5, color: "#fb923c" }}
                className={`px-5 py-2 cursor-pointer text-base ${
                  location.pathname === "/"
                    ? "text-orange-400 font-semibold"
                    : ""
                }`}
              >
                Home
              </motion.div>
            </Link>

            <Link to="/projects" onClick={() => setMenuOpen(false)}>
              <motion.div
                whileHover={{ x: 5, color: "#fb923c" }}
                className={`px-5 py-2 cursor-pointer text-base ${
                  location.pathname === "/projects"
                    ? "text-orange-400 font-semibold"
                    : ""
                }`}
              >
                My Projects
              </motion.div>
            </Link>

            <Link to="/contact" onClick={() => setMenuOpen(false)}>
              <motion.div
                whileHover={{ x: 5, color: "#fb923c" }}
                className={`px-5 py-2 cursor-pointer text-base ${
                  location.pathname === "/contact"
                    ? "text-orange-400 font-semibold"
                    : ""
                }`}
              >
                Contact me
              </motion.div>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;