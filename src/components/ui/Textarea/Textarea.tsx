import React, { Ref, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function Textarea(
  { className, ...props }: TextareaProps,
  ref: Ref<HTMLTextAreaElement>
) {
  return (
    <textarea
      className={cn(
        "placeholder:text-muted-foreground resize-none",
        "flex min-h-[120px] w-full px-3 py-2",
        "ring-offset-background focus-visible:outline-none focus-visible:ring-2",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "rounded-[4px] border border-input bg-white font-[300] placeholder:font-[200]",
        className
      )}
      ref={ref}
      {...props}
    />
  );
}
