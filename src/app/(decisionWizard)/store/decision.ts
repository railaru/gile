'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { localStorageKeys } from '@/constants/localStorageKeys';

type Store = {
    decision: string;
    setDecision: (payload: string) => void;
};

const useDecisionStore = create(
    persist<Store>(
        (set) => ({
            decision: '',
            setDecision: (payload) => set({ decision: payload }),
        }),
        {
            name: localStorageKeys.decision,
        }
    )
);

export default useDecisionStore;
