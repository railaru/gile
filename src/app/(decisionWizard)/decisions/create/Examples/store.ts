'use client';

import { create } from 'zustand';

type Store = {
    isExamplesModalOpened: boolean;
    setIsExamplesModalOpened: (payload: boolean) => void;
};

const useStore = create<Store>((set) => ({
    isExamplesModalOpened: false,
    setIsExamplesModalOpened: (payload) => set({ isExamplesModalOpened: payload }),
}));

export default useStore;
