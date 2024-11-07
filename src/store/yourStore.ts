import { create } from 'zustand';

type YourStoreType = {
  yourState: string;
  setYourState: (newState: string) => void;
};

export const useYourStore = create<YourStoreType>((set) => ({
  yourState: '',
  setYourState: (newState) => set({ yourState: newState }),
}));
