import { useTranslation } from 'react-i18next'

function ProjectCard({ title, description, img, link, demo }) {
  const { t } = useTranslation()

  return (
    <div className="bg-white rounded-xl shadow-md dark:shadow-white dark:shadow-sm overflow-hidden p-4">
      {img && <img src={img} alt={title} className="w-full h-40 object-cover rounded hover:scale-105 transform duration-200" />}
      <h2 className="text-xl font-semibold mt-2">{title}</h2>
      <p className="text-gray-600">{t(description)}</p>
      <div className="flex gap-4 mt-3">
        <a href={link} target="_blank" className="text-blue-500 hover:underline">
          GitHub
        </a>
        {demo && (
          <a href={demo} target="_blank" className="text-blue-500 hover:underline">
            Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;