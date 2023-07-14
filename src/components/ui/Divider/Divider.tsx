import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement>;

export default function Divider({ ...props }: Props) {
  return (
    <div {...props} className={cn("h-[1px] bg-neutral-6", props.className)} />
  );
}
