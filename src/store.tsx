import { create } from 'zustand';

type Store = {
    partCode: string;
    setPartCode: (code: string) => void;
};

export const useStore = create<Store>((set) => ({
    partCode: "",
    setPartCode: (code) => set({ partCode: code }),
}));