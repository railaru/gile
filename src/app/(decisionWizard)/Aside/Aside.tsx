"use client";

import React from 'react';
import { Id } from "../../../../convex/_generated/dataModel";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import PageLink from "@/app/(decisionWizard)/Aside/PageLink";
import { PAGE_ROUTES } from "@/constants/routes";
import LinksRequiringDecisionId from "@/app/(decisionWizard)/Aside/LinksRequiringDecisionId";

export default function Aside() {
	const pathName = usePathname();
	const searchParams = useSearchParams();
	const params = useParams();
	const decisionIdFromSearchParams = searchParams.get('id') as Id<'decisions'>;
	const decisionIdFromParams = params?.decisionId as Id<'decisions'>;
	const decisionId = decisionIdFromSearchParams || decisionIdFromParams;
	const decisionLink = decisionId ? PAGE_ROUTES.DECISIONS.MAKE(decisionId) : PAGE_ROUTES.DECISIONS.MAKE();

	return (
		<aside
			className="lg:min-h-[calc(100vh-50px)] pt-2 px-4 lg:px-8 lg:pt-12 lg:pb-8 lg:border-r lg:border-neutral-6 lg:w-[280px] overflow-auto hidden lg:block"
		>
			<div className="space-y-4 flex-col flex">
				{
					<PageLink
						href={decisionLink}
						isActive={pathName.includes('make')}
					>
						What decision do you have to make?
					</PageLink>
				}
				{
					decisionId && (
						<LinksRequiringDecisionId/>
					)
				}
			</div>
		</aside>
	);
}
