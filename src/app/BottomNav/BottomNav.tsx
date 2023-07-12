import Button from "@/components/ui/Button/Button";
import { cn } from "@/lib/utils";
import Link from "next/link";

import React, { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLElement> & {
  prevLink?: string;
  nextLink?: string;
};

export default function BottomNav({ prevLink, nextLink, ...props }: Props) {
  return (
    <nav
      {...props}
      className={cn(
        "fixed bottom-0 right-0 w-full h-[50px] border-t border-t-neutral-6 flex items-center justify-end bg-white px-4 lg:px-8 lg:w-[calc(100vw-280px)]",
        props.className
      )}
    >
      {prevLink && (
        <Button asChild variant="ghost" className="mr-4">
          <Link href={prevLink}>Go Back</Link>
        </Button>
      )}

      {nextLink && (
        <Button asChild>
          <Link href={nextLink}>Continue</Link>
        </Button>
      )}
    </nav>
  );
}
