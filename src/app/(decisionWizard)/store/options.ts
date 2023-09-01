'use client';

import { Option } from '@/types/options';
import { create } from 'zustand';

type Store = {
    options: Option[];
    setOptions: (payload: Option[]) => void;
    removeOption: (payload: Option) => void;
    editOption: (payload: Option) => void;
    optionsAreValidated: boolean;
    setOptionsAreValidated: (payload: boolean) => void;
};

const useOptionsStore = create<Store>(
    (set) => ({
        options: [],
        setOptions: (payload) => set({ options: payload }),
        removeOption: (payload) =>
            set((state) => ({
                options: state.options.filter((option) => option.id !== payload.id),
            })),
        editOption: (payload) =>
            set((state) => ({
                options: state.options.map((option) => {
                    if (option.id === payload.id) {
                        return payload;
                    }
                    return option;
                }),
            })),
        optionsAreValidated: false,
        setOptionsAreValidated: (payload) => set({ optionsAreValidated: payload }),
    }),
);


export default useOptionsStore;
