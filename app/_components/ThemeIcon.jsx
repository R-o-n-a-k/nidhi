"use client";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

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
      <Sun className="icon-size hidden dark:block text-[#FFE28A]" />
      <Moon className="icon-size block dark:hidden text-[#CDCDCD]" />
    </div>
  );
};

export default ThemeIcon;
