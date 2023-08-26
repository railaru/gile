import Button from "@/components/ui/Button/Button";
import { cn } from "@/lib/utils";
import Link from "next/link";

import React, { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLElement>;

export default function BottomNav({ ...props }: Props) {
  return (
    <nav
      {...props}
      className={cn(
        "fixed bottom-0 right-0 w-full h-[50px] border-t border-t-neutral-6 flex items-center justify-end bg-white px-4 lg:px-8 lg:w-[calc(100vw-280px)]",
        props.className
      )}
    >
      {props.children}
    </nav>
  );
}
