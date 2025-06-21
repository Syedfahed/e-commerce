
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-all duration-300 hover:scale-110 hover:bg-accent/10"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors duration-200" />
      ) : (
        <Sun className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors duration-200" />
      )}
    </button>
  );
};

export default ThemeToggle;
