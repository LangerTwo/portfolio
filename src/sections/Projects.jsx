import ProjectCard from "../components/ProjectCard";
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion';

// Importa las imágenes de los proyectos aquí

// Poke
import poke from "../assets/poke/poke.webp";
import img1 from "../assets/poke/img1.webp";
import img2 from "../assets/poke/img3.webp";
import img3 from "../assets/poke/img2.webp";
import img4 from "../assets/poke/img4.webp";
import img5 from "../assets/poke/img5.webp";
import img6 from "../assets/poke/img6.webp";
import img7 from "../assets/poke/img7.webp";

// Portfolio
import port1 from "../assets/portfolio/portfolio1.png"
import { view } from "framer-motion/client";

function Projects() {
  const { t } = useTranslation()

  const projects = [
    {
      title: "Poke Web",
      description: "projects.poke.description",
      moreInfo: "projects.poke.moreInfo",
      link: "https://github.com/LangerTwo/poke-web",
      view: "https://web-dex.netlify.app/",
      img: poke,
      slides: [
        { image: img1, text: t("projects.poke.slides.0", { returnObjects: true }) },
        { image: img2, text: t("projects.poke.slides.1", { returnObjects: true }) },
        { image: img3, text: t("projects.poke.slides.2", { returnObjects: true }) },
        { image: img4, text: t("projects.poke.slides.3", { returnObjects: true }) },
        { image: img5, text: t("projects.poke.slides.4", { returnObjects: true }) },
        { image: img6, text: t("projects.poke.slides.5", { returnObjects: true }) },
        { image: img7, text: t("projects.poke.slides.6", { returnObjects: true }) }
      ],
      techs: ['react', 'tailwind', 'javascript', 'pokeApi']
    },
    {
      title: "Portfolio",
      description: "projects.portfolio.description",
      link: "https://github.com/LangerTwo/portfolio",
      view: "https://mi-first-portfolio.netlify.app/",
      img: port1,
      techs: ['react', 'tailwind', 'javascript', 'framermotion', 'css'],
    },
    // agrega más
  ];

  return (
    <div className="relative max-w-6xl mx-auto pt-24 px-8 dark:transparent dark:text-white">
      <div className='bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-black flex flex-col md:flex-row rounded-lg shadow-lg gap-8 dark:border dark:border-gray-700'>
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6 dark:transparent dark:text-white"
        >
          <motion.h2
            className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4 col-span-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t('projects_title')}
          </motion.h2>
          {projects.map((proj, i) => (
            <ProjectCard key={i} {...proj} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
