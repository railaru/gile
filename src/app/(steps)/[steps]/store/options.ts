'use client';

import { Option } from '@/types/options';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { localStorageKeys } from '@/constants/localStorageKeys';

type Store = {
    options: Option[];
    setOptions: (payload: Option[]) => void;
    removeOption: (payload: Option) => void;
    editOption: (payload: Option) => void;
    optionsAreValidated: boolean;
    setOptionsAreValidated: (payload: boolean) => void;
};

const useOptionsStore = create(
    persist<Store>(
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
        {
            name: localStorageKeys.options,
        }
    )
);

export default useOptionsStore;
