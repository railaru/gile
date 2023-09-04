'use client';

import React, { useEffect, useState } from 'react';
import { Sheet, SheetContent, } from '@/components/ui/Sheet/Sheet';
import LinksRequiringDecisionId from '@/app/(decisionWizard)/Aside/LinksRequiringDecisionId';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { useParams, usePathname, useSearchParams } from 'next/navigation';
import { Id } from "../../../../convex/_generated/dataModel";
import PageLink from "@/app/(decisionWizard)/Aside/PageLink";
import { PAGE_ROUTES } from "@/constants/routes";

export default function HamburgerMenu() {
	const [isOpen, setIsOpen] = useState(false);
	const pathName = usePathname();
	const params = useParams();
	const searchParams = useSearchParams();
	const decisionIdFromSearchParams = searchParams.get('id') as Id<'decisions'>;
	const decisionIdFromParams = params?.decisionId as Id<'decisions'>;
	const decisionId = decisionIdFromSearchParams || decisionIdFromParams;
	const decisionLink = decisionId ? PAGE_ROUTES.DECISIONS.MAKE(decisionId) : PAGE_ROUTES.DECISIONS.MAKE();

	useEffect(() => {
		setIsOpen(false);
	}, [pathName]);

	if (!decisionId) {
		return null;
	}

	return (
		<div className="lg:hidden">
			<button
				type="button"
				className="h-[50px] -my-[10px] flex items-center justify-center px-4 -mx-4"
				onClick={() => setIsOpen(true)}
			>
				<HamburgerMenuIcon className="w-6 h-6"/>
			</button>

			<Sheet open={isOpen} onOpenChange={(isOpen) => setIsOpen(isOpen)}>
				<SheetContent>
					<div className="space-y-4 flex-col flex mt-10">
						{
							<PageLink
								href={decisionLink}
								isActive={pathName.includes('make')}
							>
								What decision do you have to make?
							</PageLink>
						}

						<LinksRequiringDecisionId/>
					</div>
				</SheetContent>
			</Sheet>
		</div>
	);
}
