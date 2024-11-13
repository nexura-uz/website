import useThemeStore from '@/stores/theme-store';
import { useEffect } from 'react';

const ThemeSwitcher = () => {
  const { isDarkMode, toggleTheme } = useThemeStore();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <label className="inline-flex items-center cursor-pointer select-none">
      <input
        type="checkbox"
        checked={isDarkMode}
        onChange={toggleTheme}
        className="hidden"
      />
      <span className="relative">
        <span className="block w-10 h-6 bg-gray-300 dark:bg-gray-600 rounded-full shadow-inner"></span>
        <span
          className={`absolute top-0 left-0 w-6 h-6 bg-white dark:bg-yellow-400 rounded-full shadow-md transform transition-all duration-300 ease-in-out
          ${isDarkMode ? 'translate-x-6' : 'translate-x-0'}
          `}
        >
          <span
            className={`absolute left-0 top-0 w-full h-full flex items-center justify-center transition-all duration-300 ease-in-out ${isDarkMode ? 'opacity-0' : 'opacity-100'
              }`}
          >
            🌙
          </span>
          <span
            className={`absolute left-0 top-0 w-full h-full flex items-center justify-center transition-all duration-300 ease-in-out ${isDarkMode ? 'opacity-100' : 'opacity-0'
              }`}
          >
            🌞
          </span>
        </span>
      </span>
    </label>
  );
};

export default ThemeSwitcher;
