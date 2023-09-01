'use client';

import { Option } from '@/types/options';
import { create } from 'zustand';
import { mockOptions } from '@/mock/options';

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
        options: mockOptions,
        setOptions: (payload) => set({ options: payload }),
        removeOption: (payload) =>
            set((state) => ({
                options: state.options.filter((option) => option._id !== payload._id),
            })),
        editOption: (payload) =>
            set((state) => ({
                options: state.options.map((option) => {
                    if (option._id === payload._id) {
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
