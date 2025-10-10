// import { Twitter, Linkedin, Facebook, Instagram, Github, Mail } from "lucide-react";
// import { motion } from "framer-motion"; // ✅ import motion

// function Footer() {
//   return (
//     <motion.div
//       className="mt-0 bg-lightBg dark:bg-[#011C2A] text-white dark:text-darkText transition-colors duration-300"
//       initial={{ opacity: 0, y: 50 }}       // start faded + below
//       animate={{ opacity: 1, y: 0 }}        // fade in + slide up
//       transition={{ duration: 1, ease: "easeOut" }}
//     >
//       <motion.div
//         className="flex items-center justify-center"
//         initial="hidden"
//         animate="visible"
//         variants={{
//           hidden: {},
//           visible: {
//             transition: { staggerChildren: 0.2 } // icons animate one after the other
//           }
//         }}
//       >
//         <motion.a
//           href="https://facebook.com/idaraetimm"
//           target="_blank"
//           rel="noopener noreferrer"
//           variants={{
//             hidden: { opacity: 0, y: 20 },
//             visible: { opacity: 1, y: 0 }
//           }}
//         >
//           <Facebook
//             size={48}
//             className="text-black hover:text-orange-400 px-3 cursor-pointer 
//                        transition-all duration-300 ease-in-out hover:-translate-y-2 
//                        dark:text-white dark:hover:text-orange-400"
//           />
//         </motion.a>

//         <motion.a
//           href="mailto:idraezynoks@gmail.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           variants={{
//             hidden: { opacity: 0, y: 20 },
//             visible: { opacity: 1, y: 0 }
//           }}
//         >
//           <Mail
//             size={48}
//             className="text-black hover:text-orange-400 px-3 cursor-pointer 
//                        transition-all duration-300 ease-in-out hover:-translate-y-2 
//                        dark:hover:text-orange-400 dark:text-white"
//           />
//         </motion.a>

//         <motion.a
//           href="https://twitter.com/Idara_etimm"
//           target="_blank"
//           rel="noopener noreferrer"
//           variants={{
//             hidden: { opacity: 0, y: 20 },
//             visible: { opacity: 1, y: 0 }
//           }}
//         >
//           <Twitter
//             size={48}
//             className="text-black hover:text-orange-400 px-3 cursor-pointer 
//                        transition-all duration-300 ease-in-out hover:-translate-y-2 
//                        dark:hover:text-orange-400 dark:text-white"
//           />
//         </motion.a>

//         <motion.a
//           href="https://www.Linkedin.com/in/etimidaraubong"
//           target="_blank"
//           rel="noopener noreferrer"
//           variants={{
//             hidden: { opacity: 0, y: 20 },
//             visible: { opacity: 1, y: 0 }
//           }}
//         >
//           <Linkedin
//             size={48}
//             className="text-black hover:text-orange-400 px-3 cursor-pointer 
//                        transition-all duration-300 ease-in-out hover:-translate-y-2 
//                        dark:hover:text-orange-400 dark:text-white"
//           />
//         </motion.a>

//         <motion.a
//           href="https://instagram.com/idaraetimm"
//           target="_blank"
//           rel="noopener noreferrer"
//           variants={{
//             hidden: { opacity: 0, y: 20 },
//             visible: { opacity: 1, y: 0 }
//           }}
//         >
//           <Instagram
//             size={48}
//             className="text-black hover:text-orange-400 px-3 cursor-pointer 
//                        transition-all duration-300 ease-in-out hover:-translate-y-2 
//                        dark:hover:text-orange-400 dark:text-white"
//           />
//         </motion.a>

//         <motion.a
//           href="https://github.com/Idraezy"
//           target="_blank"
//           rel="noopener noreferrer"
//           variants={{
//             hidden: { opacity: 0, y: 20 },
//             visible: { opacity: 1, y: 0 }
//           }}
//         >
//           <Github
//             size={48}
//             className="text-black hover:text-orange-400 px-3 cursor-pointer 
//                        transition-all duration-300 ease-in-out hover:-translate-y-2 
//                        dark:hover:text-orange-400 dark:text-white"
//           />
//         </motion.a>
//       </motion.div>

//       <br />
//       <div>
//         <hr className="border-black border-1 dark:border-white " />
//       </div>
//     </motion.div>
//   );
// }

// export default Footer;


// import { Twitter, Linkedin, Facebook, Instagram, Github, Mail } from "lucide-react";
// import { motion } from "framer-motion";

// function Footer() {
//   return (
//     <motion.div
//       className="mt-0 bg-lightBg dark:bg-[#011C2A] text-white dark:text-darkText transition-colors duration-300"
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1, ease: "easeOut" }}
//     >
//       <motion.div
//         className="flex items-center justify-center mb-4"
//         initial="hidden"
//         animate="visible"
//         variants={{
//           hidden: {},
//           visible: {
//             transition: { staggerChildren: 0.2 }
//           }
//         }}
//       >
//         <motion.a
//           href="https://facebook.com/idaraetimm"
//           target="_blank"
//           rel="noopener noreferrer"
//           variants={{
//             hidden: { opacity: 0, y: 20 },
//             visible: { opacity: 1, y: 0 }
//           }}
//         >
//           <Facebook
//             size={32}
//             className="text-black hover:text-orange-400 px-2 cursor-pointer 
//                        transition-all duration-300 ease-in-out hover:-translate-y-2 
//                        dark:text-white dark:hover:text-orange-400
//                        sm:px-3 md:px-3 lg:px-3 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12"
//           />
//         </motion.a>

//         <motion.a
//           href="mailto:idraezynoks@gmail.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           variants={{
//             hidden: { opacity: 0, y: 20 },
//             visible: { opacity: 1, y: 0 }
//           }}
//         >
//           <Mail
//             size={32}
//             className="text-black hover:text-orange-400 px-2 cursor-pointer 
//                        transition-all duration-300 ease-in-out hover:-translate-y-2 
//                        dark:hover:text-orange-400 dark:text-white
//                        sm:px-3 md:px-3 lg:px-3 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12"
//           />
//         </motion.a>

//         <motion.a
//           href="https://twitter.com/Idara_etimm"
//           target="_blank"
//           rel="noopener noreferrer"
//           variants={{
//             hidden: { opacity: 0, y: 20 },
//             visible: { opacity: 1, y: 0 }
//           }}
//         >
//           <Twitter
//             size={32}
//             className="text-black hover:text-orange-400 px-2 cursor-pointer 
//                        transition-all duration-300 ease-in-out hover:-translate-y-2 
//                        dark:hover:text-orange-400 dark:text-white
//                        sm:px-3 md:px-3 lg:px-3 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12"
//           />
//         </motion.a>

//         <motion.a
//           href="https://www.Linkedin.com/in/etimidaraubong"
//           target="_blank"
//           rel="noopener noreferrer"
//           variants={{
//             hidden: { opacity: 0, y: 20 },
//             visible: { opacity: 1, y: 0 }
//           }}
//         >
//           <Linkedin
//             size={32}
//             className="text-black hover:text-orange-400 px-2 cursor-pointer 
//                        transition-all duration-300 ease-in-out hover:-translate-y-2 
//                        dark:hover:text-orange-400 dark:text-white
//                        sm:px-3 md:px-3 lg:px-3 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12"
//           />
//         </motion.a>

//         <motion.a
//           href="https://instagram.com/idaraetimm"
//           target="_blank"
//           rel="noopener noreferrer"
//           variants={{
//             hidden: { opacity: 0, y: 20 },
//             visible: { opacity: 1, y: 0 }
//           }}
//         >
//           <Instagram
//             size={32}
//             className="text-black hover:text-orange-400 px-2 cursor-pointer 
//                        transition-all duration-300 ease-in-out hover:-translate-y-2 
//                        dark:hover:text-orange-400 dark:text-white
//                        sm:px-3 md:px-3 lg:px-3 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12"
//           />
//         </motion.a>

//         <motion.a
//           href="https://github.com/Idraezy"
//           target="_blank"
//           rel="noopener noreferrer"
//           variants={{
//             hidden: { opacity: 0, y: 20 },
//             visible: { opacity: 1, y: 0 }
//           }}
//         >
//           <Github
//             size={32}
//             className="text-black hover:text-orange-400 px-2 cursor-pointer 
//                        transition-all duration-300 ease-in-out hover:-translate-y-2 
//                        dark:hover:text-orange-400 dark:text-white
//                        sm:px-3 md:px-3 lg:px-3 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12"
//           />
//         </motion.a>
//       </motion.div>

//       <div>
//         <hr className="border-black border-1 dark:border-white" />
//       </div>
//     </motion.div>
//   );
// }

// export default Footer;



import { Twitter, Linkedin, Facebook, Instagram, Github, Mail } from "lucide-react";
import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.div
      className="mt-i6 bg-lightBg dark:bg-[#011C2A] text-white dark:text-darkText transition-colors duration-300 sm:mt-24 md:mt-40 lg:mt-0"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.div
        className="flex items-center justify-center mb-2 sm:mb-2 md:mb-3 lg:mb-4"
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
            size={32}
            className="text-black hover:text-orange-400 px-2 cursor-pointer 
                       transition-all duration-300 ease-in-out hover:-translate-y-2 
                       dark:text-white dark:hover:text-orange-400
                       sm:px-3 md:px-3 lg:px-3 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12" strokeWidth={3}
          />
        </motion.a>

        <motion.a
          href="mailto:idraezynoks@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <Mail
            size={32}
            className="text-black hover:text-orange-400 px-2 cursor-pointer 
                       transition-all duration-300 ease-in-out hover:-translate-y-2 
                       dark:hover:text-orange-400 dark:text-white
                       sm:px-3 md:px-3 lg:px-3 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12" strokeWidth={3}
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
            size={32}
            className="text-black hover:text-orange-400 px-2 cursor-pointer 
                       transition-all duration-300 ease-in-out hover:-translate-y-2 
                       dark:hover:text-orange-400 dark:text-white
                       sm:px-3 md:px-3 lg:px-3 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12" strokeWidth={3}
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
            size={32}
            className="text-black hover:text-orange-400 px-2 cursor-pointer 
                       transition-all duration-300 ease-in-out hover:-translate-y-2 
                       dark:hover:text-orange-400 dark:text-white
                       sm:px-3 md:px-3 lg:px-3 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12" strokeWidth={3}
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
            size={32}
            className="text-black hover:text-orange-400 px-2 cursor-pointer 
                       transition-all duration-300 ease-in-out hover:-translate-y-2 
                       dark:hover:text-orange-400 dark:text-white
                       sm:px-3 md:px-3 lg:px-3 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12" strokeWidth={3}
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
            size={32}
            className="text-black hover:text-orange-400 px-2 cursor-pointer 
                       transition-all duration-300 ease-in-out hover:-translate-y-2 
                       dark:hover:text-orange-400 dark:text-white
                       sm:px-3 md:px-3 lg:px-3 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12" strokeWidth={3}
          />
        </motion.a>
      </motion.div>

      <div>
        <hr className="border-black border-1 dark:border-white" />
      </div>
    </motion.div>
  );
}

export default Footer;
