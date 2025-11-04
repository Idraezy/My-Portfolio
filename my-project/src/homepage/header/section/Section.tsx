import { useState, useEffect } from 'react';
import { Send, FileUser } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

interface Data {
  profession: string[];
}

const data: Data = {
  profession: [
    "Frontend Developer",
    "Blockchain Developer (Training)",
    "Graphic Designer",
    "Technical Writer",
  ],
};

export default function Section() {
  const [current, setCurrent] = useState<number>(0);
  const [text, setText] = useState<string>("");
  const [letterIndex, setLetterIndex] = useState<number>(0);
  const [cursorVisible, setCursorVisible] = useState<boolean>(true);

  useEffect(() => {
    if (letterIndex < data.profession[current].length) {
      const typingInterval = setInterval(() => {
        setText((prev) => prev + data.profession[current][letterIndex]);
        setLetterIndex((prev) => prev + 1);
      }, 100);
      return () => clearInterval(typingInterval);
    } else {
      const waitTimeout = setTimeout(() => {
        setText("");
        setLetterIndex(0);
        setCurrent((prev) => (prev + 1) % data.profession.length);
      }, 3000);
      return () => clearTimeout(waitTimeout);
    }
  }, [letterIndex, current]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <motion.section
      className="min-h-[72vh] bg-lightBg dark:bg-[#011C2A] text-lightText dark:text-darkText transition-colors duration-300 mt-28"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.div
        className="mt-20 mx-6 w-[90%] sm:mt-24 sm:mx-10 md:mt-32 md:mx-14 lg:mt-40 lg:mx-20 lg:w-3/4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <motion.p
          className="text-base font-semibold sm:text-lg md:text-xl text-black dark:text-white"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Hi <span className="inline-block animate-wave origin-bottom-left">✋</span>, My Name still Remains...
        </motion.p>

        <motion.p
          className="text-3xl font-bold dark:text-orange-400 text-[#001D2A] sm:text-4xl md:text-5xl lg:text-6xl "
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Idara Etim.
        </motion.p>

        <motion.p
          className="text-3xl font-bold dark:text-orange-400 text-[#001D2A] sm:text-4xl md:text-5xl lg:text-6xl min-h-[3rem] sm:min-h-[3.5rem] md:min-h-[4rem] lg:min-h-[4.5rem]"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          I am a {text}
          <span className="text-[#011c2A] dark:text-darkText">
            {cursorVisible ? "|" : " "}
          </span>
        </motion.p>

        <br />

        <motion.p
          className="text-base text-black dark:text-white font-semibold leading-relaxed sm:text-base md:text-lg lg:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          I'm a Frontend Developer skilled in HTML, CSS, JavaScript, React.js,
          TypeScript,
          <br className="hidden lg:block" /> 
          <span className="lg:hidden"> </span>
          Tailwind CSS, and Next.js,
          with a strong passion for building intuitive, user-focused solutions.
          <br /><br />
          Currently expanding expertise in backend development and smart
          contract development,
          <br className="hidden lg:block" />
          <span className="lg:hidden"> </span>
          with additional strengths in graphic design and active involvement as
          a Web3 Ambassador.
        </motion.p>

        <br /><br />

        <motion.div
          className="flex flex-col gap-4 items-center sm:flex-row md:items-center lg:items-start"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          <Link to="/contact"><button
            className="rounded-full border border-[#111827] dark:border-orange-400 dark:text-orange-400 dark:hover:text-white
                       p-2 px-4 cursor-pointer dark:hover:bg-orange-400
                       text-base font-semibold hover:bg-orange-400 hover:text-white hover:border-none dark:hover:border-none
                       group transition-all sm:p-3 sm:px-5 sm:text-base md:p-3 md:px-5 md:text-base lg:p-4 lg:px-5 lg:text-xl lg:transition-all lg:duration-300 lg:ease-in-out text-black"
          >
            Contact me <Send className='w-4 inline transition-transform duration-700 ease-in-out group-hover:rotate-45 sm:w-5 lg:w-6 lg:duration-700' />
          </button>
          </Link>
          

          <button
            className="rounded-full border border-[#111827] dark:border-orange-400 dark:text-orange-400 hover:bg-orange-400 dark:hover:bg-orange-400 
                       p-2 px-5 inline cursor-pointer 
                        font-semibold dark:hover:border-white
                       group transition-all hover:border-white dark:hover:text-white sm:p-3 sm:px-7 sm:text-base md:p-3 md:px-7 md:text-base lg:p-4 lg:px-9 lg:text-xl lg:transition-all lg:duration-300 lg:ease-in-out mb-14 text-black text-base "
          >
            <a href="/Idara_Etim_Resume_Updated.pdf" target="_blank" rel="noopener noreferrer" >Resume </a>
            <FileUser className="w-4 inline transition-transform duration-700 ease-in-out group-hover:animate-bounce sm:w-5 lg:w-6 lg:duration-700 " />
          </button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}



