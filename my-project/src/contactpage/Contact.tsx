import { useState, type ChangeEvent } from 'react';
import FinalFooter from '../homepage/header/footer/FinalFooter';
import Header from '../homepage/header/Header';
import { Mail, MapPin, PhoneCall, UserRound, MessageSquare } from 'lucide-react';
import React from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface ContactProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

function Contact({ darkMode, setDarkMode }: ContactProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "2347045256955";
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      alert("Please fill all fields before sending ✅");
      return;
    }

    const fullMessage = `Hello Idraezy! 👋

You have a new message from your website:

🧍 Name: ${name}
📧 Email: ${email}
💬 Message: ${message}`;

    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="mt-24 px-6 sm:mt-28 md:mt-32 lg:mt-36 lg:px-20 mb-20">
        <div className="text-base sm:text-lg font-semibold text-black dark:text-white">
          Hi <span className="inline-block animate-wave origin-bottom-left">✋</span>
        </div>
        <p className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl text-[#001528] dark:text-[#FF8C2C]">
          Let's Work Together
        </p>
        <p className="text-sm sm:text-base lg:text-lg mt-2 font-semibold text-black dark:text-white">
          Got an idea you would love to bring to life? 
          Let's turn your vision into something Awesome. <br />
          Drop me a message below!
        </p>

        <div className="flex flex-col gap-8 mt-16 lg:flex-row lg:justify-between lg:mt-24 font-semibold text-black dark:text-white">
          {/* Contact Info */}
          <div className="space-y-4 lg:space-y-6">
            <div className="flex items-center gap-3">
              <Mail size={20} className="text-black dark:text-orange-400 sm:w-6 sm:h-6 lg:w-6 lg:h-6 flex-shrink-0" />
              <p className="text-sm sm:text-base lg:text-base">idraezynoks@gmail.com</p>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={20} className="text-black dark:text-orange-400 sm:w-6 sm:h-6 lg:w-6 lg:h-6 flex-shrink-0" />
              <p className="text-sm sm:text-base lg:text-base">Nigeria</p>
            </div>
            <div className="flex items-center gap-3">
              <PhoneCall size={20} className="text-black dark:text-orange-400 sm:w-6 sm:h-6 lg:w-6 lg:h-6 flex-shrink-0" />
              <p className="text-sm sm:text-base lg:text-base">+234 (0)704 525 6955</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-1/2">
            <form className="space-y-4 sm:space-y-5" onSubmit={handleSend}>
              {/* Name Input */}
              <div className="relative">
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  placeholder="Name" 
                  onChange={handleChange}
                  className="dark:bg-[#001D2A] bg-[#F9F9F9] p-3 pr-12 rounded-2xl border dark:border-orange-500 border-[#001528] w-full text-sm sm:text-base sm:p-4 sm:pr-14 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <UserRound className="absolute right-4 top-1/2 -translate-y-1/2 text-black dark:text-orange-400 w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              {/* Email Input */}
              <div className="relative">
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  placeholder="Email" 
                  onChange={handleChange}
                  className="bg-[#F9F9F9] dark:bg-[#001D2A] p-3 pr-12 rounded-2xl border dark:border-orange-500 border-[#001528] w-full text-sm sm:text-base sm:p-4 sm:pr-14 focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-black dark:text-orange-400 w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              {/* Message Textarea */}
              <div className="relative">
                <textarea 
                  name="message"
                  value={formData.message}
                  placeholder="Message"
                  onChange={handleChange} 
                  rows={6}
                  className="bg-[#F9F9F9] dark:bg-[#001D2A] p-3 pr-12 rounded-2xl border dark:border-orange-500 border-[#001528] w-full text-sm sm:text-base sm:p-4 sm:pr-14 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400 sm:rows-8 lg:rows-8"
                />
                <MessageSquare className="absolute right-4 top-4 text-black dark:text-orange-400 w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="w-full bg-[#001528] dark:bg-orange-400 hover:bg-[#002a40] dark:hover:bg-orange-500 text-white font-semibold p-3 rounded-2xl transition-all duration-300 text-sm sm:text-base sm:p-4"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <hr className="border-black border-1 dark:border-white p-5" />
      <FinalFooter />
    </div>
  );
}

export default Contact;