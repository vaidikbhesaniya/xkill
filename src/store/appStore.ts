import { create } from 'zustand';

interface AppStore {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

export const AppStore = create<AppStore>((set) => ({
  theme: 'light',
  setTheme: (theme: 'light' | 'dark') => set({ theme }),
}));
