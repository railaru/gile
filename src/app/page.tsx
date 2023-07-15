import { PAGE_ROUTES } from "@/constants/routes";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div className="container mt-12 lg:mt-24">
      <h1 className="text-3xl font-medium">Welcome to the app!</h1>

      <Link
        href={PAGE_ROUTES.STEPS[1]}
        className="inline-block mt-4 text-primary"
      >
        Start with the first step
      </Link>
    </div>
  );
}
