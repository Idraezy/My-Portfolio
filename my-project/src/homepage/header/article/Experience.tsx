import prof from '../../../assets/prof.jpg';
import { BriefcaseBusiness } from "lucide-react";
import { motion } from "framer-motion";

function Experience() {
  return (
    <div className="w-full mt-10">
      {/* Header */}
      <div className="p-5 text-center lg:text-left">
        <p className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-4xl">
          Experience{" "}
          <BriefcaseBusiness size={30} className="inline text-orange-500 " />
        </p>
        <p className="mt-3 font-medium text-black dark:text-orange-500 text-lg sm:text-2xl md:text-3xl">
          My Work History
        </p>
        <hr className="mt-2 border-black dark:border-white" />
      </div>

      {/* Content section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between p-6 gap-8">
        {/* Image on left */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg border-4 border-orange-500 dark:border-orange-400 flex-shrink-0"
        >
          <img
            src={prof}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Experience Details */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex-1 text-center lg:text-left"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-black dark:text-orange-500">
            Frontend Developer (Freelance)
          </h3>

          <p className="text-base sm:text-lg md:text-xl dark:text-gray-300 mb-2 text-gray-600 font-semibold">
            <strong>2023 - Present</strong>
          </p>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400  font-semibold ">
            I specialize in building modern, responsive, and animated web interfaces using
            <span className="text-orange-600 dark:text-orange-400 font-semibold">
              {" "}
              React.js, TypeScript, Tailwind CSS, and Framer Motion
            </span>.  
            My focus is on creating user-friendly, visually appealing experiences that bring ideas to life.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Experience;



