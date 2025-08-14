import { useEffect, useState } from "react";
import IconMoon from "../assets/icon-moon.svg";
import IconSun from "../assets/icon-sun.svg";

function useColorTheme(initial: "dark" | "light") {
  const [theme, setTheme] = useState(initial);
  
  useEffect(() => {
    const theme = localStorage.getItem("x-color-theme") ?? 'light';
    
    if (theme === "light" || theme === "dark") {
      setTheme(theme);
    } else {
      setTheme("light");
      localStorage.setItem("x-color-theme", "light");
    }
  }, []);

  useEffect(() => {
    setThemeClassName(theme);
  }, [theme]);
  
  function setThemeClassName(theme: "dark" | "light") {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
    localStorage.setItem("x-color-theme", theme);
  }

  function toggle() {
    setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'));
    setThemeClassName(theme);
  }

  return {
    theme, toggle
  }
}

export function GUIButtonTheme() {
  const { theme, toggle } = useColorTheme("light");
  return (
    <button 
      className="button w-12 h-12 flex items-center justify-center bg-neutral-100 dark:(bg-neutral-700 text-white) rounded-xl" 
      onClick={toggle}
      aria-label={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <img src={theme === 'dark' ? IconSun : IconMoon} alt="" />
      <span className="sr-only">
        {theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </span>
    </button>
  );
}
