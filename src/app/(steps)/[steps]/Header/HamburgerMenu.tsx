"use client";

import React from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export default function HamburgerMenu() {
  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="h-[50px] -my-[10px] flex items-center justify-center px-4 -mx-4"
      >
        <HamburgerMenuIcon className="w-6 h-6" />
      </button>
    </div>
  );
}
