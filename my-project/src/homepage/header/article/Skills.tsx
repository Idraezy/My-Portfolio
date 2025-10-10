import { CircleCheckBig, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

function Skills() {
  return (
    <div className="w-full mt-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="p-5 text-center lg:text-left"
      >
        <p className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-4xl">
          My Arsenal{" "}
          <CircleCheckBig size={30} className="inline text-green-500" />
        </p>

        <p className="mt-3 font-medium text-black dark:text-orange-500 text-lg sm:text-2xl md:text-3xl">
          Tech Stack
        </p>
        <hr className="mt-2 border-black dark:border-white" />
      </motion.div>

      {/* Tech Stack Grid */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-5 text-base sm:text-lg md:text-xl lg:text-2xl text-center lg:text-left"
      >
        {[
          "HTML",
          "CSS",
          "JavaScript",
          "TypeScript",
          "React.js",
          "Next.js",
          "Tailwind CSS",
          "Framer Motion",
        ].map((skill, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center lg:justify-start"
          >
            <ShieldCheck
              size={25}
              className="inline text-green-500 mr-2"
            />
            {skill}
          </motion.p>
        ))}
      </motion.div>

      {/* Tools Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true, amount: 0.3 }}
        className="p-5 text-center lg:text-left mt-10"
      >
        <p className="font-medium text-black dark:text-orange-500 text-lg sm:text-2xl md:text-3xl">
          Tools
        </p>
        <hr className="mt-2 border-black dark:border-white" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-5 text-base sm:text-lg md:text-xl lg:text-2xl text-center lg:text-left"
        >
          {["VS Code", "Git", "Figma"].map((tool, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center lg:justify-start"
            >
              <ShieldCheck
                size={25}
                className="inline text-green-500 mr-2"
              />
              {tool}
            </motion.p>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Skills;