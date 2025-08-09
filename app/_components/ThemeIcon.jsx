"use client";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeIcon = () => {
  const { theme, setTheme } = useTheme();

  const handleToggle = () => {
    const next = document.documentElement.classList.contains("dark")
      ? "light"
      : "dark";
    setTheme(next);
  };

  return (
    <div
      title="Toggle Theme"
      onClick={handleToggle}
      className="cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 relative w-5 h-5"
    >
      <FaSun className="theme-icon hidden dark:block text-[#FFE28A]" />
      <FaMoon className="theme-icon block dark:hidden text-[#CDCDCD]" />
    </div>
  );
};

export default ThemeIcon;
