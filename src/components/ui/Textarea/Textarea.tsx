import React, { HtmlHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Props = HtmlHTMLAttributes<HTMLDivElement> & {
  textAreaProps?: TextareaHTMLAttributes<HTMLTextAreaElement>;
  error?: string;
  currentCharacterCount?: number;
  maxCharacterCount?: number;
};

export default function TextareaGroup({
  className,
  error,
  currentCharacterCount,
  maxCharacterCount,
  textAreaProps,
  ...props
}: Props) {
  const showCharacterCount =
    currentCharacterCount !== undefined && maxCharacterCount !== undefined;

  return (
    <div {...props}>
      <div className="relative">
        <textarea
          className={cn(
            "placeholder:text-muted-foreground resize-none",
            "flex min-h-[120px] w-full px-3 py-2",
            "ring-offset-background focus-visible:outline-none focus-visible:ring-2",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "rounded-[4px] border border-input bg-white font-[300] placeholder:font-[200]",
            {
              "border-destructive ring-transparent": error,
            },
            className
          )}
          {...textAreaProps}
        />

        {showCharacterCount && (
          <h4 className="absolute bottom-2 right-3 text-neutral-3 font-[300]">
            {currentCharacterCount}/{maxCharacterCount}
          </h4>
        )}
      </div>

      {error && (
        <p className="text-destructive font-[300] mt-2 text-sm">{error}</p>
      )}
    </div>
  );
}
