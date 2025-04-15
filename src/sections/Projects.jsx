import ProjectCard from "../components/ProjectCard";
import { useTranslation } from 'react-i18next'

// Importa las imágenes de los proyectos aquí
import poke from "../assets/poke/poke.webp";

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
    link: "https://github.com/LangerTwo/poke-web",
    demo: "https://web-dex.netlify.app/",
    img: poke,
  },
  // agrega más
];

function Projects() {
  const { t } = useTranslation()

  return (
    <div className="p-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6 dark:bg-black">
      {projects.map((proj, i) => (
        <ProjectCard key={i} {...proj} />
      ))}
    </div>
  );
}

export default Projects;
