import { useTranslation } from 'react-i18next'

// Importa las imágenes de los proyectos aquí
import reactIcon from "../assets/portfolio/react-icon.png";
// import reactIcon from "../assets/portfolio/react-icon.webp";
import tailwindIcon from "../assets/portfolio/tailwind-icon.png";
import image2 from "../assets/imagen2.jpg";

function Home() {
  const { t } = useTranslation()

  return (
    <div className="bg-white dark:bg-black flex flex-col items-center justify-center h-screen text-center p-4" style={{ backgroundImage: `url(${image2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <h1 className="text-white text-4xl font-bold animate__animated animate__fadeIn">{t('greeting')}</h1>
      <p className="text-white mt-4 text-lg">{t('developer')} Frontend | React | UI/UX</p>
      <div className="flex gap-4 mt-6">
        <img src={reactIcon} alt="React" className="w-10 h-10 dark:text-white rounded-full" />
        <img src={tailwindIcon} alt="Tailwind" className="w-10 h-10 dark:text-white rounded-full" />
      </div>
    </div>
  );
}
  
export default Home;