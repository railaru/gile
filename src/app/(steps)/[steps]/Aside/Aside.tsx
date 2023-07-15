import React from "react";
import Links from "./Links";

export default function Aside() {
  return (
    <aside className="lg:min-h-[calc(100vh-50px)] pt-2 px-4 lg:px-8 lg:pt-12 lg:pb-8 lg:border-r lg:border-neutral-6 lg:w-[280px] overflow-auto">
      <Links />
    </aside>
  );
}
