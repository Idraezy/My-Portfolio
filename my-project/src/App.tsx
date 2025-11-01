import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { useState, useEffect } from 'react';
import { AnimatePresence } from "framer-motion";
import Header from './homepage/header/Header';
import Section from './homepage/header/section/Section';
import Footer from './homepage/header/footer/Footer';
import Preloader from './settings/Preloader';
import BackgroundAnimation from './settings/Background';
import Article from './homepage/header/article/Article';
import Conclusion from './homepage/header/article/Conclusion';
import FinalFooter from './homepage/header/footer/FinalFooter';
import Contact from './contactpage/Contact';
import PersonalInfo from './homepage/header/article/PersonalInfo';
import Experience from './homepage/header/article/Experience';
import Skills from './homepage/header/article/Skills';
import Projects from './projectpage/Projects';
import ScrollToTop from './settings/scrollToTop';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);

  // 🌙 Toggle dark mode
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [darkMode]);

  // ⏳ Preloader
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
       <ScrollToTop />
      <div className="relative flex flex-col min-h-screen bg-[#F9F9F9] dark:bg-[#011C2A]
      text-lightText dark:text-darkText transition-colors duration-300">

        {/* 🔥 Background Animation */}
        <BackgroundAnimation />

        <AnimatePresence>
          {loading ? (
            <Preloader key="loader" />
          ) : (
            <Routes>
              {/* 🏠 Home route */}
              <Route
                path="/"
                element={
                  <div key="homepage">
                    <Header darkMode={darkMode} setDarkMode={setDarkMode} />
                    <main>
                      <Section />
                      <Footer />
                      <Article />
                      <Routes>
                      <Route path="/personal" element={<PersonalInfo />} />
                      <Route path="/skills" element={<Skills  />} />
                      <Route path="/experience" element={<Experience   />} />
                      </Routes>
                      
                      <Conclusion />
                    </main>
                    <FinalFooter />
                  </div>
                }
              />

              {/* 📞 Contact route - NOW WITH DARK MODE PROPS */}
              <Route 
                path="/contact" 
                element={<Contact darkMode={darkMode} setDarkMode={setDarkMode} />} 
              />
              <Route 
                path="/projects" 
                element={<Projects darkMode={darkMode} setDarkMode={setDarkMode} />} 
              />
            </Routes>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;
