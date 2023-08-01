import React from "react";
import { ReactNode } from "react";
import Header from "@/app/(steps)/[steps]/Header/Header";
import Aside from "@/app/(steps)/[steps]/Aside/Aside";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />

      <div className="lg:flex">
        <Aside />

        <div className="lg:h-[calc(100vh-50px)] lg:overflow-auto w-full">
          <main className="max-w-[800px] mx-auto pt-12 pb-24">{children}</main>
        </div>
      </div>
    </>
  );
}
