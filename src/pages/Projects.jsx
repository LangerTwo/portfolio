import ProjectCard from "../components/ProjectCard";
// import img1 from "../assets/proyecto1.png";

const projects = [
  {
    title: "Clon de Netflix",
    description: "Aplicación que muestra películas usando la API de TMDB.",
    // img: img1,
    link: "https://github.com/usuario/netflix-clone",
  },
  // agrega más
];

function Projects() {
  return (
    <div className="p-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6 dark:bg-black">
      {projects.map((proj, i) => (
        <ProjectCard key={i} {...proj} />
      ))}
    </div>
  );
}

export default Projects;
