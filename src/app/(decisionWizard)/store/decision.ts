'use client';

import { create } from 'zustand';

type Store = {
    decision: string;
    setDecision: (payload: string) => void;
};

const useDecisionStore = create<Store>((set) => ({
    decision: '',
    setDecision: (payload) => set({ decision: payload }),
}));

export default useDecisionStore;
