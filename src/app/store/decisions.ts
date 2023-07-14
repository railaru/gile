"use client";

import { create } from "zustand";

type Store = {
  decision: string;
  setDecision: (payload: string) => void;
};

const useDecisionsStore = create<Store>((set) => ({
  decision: "How can I start a business?",
  setDecision: (payload) => set({ decision: payload }),
}));

export default useDecisionsStore;
