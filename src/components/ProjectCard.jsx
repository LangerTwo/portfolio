import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';

function ProjectCard({ title, description, img, link, demo, moreInfo, slides }) {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.03, y: -5 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="bg-white dark:bg-zinc-900 rounded-xl shadow-md overflow-hidden p-4"
      >
        {img && (
          <motion.img
            src={img}
            alt={title}
            className="w-full h-40 object-cover rounded"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        )}
        <h2 className="text-xl font-semibold mt-2 text-gray-900 dark:text-white">{title}</h2>
        <p className="text-gray-600 dark:text-gray-300">{t(description)}</p>
        <div className="flex gap-4 mt-3">
          <a
            href={link}
            target="_blank"
            className="text-blue-500 hover:underline"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          {demo && (
            <a
              href={demo}
              target="_blank"
              className="text-blue-500 hover:underline"
              rel="noopener noreferrer"
            >
              Demo
            </a>
          )}
          {moreInfo && (
            <button
              onClick={() => setModalOpen(true)}
              className="text-sm text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded"
            >
              {t('more_info')}
            </button>
          )}
        </div>

      </motion.div>
      <ProjectModal isOpen={modalOpen} onClose={() => setModalOpen(false)} slides={slides} />
    </>
  );
}

export default ProjectCard;
