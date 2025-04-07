import { useTranslation } from 'react-i18next'

function Home() {
  const { t } = useTranslation()

  return (
    <div className="bg-white dark:bg-black flex flex-col items-center justify-center h-screen text-center p-4">
      <h1 className="dark:text-white text-4xl font-bold">{t('greeting')}</h1>
      <p className="dark:text-white mt-4 text-lg">Desarrollador Frontend | React | UI/UX</p>
    </div>
  );
}
  
export default Home;