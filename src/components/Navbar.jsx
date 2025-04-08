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
      <div className="md:hidden flex items-center gap-4">
        <DarkModeToggle />
        <LanguageSwitcher />
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-0 left-0 w-full bg-gray-800 text-white p-4 md:hidden">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={closeMenu}
              className="block text-white hover:text-blue-400 transition"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;