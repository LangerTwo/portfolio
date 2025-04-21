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
    moreInfo: "projects.poke.moreInfo",
    link: "https://github.com/LangerTwo/poke-web",
    demo: "https://web-dex.netlify.app/",
    img: poke,
    slides: [
      { image: poke, text: "Landing de la aplicación con diseño responsivo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis consequat urna. Ut sed suscipit tortor, at convallis augue. Aenean vestibulum vehicula vehicula. Integer vel congue nunc. Nullam nec enim volutpat, scelerisque turpis at, pellentesque neque. Sed varius, mauris pharetra iaculis feugiat, turpis arcu pharetra ligula, quis facilisis ligula ipsum nec lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam condimentum auctor massa ut dapibus. Praesent eget vestibulum nunc, a bibendum magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque iaculis consequat urna. Ut sed suscipit tortor, at convallis augue. Aenean vestibulum vehicula vehicula. Integer vel congue nunc. Nullam nec enim volutpat, scelerisque turpis at, pellentesque neque. Sed varius, mauris pharetra iaculis feugiat, turpis arcu pharetra ligula, quis facilisis ligula ipsum nec lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam condimentum auctor massa ut dapibus. Praesent eget vestibulum nunc, a bibendum magna." },
      { image: poke, text: "Listado de Pokémon obtenidos desde la API." },
      { image: poke, text: "Detalle de cada Pokémon con información extendida." }
    ]
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
