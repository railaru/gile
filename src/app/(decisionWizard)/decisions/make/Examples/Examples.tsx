'use client';

import React, { lazy, Suspense } from 'react';
import { Sheet } from '@/components/ui/Sheet/Sheet';
import useStore from '@/app/(decisionWizard)/decisions/make/Examples/store';

const Content = lazy(() => import('./Content'));

export default function Examples() {
    const { isExamplesModalOpened, setIsExamplesModalOpened } = useStore();

    return (
        <>
            <button
                className="text-primary font-[300]"
                type="button"
                onClick={() => setIsExamplesModalOpened(true)}
            >
                Examples
            </button>

            {isExamplesModalOpened && (
                <Suspense>
                    <Sheet open={isExamplesModalOpened} onOpenChange={(isOpen) => setIsExamplesModalOpened(isOpen)}>
                        <Content/>
                    </Sheet>
                </Suspense>
            )}
        </>
    );
}
