import { t } from "i18next";

function About() {
    return (
      <div className="p-8 dark:bg-black dark:text-white">
        <h1 className="text-2xl font-bold">{t('about')}</h1>
        <p className="mt-4">
          Soy un desarrollador frontend apasionado por crear interfaces atractivas y funcionales.
        </p>
      </div>
    );
  }
  
export default About;
  