import { Github, Linkedin, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-12 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-center md:text-left mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Alan Rangel. Todos los derechos reservados.
        </p>

        <div className="flex space-x-6">
          <a
            href="https://github.com/LangerTwo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition flex items-center gap-1"
          >
            <Github size={18} /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition flex items-center gap-1"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
          <a
            href="mailto:adrangel95@gmail.com"
            className="hover:text-blue-400 transition flex items-center gap-1"
          >
            <Mail size={18} /> Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
