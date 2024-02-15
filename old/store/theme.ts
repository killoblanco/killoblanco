import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface ThemeMode {
  mode: 'light' | 'dark';
  toggle: () => void;
}

const getDefaultMode = (): 'light' | 'dark' => {
  const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  return isDarkMode ? 'dark' : 'light';
};

export const useThemeMode = create(persist<ThemeMode>(
  (set) => ({
    mode: getDefaultMode(),
    toggle: () => set((state) => ({ mode: state.mode === 'dark' ? 'light' : 'dark' }))
  }),
  {
    name: 'theme-mode',
    storage: createJSONStorage(() => sessionStorage)
  }
))