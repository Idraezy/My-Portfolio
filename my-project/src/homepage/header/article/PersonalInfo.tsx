import { GraduationCap, Mail, PhoneCall, UserRound, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import prof from "../../../assets/prof.jpg";

function PersonalInfo() {
  return (
    <div className="w-full mt-10">
      <div className="flex flex-col items-center p-5 gap-8 sm:flex-col md:flex-col lg:flex-row lg:justify-evenly lg:items-start">
        
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center w-full sm:w-auto md:w-auto lg:w-1/3"
        >
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-60 md:h-60 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-[#001428]">
            <img
              src={prof}
              alt="Profile picture"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center px-6 sm:px-10 md:px-16 lg:text-left lg:px-0 lg:w-2/3"
        >
          <p className="text-2xl font-bold sm:text-3xl md:text-4xl">
            Unmatched Service Quality for Over 2 Years
          </p>

          <p className="mt-4 text-base sm:text-base md:text-lg leading-relaxed font-semibold">
            Adept at solving complex problems, writing clean and efficient code,
            and continuously improving performance. A collaborative team player
            committed to agile development practices and ongoing professional
            growth. Currently expanding expertise in backend development and
            smart contract development, with additional strengths in graphic
            design and active involvement as a Web3 Ambassador.
          </p>

          <div className="mt-8 space-y-3 sm:text-base md:text-lg text-base text-black font-semibold dark:text-white">
            <div className="flex items-center justify-center gap-2 lg:justify-start">
              <UserRound className="text-black dark:text-orange-400 " />
              <p>Idara Ubong Etim</p>
            </div>

            <div className="flex items-center justify-center gap-2 lg:justify-start">
              <Mail className="text-black dark:text-orange-400" />
              <p>idraezynoks@gmail.com</p>
            </div>

            <div className="flex items-center justify-center gap-2 lg:justify-start">
              <MapPin className="text-black dark:text-orange-400" />
              <p>Nigeria</p>
            </div>

            <div className="flex items-center justify-center gap-2 lg:justify-start">
              <PhoneCall className="text-black dark:text-orange-400" />
              <p>+234 (0)704 525 6955</p>
            </div>

            <div className="flex items-center justify-center gap-2 lg:justify-start">
              <GraduationCap className="text-black dark:text-orange-400" />
              <p>SSCE, WASSCE, NECO</p>
            </div>
          </div>

          <div className="mt-6 text-black font-semibold dark:text-white ">
            <p className="mb-2 text-lg text-black dark:text-orange-400">
              Language Skills
            </p>
            <hr className="border-black border-1 dark:border-white mb-2" />
            <p className="text-sm sm:text-base md:text-lg">
              English, Ibibio, French, Latin (Beginner)
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default PersonalInfo;


