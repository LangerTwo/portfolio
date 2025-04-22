import { useTranslation } from 'react-i18next'

function Home() {
  const { t } = useTranslation()

  return (
    <div className="bg-white dark:bg-black flex flex-col items-center justify-center h-screen text-center p-4">
      <h1 className="dark:text-white text-4xl font-bold animate__animated animate__fadeIn">{t('greeting')}</h1>
      <p className="dark:text-white mt-4 text-lg">{t('developer')} Frontend | React | UI/UX</p>
      <div className="flex gap-4 mt-6">
        <img src="/path/to/react-icon.png" alt="React" className="w-8 h-8 dark:text-white" />
        <img src="/path/to/tailwind-icon.png" alt="Tailwind" className="w-8 h-8 dark:text-white" />
      </div>
    </div>
  );
}
  
export default Home;