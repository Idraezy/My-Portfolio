import { Twitter, Linkedin, Facebook, Instagram, Github } from "lucide-react";
import { motion } from "framer-motion";
import { Whatsapp } from "iconsax-react";

function FinalFooter() {
  return (
    <motion.div
      className="mt-0 py-6 bg-lightBg dark:bg-[#011C2A] text-white dark:text-darkText transition-colors duration-300 sm:py-8 md:py-10 lg:py-0"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.div
        className="flex flex-wrap items-center justify-center gap-3 mb-4 sm:gap-4 sm:mb-5 md:gap-4 md:mb-6 lg:flex-nowrap lg:gap-0 lg:mb-0"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2 }
          }
        }}
      >
        <motion.a
          href="https://facebook.com/idaraetimm"
          target="_blank"
          rel="noopener noreferrer"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          
          <Facebook
            size={30}
            className="text-black hover:text-orange-400 px-2 cursor-pointer 
                       transition-all duration-300 ease-in-out hover:-translate-y-2 
                       dark:text-white dark:hover:text-orange-400
                       sm:w-9 sm:h-9 sm:px-2 md:w-10 md:h-10 md:px-2.5 lg:w-12 lg:h-12 lg:px-3" strokeWidth={2}
          />
        </motion.a>

        <motion.a
          href="https://wa.me/2347045256955"
          target="_blank"
          rel="noopener noreferrer"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <Whatsapp size="30" color="currentColor"  
            className="text-black hover:text-orange-400 px-2 cursor-pointer 
                       transition-all duration-300 ease-in-out hover:-translate-y-2 
                       dark:hover:text-orange-400 dark:text-white
                       sm:w-9 sm:h-9 sm:px-2 md:w-10 md:h-10 md:px-2.5 lg:w-12 lg:h-12 lg:px-3" strokeWidth={2}
          />
        </motion.a>

        <motion.a
          href="https://twitter.com/Idara_etimm"
          target="_blank"
          rel="noopener noreferrer"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <Twitter
            size={30}
            className="text-black hover:text-orange-400 px-2 cursor-pointer 
                       transition-all duration-300 ease-in-out hover:-translate-y-2 
                       dark:hover:text-orange-400 dark:text-white
                       sm:w-9 sm:h-9 sm:px-2 md:w-10 md:h-10 md:px-2.5 lg:w-12 lg:h-12 lg:px-3" strokeWidth={2}
          />
        </motion.a>

        <motion.a
          href="https://www.Linkedin.com/in/etimidaraubong"
          target="_blank"
          rel="noopener noreferrer"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <Linkedin
            size={30}
            className="text-black hover:text-orange-400 px-2 cursor-pointer 
                       transition-all duration-300 ease-in-out hover:-translate-y-2 
                       dark:hover:text-orange-400 dark:text-white
                       sm:w-9 sm:h-9 sm:px-2 md:w-10 md:h-10 md:px-2.5 lg:w-12 lg:h-12 lg:px-3" strokeWidth={2}
          />
        </motion.a>

        <motion.a
          href="https://instagram.com/idaraetimm"
          target="_blank"
          rel="noopener noreferrer"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <Instagram
            size={30}
            className="text-black hover:text-orange-400 px-2 cursor-pointer 
                       transition-all duration-300 ease-in-out hover:-translate-y-2 
                       dark:hover:text-orange-400 dark:text-white
                       sm:w-9 sm:h-9 sm:px-2 md:w-10 md:h-10 md:px-2.5 lg:w-12 lg:h-12 lg:px-3" strokeWidth={2}
          />
        </motion.a>

        <motion.a
          href="https://github.com/Idraezy"
          target="_blank"
          rel="noopener noreferrer"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <Github
            size={30}
            className="text-black hover:text-orange-400 px-2 cursor-pointer 
                       transition-all duration-300 ease-in-out hover:-translate-y-2 
                       dark:hover:text-orange-400 dark:text-white
                       sm:w-9 sm:h-9 sm:px-2 md:w-10 md:h-10 md:px-2.5 lg:w-12 lg:h-12 lg:px-3" strokeWidth={2}
          />
        </motion.a>
      </motion.div>
      
      <p className="flex justify-center text-center px-4 text-black dark:text-white sm:text-sm md:text-base lg:text-base lg:px-0 text-base  font-semibold">
        Copyright &copy; 2024 Idara Etim. All rights reserved.
      </p>
    </motion.div>
  );
}

export default FinalFooter;