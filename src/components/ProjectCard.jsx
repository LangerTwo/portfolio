function ProjectCard({ title, description, img, link }) {
    return (
      <div className="bg-white rounded-xl shadow-md overflow-hidden p-4">
        <img src={img} alt={title} className="w-full h-40 object-cover rounded" />
        <h2 className="text-xl font-semibold mt-2">{title}</h2>
        <p className="text-gray-600">{description}</p>
        <a href={link} target="_blank" className="text-blue-500 mt-2 inline-block">Ver proyecto</a>
      </div>
    );
}

export default ProjectCard;