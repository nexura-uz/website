// themeStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ThemeState {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      isDarkMode: false,
      toggleTheme: () =>
        set((state) => {
          const newTheme = !state.isDarkMode;
          document.documentElement.classList.toggle('dark', newTheme);
          return { isDarkMode: newTheme };
        }),
    }),
    {
      name: 'theme', // name of the item in localStorage
    }
  )
);

export default useThemeStore;
