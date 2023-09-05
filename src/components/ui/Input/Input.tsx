import { cn } from "@/lib/utils";
import { forwardRef, HtmlHTMLAttributes, InputHTMLAttributes, ReactNode } from "react";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
	error?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({className, type, error, ...props}, ref) => {
		return (
			<input
				type={type}
				className={cn(
					"placeholder:text-muted-foreground placeholder:font-[200] flex h-10 w-full ring-offset-background focus-visible:outline-none focus-visible:ring-2 rounded-[4px] border border-input bg-background px-3 py-2  file:border-0 file:bg-transparent file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
					{
						"border-destructive ring-transparent": error && error?.length > 0,
					},
					className
				)}
				ref={ref}
				{...props}
			/>
		);
	}
);

Input.displayName = "Input";

type Props = HtmlHTMLAttributes<HTMLDivElement> & {
	inputProps?: InputHTMLAttributes<HTMLInputElement>;
	error?: string;
	icon?: ReactNode;
};

export const InputGroup = forwardRef<HTMLInputElement, Props>(
	({icon, error, inputProps, ...props}, ref) => {
		return (
			<div {...props} className={cn("w-full relative ", props.className)}>
				{icon && (
					<div className="absolute left-3 top-2.5">{icon}</div>
				)}

				<input
					{...inputProps}
					className={cn(
						"placeholder:font-[200] flex h-10 ring-offset-background focus-visible:outline-none focus-visible:ring-2 rounded-[4px] border border-input bg-background px-3 py-2  file:border-0 file:bg-transparent file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 w-full",
						{
							"border-destructive ring-transparent": error && error?.length > 0,
							"pl-10": icon,
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
