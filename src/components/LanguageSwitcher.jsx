import { useTranslation } from 'react-i18next'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className="flex gap-2 p-2">
      <button onClick={() => changeLanguage('en')}>🇺🇸 EN</button>
      <button onClick={() => changeLanguage('es')}>🇪🇸 ES</button>
    </div>
  )
}

export default LanguageSwitcher