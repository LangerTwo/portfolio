import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react"; // o usa cualquier ícono que te guste

function DarkModeToggle() {
    const [darkMode, setDarkMode] = useState(
      localStorage.getItem("theme") === "dark"
    );
  
    useEffect(() => {
      const root = window.document.documentElement;
      if (darkMode) {
        root.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        root.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }, [darkMode]);
  
    return (
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    );
  }
  
export default DarkModeToggle;