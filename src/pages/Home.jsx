import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from "react-scroll";
import reactIcon from "../assets/portfolio/react-icon.png";
import tailwindIcon from "../assets/portfolio/tailwind-icon.png";
import javascriptIcon from "../assets/portfolio/javascript.png";
import htmlIcon from "../assets/portfolio/html.webp";
import cssIcon from "../assets/portfolio/css-icon2.png";

import image2 from "../assets/imagen2.jpg";

function Home() {
  const { t } = useTranslation();

  return (
    <div
      className="relative flex items-center justify-center h-screen"
      style={{ backgroundImage: `url(${image2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Overlay desenfocado para mayor legibilidad */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0" />

      <div className="z-10 text-center text-white p-4">
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t('greeting')}
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {t('developer')} Frontend | React | UI/UX
        </motion.p>

        <motion.div
          className="flex justify-center items-center gap-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="flex justify-center items-center gap-4 mt-2">
            {/* React */}
            <div className="relative group">
              <img src={reactIcon} alt="React" className="w-12 h-12 rounded-full p-1" />
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 text-sm px-2 py-1 rounded bg-gray-800 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                React
              </div>
            </div>
            {/* Tailwind */}
            <div className="relative group">
              <img src={tailwindIcon} alt="Tailwind" className="w-12 h-12 rounded-full p-1" />
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 text-sm px-2 py-1 rounded bg-gray-800 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                Tailwind
              </div>
            </div>
            {/* JavaScript */}
            <div className="relative group">
              <img src={javascriptIcon} alt="JavaScript" className="w-10 h-10 bg-white rounded-full p-1" />
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 text-sm px-2 py-1 rounded bg-gray-800 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                JavaScript
              </div>
            </div>
            {/* HTML */}
            <div className="relative group">
              <img src={htmlIcon} alt="HTML" className="w-10 h-10 bg-white rounded-full p-1" />
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 text-sm px-2 py-1 rounded bg-gray-800 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                HTML
              </div>
            </div>
            {/* CSS */}
            <div className="relative group">
              <img src={cssIcon} alt="CSS" className="w-10 h-10 bg-white rounded-full p-1" />
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 text-sm px-2 py-1 rounded bg-gray-800 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                CSS
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <ScrollLink to="projects" smooth={true} duration={500} offset={-80}>
        <motion.div
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center items-start p-1">
            <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
          </div>
        </motion.div>
      </ScrollLink>
    </div>
  );
}

export default Home;
