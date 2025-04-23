import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Mail, Linkedin } from 'lucide-react'

function Contact() {
  const { t } = useTranslation()

  return (
    <motion.div 
      className="p-8 text-center bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-black max-w-lg mx-auto rounded-xl shadow-md border border-gray-200 dark:border-gray-700 dark:bg-transparent dark:text-white" id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20, duration: 0.5 }}
    >
      <motion.h2
        className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {t('contact')}
      </motion.h2>

      <motion.div
        className="flex flex-col items-center space-y-4 text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <a
          href="mailto:tuemail@gmail.com"
          className="flex items-center gap-2 hover:text-blue-500 transition"
        >
          <Mail size={20} /> tuemail@gmail.com
        </a>
        <a
          href="https://linkedin.com/in/tuusuario"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-blue-500 transition"
        >
          <Linkedin size={20} /> linkedin.com/in/tuusuario
        </a>
      </motion.div>
    </motion.div>
  );
}

export default Contact;
// This code defines a React component named "Contact" that displays a contact section with email and LinkedIn links.