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

        <main className="max-w-[800px] mx-auto py-12">{children}</main>
      </div>
    </>
  );
}
