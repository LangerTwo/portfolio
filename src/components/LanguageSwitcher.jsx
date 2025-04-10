import { useState } from "react";
import { useTranslation } from 'react-i18next';
import { Check, ChevronDown, Globe } from "lucide-react";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const languages = [
    { code: "en", label: "English" },
    { code: "es", label: "Español" },
  ];

  // CORREGIDO: ahora acepta directamente un código de idioma
  const handleChange = (selectedLang) => {
    i18n.changeLanguage(selectedLang);
    setOpen(false); // cerrar menú después de seleccionar
  };

  const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0];

  return (
    <div className="relative">
      <button 
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 rounded-md bg-white text-black border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <Globe className="h-4 w-4 text-gray-500" />
        <span className="text-sm font-medium">{currentLanguage.label}</span>
        <ChevronDown
          className={`h-4 w-4 text-gray-500 transition-transform
            ${open ? "transform rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="absolute w-full rounded-md bg-white text-black border border-gray-200 shadow-lg z-10">
          <ul className="overflow-auto" role="listbox" aria-labelledby="language-selector">
            {languages.map((language) => (
              <li
                key={language.code}
                role="option"
                aria-selected={language.code === i18n.language}
                className={`flex items-center justify-between px-3 py-2 text-sm cursor-pointer hover:bg-gray-100 ${
                  language.code === i18n.language ? "bg-gray-100" : ""
                }`}
                onClick={() => handleChange(language.code)}
              >
                <span>{language.label}</span>
                {language.code === i18n.language && <Check className="w-4 h-4 text-green-500" />}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
