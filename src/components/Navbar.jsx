import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useTranslation } from 'react-i18next'
import DarkModeToggle from "./DarkModeToggle"; // Asegúrate de que la ruta sea correcta
import LanguageSwitcher from "./LanguageSwitcher";

function Navbar() {
  const { t } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const links = [
    { to: "/", label: t("home") },
    { to: "/about", label: t("about") },
    { to: "/projects", label: t("projects") },
    { to: "/contact", label: t("contact") },
  ];
  
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between">
      <h1 className="text-xl font-bold">
        <Link to="/" onClick={closeMenu}>Mi Portafolio</Link>
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 items-center">
        {links.map((link) => (
          <li key={link.to}>
            <Link to={link.to} onClick={closeMenu} className="hover:text-blue-400 transition">
              {link.label}
            </Link>
          </li>
        ))}
        <li><DarkModeToggle /></li>
        <li><LanguageSwitcher /></li>
      </ul>

      {/* Burger icon */}
      <div className="md:hidden flex items-center gap-4 z-10">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 top-0 left-0 w-full h-full min-h-screen divide-y opacity-90 bg-gray-800 text-white p-4 md:hidden">
          <ul className="space-y-4 flex flex-col items-center justify-center h-full">
            {links.map((link) => (
              <li key={link.to} className="w-full flex flex-col py-3 items-center tracking-widest border-b-2 border-gray-700">
                <Link to={link.to} onClick={closeMenu} className="hover:text-blue-400 transition">
                  {link.label}
                </Link>
              </li>
            ))}
            <li><DarkModeToggle /></li>
            <li><LanguageSwitcher /></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;