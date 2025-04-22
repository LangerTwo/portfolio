import ProjectCard from "../components/ProjectCard";
import { useTranslation } from 'react-i18next'

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


function Projects() {
  const { t } = useTranslation()

  const projects = [
    {
      title: "Poke Web",
      description: "projects.poke.description",
      moreInfo: "projects.poke.moreInfo",
      link: "https://github.com/LangerTwo/poke-web",
      demo: "https://web-dex.netlify.app/",
      img: poke,
      slides: [
        { image: img1, text: t("projects.poke.slides.0", { returnObjects: true }) },
        { image: img2, text: t("projects.poke.slides.1", { returnObjects: true }) },
        { image: img3, text: t("projects.poke.slides.2", { returnObjects: true }) },
        { image: img4, text: t("projects.poke.slides.3", { returnObjects: true }) },
        { image: img5, text: t("projects.poke.slides.4", { returnObjects: true }) },
        { image: img6, text: t("projects.poke.slides.5", { returnObjects: true }) },
        { image: img7, text: t("projects.poke.slides.6", { returnObjects: true }) }
      ]
    },
    {
      title: "Portfolio",
      description: "projects.portfolio.description",
      link: "https://github.com/LangerTwo/portfolio",
      img: port1,
    },
    // agrega más
  ];

  return (
    <div className="p-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6 dark:bg-black">
      {projects.map((proj, i) => (
        <ProjectCard key={i} {...proj} />
      ))}
    </div>
  );
}

export default Projects;
