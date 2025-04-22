import { useTranslation } from 'react-i18next'

function About() {
  const { t } = useTranslation()
  const aboutMe = t("about_me", { returnObjects: true }); // Debe devolver un array

  return (
    <div className="p-8 dark:bg-black dark:text-white">
      <h1 className="text-2xl font-bold">{t('about')}</h1>
      <div className="mt-4 space-y-4">
        {Array.isArray(aboutMe) ? (
          aboutMe.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))
        ) : (
          <p>{aboutMe}</p> // En caso de que no sea un array, muestra el texto directamente
        )}
      </div>
    </div>
  );
}

export default About;
// El componente About muestra información sobre mí, utilizando la función useTranslation para traducir el contenido.