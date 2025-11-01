import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [text, setText] = useState<string>("");
  const message: string = "WWELCOME😎";

  useEffect(() => {
    let index: number = 0;
    setText("");
    const typing = setInterval(() => {
      if (index < message.length) {
        setText((prev) => prev + message.charAt(index));
        index++;
      } else {
        clearInterval(typing);
      }
    }, 120);
    return () => clearInterval(typing);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#011C2A] text-white z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl font-extrabold tracking-wide sm:text-5xl md:text-6xl lg:text-7xl">
        {text}
        <span className="animate-pulse">|</span>
      </h1>
    </motion.div>
  );
}