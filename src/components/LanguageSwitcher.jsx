import { useTranslation } from 'react-i18next'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  const handleChange = (event) => {
    const selectedLang = event.target.value;
    i18n.changeLanguage(selectedLang);
  };

  return (
    <select
      onChange={handleChange}
      value={i18n.language}
      className="bg-gray-700 text-white dark:bg-gray-600 dark:text-white px-3 py-1 rounded"
    >
      <option value="en">English</option>
      <option value="es">Español</option>
    </select>
  )
}

export default LanguageSwitcher