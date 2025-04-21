import { useState } from 'react';
import { useTranslation } from 'react-i18next'

function ProjectCard({ title, description, img, link, demo, moreInfo }) {
  const { t } = useTranslation()
  const [showModal, setShowModal] = useState(false)

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
        {moreInfo && (
          <button
            onClick={() => setShowModal(true)}
            className="text-sm text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded"
          >
            {t('more_info')}
          </button>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000db] bg-opacity-60 p-4">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl max-w-md w-full shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">{title}</h3>
            <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{t(moreInfo)}</p>
            <div className="mt-6 text-right">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                {t('close')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectCard;