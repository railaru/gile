import { cn } from "@/lib/utils";
import { HtmlHTMLAttributes, InputHTMLAttributes, forwardRef } from "react";

type Props = HtmlHTMLAttributes<HTMLDivElement> & {
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
  error?: string;
};

const InputGroup = forwardRef<HTMLInputElement, Props>(
  ({ error, inputProps, ...props }, ref) => {
    return (
      <div {...props} className={cn("w-full", props.className)}>
        <input
          {...inputProps}
          className={cn(
            "placeholder:font-[200] flex h-10 ring-offset-background focus-visible:outline-none focus-visible:ring-2 rounded-[4px] border border-input bg-background px-3 py-2  file:border-0 file:bg-transparent file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 w-full",
            {
              "border-destructive ring-transparent": error && error?.length > 0,
            },
            inputProps?.className
          )}
          ref={ref}
        />

        {error && (
          <p className="text-destructive font-[300] mt-2 text-sm">{error}</p>
        )}
      </div>
    );
  }
);

InputGroup.displayName = "InputGroup";

export default InputGroup;
