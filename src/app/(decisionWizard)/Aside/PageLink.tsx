import React, { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function PageLink({href, children, isActive}: {
	href: string,
	children: ReactNode,
	isActive?: boolean
}) {
	return (
		<Link
			href={href}
			className={cn('text-sm font-[300] focus:bg-neutral-7 hover:bg-neutral-7 transition-colors p-2 -m-2 rounded-[4px]', {
				'text-primary bg-neutral-7': isActive,
			})}
		>
			{children}
		</Link>
	);
}
