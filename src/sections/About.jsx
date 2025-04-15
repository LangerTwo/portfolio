import { useTranslation } from 'react-i18next'


function About() {
  const { t } = useTranslation()

  return (
    <div className="p-8 dark:bg-black dark:text-white">
      <h1 className="text-2xl font-bold">{t('about')}</h1>
      <p className="mt-4">
        {t('about_me')}
      </p>
    </div>
  );
}
  
export default About;
  