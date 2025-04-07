import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle"; // Asegúrate de que la ruta sea correcta
import React from "react";
import { useTranslation } from 'react-i18next'
// import LanguageSwitcher from './components/LanguageSwitcher'
import LanguageSwitcher from "./LanguageSwitcher";

function Navbar() {
  const { t } = useTranslation()
  
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between">
      <h1 className="text-xl font-bold">Mi Portafolio</h1>
      <ul className="flex space-x-4">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/about">{t('about')}</Link></li>
        <li><Link to="/projects">{t('projects')}</Link></li>
        <li><Link to="/contact">{t('contact')}</Link></li>
      </ul>
      <DarkModeToggle />
      <LanguageSwitcher />
    </nav>
  );
}

export default Navbar;