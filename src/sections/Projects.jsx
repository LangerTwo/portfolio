import ProjectCard from "../components/ProjectCard";
import { useTranslation } from 'react-i18next'

// Importa las imágenes de los proyectos aquí
import poke from "../assets/poke/poke.webp";
import img1 from "../assets/poke/img1.webp";
import img2 from "../assets/poke/img2.webp";
import img3 from "../assets/poke/img3.webp";
import img4 from "../assets/poke/img4.webp";
import img5 from "../assets/poke/img5.webp";
import img6 from "../assets/poke/img6.webp";
import img7 from "../assets/poke/img7.webp";


function Projects() {
  const { t } = useTranslation()

  const projects = [
    {
      title: "Clon de Netflix",
      description: "projects.netflix.description",
      // img: img1,
      link: "https://github.com/usuario/netflix-clone",
    },
    {
      title: "Poke Web",
      description: "projects.poke.description",
      moreInfo: "projects.poke.moreInfo",
      link: "https://github.com/LangerTwo/poke-web",
      demo: "https://web-dex.netlify.app/",
      img: poke,
      slides: [
        { image: img1, text: t("projects.poke.slides.0") },
        { image: img2, text: t("projects.poke.slides.1") },
        { image: img3, text: t("projects.poke.slides.2") },
        { image: img4, text: t("projects.poke.slides.3") },
        { image: img5, text: t("projects.poke.slides.4") },
        { image: img6, text: t("projects.poke.slides.5") },
        { image: img7, text: t("projects.poke.slides.6") }
      ]
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
