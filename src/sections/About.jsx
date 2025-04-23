import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import avatar from '../assets/avatar.png'; // Ajusta la ruta según tu proyecto

function About() {
  const { t } = useTranslation();
  const aboutMe = t("about_me", { returnObjects: true });

  return (
    <div className="relative max-w-5xl mx-auto pt-24 px-8 dark:bg-black dark:text-white">
      <div className='bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-black flex flex-col md:flex-row p-8 rounded-lg shadow-lg gap-8 dark:border dark:border-gray-700'>
        {/* Avatar para pantallas grandes */}
        <motion.img
          src={avatar}
          alt="Avatar"
          className="w-30 h-30 lg:w-40 lg:h-40 rounded-full shadow-lg object-cover border-4 border-blue-500 dark:border-blue-300 absolute top-8 right-8 hidden md:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Avatar para móviles */}
        <motion.img
          src={avatar}
          alt="Avatar"
          className="w-24 h-24 mx-auto rounded-full shadow-lg object-cover border-4 border-blue-500 dark:border-blue-300 md:hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            {t('about')}
          </h1>
          <div className="space-y-4 text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
            {Array.isArray(aboutMe)
              ? aboutMe.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))
              : <p>{aboutMe}</p>}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;