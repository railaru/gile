'use client';

import React, { useEffect, useState } from 'react';
import { Sheet, SheetContent, } from '@/components/ui/Sheet/Sheet';
import Links from '@/app/(decisionWizard)/Aside/Links';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import { usePathname } from 'next/navigation';

export default function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

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
                    <Links className="mt-10"/>
                </SheetContent>
            </Sheet>
        </div>
    );
}
