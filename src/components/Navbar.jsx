import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle"; // Asegúrate de que la ruta sea correcta
import React from "react";

function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between">
      <h1 className="text-xl font-bold">Mi Portafolio</h1>
      <ul className="flex space-x-4">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/about">Sobre mí</Link></li>
        <li><Link to="/projects">Proyectos</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
      </ul>
      <DarkModeToggle />
    </nav>
  );
}

export default Navbar;