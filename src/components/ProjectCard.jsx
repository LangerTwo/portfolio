import { use, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';

import reactIcon from "../assets/portfolio/react-icon.png";
import tailwindIcon from "../assets/portfolio/tailwind-icon.png";
import javascriptIcon from "../assets/portfolio/javascript.png";
import framerMotionIcon from "../assets/portfolio/framer-motion-icon.svg";
import pokeApiIcon from "../assets/portfolio/pokeapi-icon.png";
import cssIcon from "../assets/portfolio/css-icon2.png";

const techLogos = {
  react: reactIcon,
  tailwind: tailwindIcon,
  javascript: javascriptIcon,
  framermotion: framerMotionIcon,
  pokeApi: pokeApiIcon,
  css: cssIcon,
};

function ProjectCard({ title, description, img, link, view, moreInfo, slides, techs }) {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);

  // Preload slide images
  useEffect(() => {
    if (slides) {
      Object.values(slides).forEach((slide) => {
        if (slide?.img) {
          const img = new Image();
          img.src = slide.img;
        }
      });
    }
  }, [slides]);

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.03, y: -5 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-black rounded-xl shadow-md overflow-hidden p-4 border border-gray-200 dark:border-gray-700 flex flex-col gap-4 h-full"
      >
        {img && (
          <motion.img
            src={img}
            alt={title}
            className="w-full h-40 rounded-lg object-cover"
            animate={{ opacity: 1, y: 0 }}
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
          {view && (
            <a
              href={view}
              target="_blank"
              className="text-sm text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded"
              rel="noopener noreferrer"
            > 
              {t('view')}
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
        <div className="flex gap-2 mt-auto">
        {techs.map((tech, index) => (
          <div key={index} className="relative group">
            <img
              src={techLogos[tech]}
              alt={tech}
              className="w-8 h-8 object-contain bg-white rounded-full p-1 dark:border dark:border-gray-700 shadow-sm"
            />
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap text-sm px-2 py-1 rounded bg-gray-800 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
              {tech.charAt(0).toUpperCase() + tech.slice(1)}
            </div>
          </div>
        ))}
        </div>                
      </motion.div>
      <ProjectModal isOpen={modalOpen} onClose={() => setModalOpen(false)} slides={slides} />
    </>
  );
}

export default ProjectCard;
