
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Check for system preference or stored preference
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark" || 
        (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative rounded-full p-1.5 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
      aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 45 : 0 }}
        transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
      >
        {theme === "light" ? (
          <Moon className="h-[18px] w-[18px]" />
        ) : (
          <Sun className="h-[18px] w-[18px]" />
        )}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;
