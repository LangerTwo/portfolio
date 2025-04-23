import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from 'react-i18next';
import DarkModeToggle from "./DarkModeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { Link as ScrollLink } from 'react-scroll';

// import Logo from "../assets/logo.png";
import Logo from "../assets/logo.png";

function Navbar() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const links = [
    { to: "home", label: t("home") },
    { to: "about", label: t("about") },
    { to: "projects", label: t("projects_title") },
    { to: "contact", label: t("contact") },
  ];

  return (
    <nav className="fixed z-50 w-full bg-gray-900 text-white px-6 py-4 flex justify-between shadow-lg items-center">
      <h1 className="text-xl font-bold">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          onClick={closeMenu}
          className="cursor-pointer transition"
        >
          {/* Mi Portafolio */}
          <img src={Logo} alt="Logo" className="w-30 h-10 object-cover cursor-pointer" />
        </ScrollLink>
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 items-center">
        {links.map((link) => (
          <li key={link.to}>
            <ScrollLink
              to={link.to}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              activeClass="bg-blue-500 bg-opacity-20 rounded-md px-2 py-1 transition-all duration-300"
              onClick={closeMenu}
              className="cursor-pointer px-2 py-1 transition-all duration-300 hover:text-blue-400"
            >
              {link.label}
            </ScrollLink>
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
              <li
                key={link.to}
                className="w-full flex flex-col py-3 items-center tracking-widest border-b-2 border-gray-700"
              >
                <ScrollLink
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  spy={true}
                  activeClass="bg-blue-500 bg-opacity-20 rounded-md px-2 py-1 transition-all duration-300"
                  onClick={closeMenu}
                  className="cursor-pointer transition"
                >
                  {link.label}
                </ScrollLink>
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
// This code defines a responsive navigation bar using React and Tailwind CSS.