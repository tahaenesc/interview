// store/filterStore.ts
import {create} from "zustand";

type FilterStoreType = {
  statusFilter: string;
  genderFilter: string;
  setStatusFilter: (status: string) => void;
  setGenderFilter: (gender: string) => void;
};

export const useFilterStore = create<FilterStoreType>((set) => ({
  statusFilter: "",
  genderFilter: "",
  setStatusFilter: (status) => set({ statusFilter: status }),
  setGenderFilter: (gender) => set({ genderFilter: gender }),
}));
