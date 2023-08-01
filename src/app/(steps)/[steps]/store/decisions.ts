"use client";

import { create } from "zustand";

type Store = {
  decision: string;
  setDecision: (payload: string) => void;
};

const useDecisionsStore = create<Store>((set) => ({
  decision: "What next step should I take for my career?",
  setDecision: (payload) => set({ decision: payload }),
}));

export default useDecisionsStore;
