import { useState } from "react";
import { Blend } from "lucide-react";
import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience";
import Skills from "./Skills";

function Article() {
  const [activeTab, setActiveTab] = useState<"personal" | "experience" | "skills">("personal");

  return (
    <div className="mt-14 w-full px-4 sm:px-6 lg:px-10">
      {/* Header */}
      <header className="justify-self-center text-2xl font-bold text-center sm:text-3xl md:text-3xl lg:text-4xl lg:text-left">
        <Blend className="inline float-end" /> About Me
      </header>

      {/* Buttons */}
      <div className="flex justify-center mt-10">
        <div className="inline-flex flex-col gap-1 bg-[#001428] rounded-full p-5 sm:flex-row sm:gap-0 md:flex-row lg:flex-row">
          <button
            onClick={() => setActiveTab("personal")}
            className={`${
              activeTab === "personal"
                ? "bg-orange-400 text-white"
                : "text-gray-400 hover:text-white"
            } font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-300 sm:px-6 sm:py-2 sm:text-base md:px-7 md:py-2.5 md:text-base lg:px-8 lg:py-3 lg:text-lg`}
          >
            Personal Info
          </button>

          <button
            onClick={() => setActiveTab("experience")}
            className={`${
              activeTab === "experience"
                ? "bg-orange-400 text-white"
                : "text-gray-400 hover:text-white"
            } font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-300 sm:px-6 sm:py-2 sm:text-base md:px-7 md:py-2.5 md:text-base lg:px-8 lg:py-3 lg:text-lg`}
          >
            Experience
          </button>

          <button
            onClick={() => setActiveTab("skills")}
            className={`${
              activeTab === "skills"
                ? "bg-orange-400 text-white"
                : "text-gray-400 hover:text-white"
            } font-semibold px-5 py-2 rounded-full text-sm transition-colors duration-300 sm:px-6 sm:py-2 sm:text-base md:px-7 md:py-2.5 md:text-base lg:px-8 lg:py-3 lg:text-lg`}
          >
            Skills
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-10">
        {activeTab === "personal" && <PersonalInfo />}
        {activeTab === "experience" && <Experience />}
        {activeTab === "skills" && <Skills />}
      </div>

      <hr className="border-black border-1 dark:border-white mt-20" />
    </div>
  );
}

export default Article;