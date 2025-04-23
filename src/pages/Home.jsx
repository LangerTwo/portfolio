import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

import reactIcon from "../assets/portfolio/react-icon.png";
import tailwindIcon from "../assets/portfolio/tailwind-icon.png";
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
          className="flex justify-center gap-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <img src={reactIcon} alt="React" className="w-12 h-12" />
          <img src={tailwindIcon} alt="Tailwind" className="w-12 h-12 rounded-lg" />
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center items-start p-1">
          <div className="w-1 h-2 bg-white rounded-full animate-bounce" />
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
