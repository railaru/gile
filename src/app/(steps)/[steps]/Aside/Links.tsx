"use client";

import React from "react";
import { PAGE_ROUTES } from "@/constants/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
const links = [
  {
    name: "What decision do you have to make?",
    url: PAGE_ROUTES.STEPS[1],
  },
  {
    name: "What options do you have?",
    url: PAGE_ROUTES.STEPS[2],
  },
  {
    name: "Evaluate your options",
    url: PAGE_ROUTES.STEPS[3],
  },
];

export default function Links() {
  const pathName = usePathname();

  return (
    <ul className="space-y-4">
      {links.map((link, index) => (
        <li key={index}>
          <Link
            href={link.url}
            className={cn("text-sm font-[300]", {
              "text-primary": pathName === link.url,
            })}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
