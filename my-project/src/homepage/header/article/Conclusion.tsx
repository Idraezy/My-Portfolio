import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Conclusion() {
  const text1 = "Prepared to turn your ideas into reality?";
  const text2 = "I'm here to help.";

  return (
    <div className="flex flex-col items-center justify-center text-center mt-20">
      <motion.p
        className="text-4xl font-bold mb-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {text1.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.05 }}
          >
            {char}
          </motion.span>
        ))}
      </motion.p>

      <motion.p
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        {text2.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 + index * 0.05 }}
          >
            {char}
          </motion.span>
        ))}
      </motion.p>


      <Link to="/contact">
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.8, duration: 0.5 }}
        className="bg-white rounded-full border border-[#111827] dark:border-orange-400 dark:text-orange-400 
                   dark:hover:text-white p-4 px-8 cursor-pointer dark:hover:bg-orange-400 mb-24 
                   dark:bg-[#001D2A] text-xl font-semibold hover:bg-orange-400 hover:text-white 
                   hover:border-none dark:hover:border-none transition-all text-black"
      >
        Contact me
      </motion.button>
      
      </Link>

      
    </div>
  );
}

export default Conclusion;