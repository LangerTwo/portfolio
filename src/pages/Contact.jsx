import { useTranslation } from 'react-i18next'

function Contact() {
  const { t } = useTranslation()
  
  return (
    <div className="p-8 text-center dark:bg-black dark:text-white">
      <h2 className="text-2xl font-bold">{t('contact')}</h2>
      <p>Correo: tuemail@gmail.com</p>
      <p>LinkedIn: linkedin.com/in/tuusuario</p>
    </div>
  );
}
export default Contact;