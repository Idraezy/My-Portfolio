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
    <div className="relative flex flex-col min-h-screen bg-[#F9F9F9] dark:bg-[#011C2A]
      text-lightText dark:text-darkText transition-colors duration-300">

      {/* 🔥 Background Animation */}
      <BackgroundAnimation />

      <AnimatePresence>
        {loading ? (
          <Preloader key="loader" />
        ) : (
          <div key="content">
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            
            <main className="relative z-10">
              {/* Home Section */}
              <section id="home" className="min-h-screen">
                <Section />
                <Footer />
              </section>

              {/* About Section */}
              <section id="about" className="min-h-screen">
                <Article />
                <PersonalInfo />
              </section>

              {/* Skills Section */}
              <section id="skills" className="min-h-screen">
                <Skills />
              </section>

              {/* Experience Section */}
              <section id="experience" className="min-h-screen">
                <Experience />
              </section>

              {/* Projects Section */}
              <section id="projects" className="min-h-screen">
                <Projects />
              </section>

              {/* Contact Section */}
              <section id="contact" className="min-h-screen">
                <Contact />
              </section>

              {/* Conclusion */}
              <section id="conclusion">
                <Conclusion />
              </section>
            </main>

            <FinalFooter />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;