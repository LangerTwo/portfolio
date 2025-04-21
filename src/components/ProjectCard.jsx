import { useState } from 'react';
import { useTranslation } from 'react-i18next'
import ProjectModal from './ProjectModal';

function ProjectCard({ title, description, img, link, demo, moreInfo, slides }) {
  const { t } = useTranslation()
  // const [showModal, setShowModal] = useState(false)
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md dark:shadow-white dark:shadow-sm overflow-hidden p-4">
      {img && <img src={img} alt={title} className="w-full h-40 object-cover rounded hover:scale-105 duration-150" />}
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
        {moreInfo && (
          <button
            onClick={() => setModalOpen(true)}
            className="text-sm text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded"
          >
            {t('more_info')}
          </button>
        )}
      </div>

      {/* Modal */}
      <ProjectModal isOpen={modalOpen} onClose={() => setModalOpen(false)} slides={slides} />
    </div>
  );
}

export default ProjectCard;