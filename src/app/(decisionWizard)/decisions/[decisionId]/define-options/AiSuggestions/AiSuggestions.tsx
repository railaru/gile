'use client';

import React, { lazy, Suspense, useState } from 'react';
import { Sheet } from '@/components/ui/Sheet/Sheet';
import Button from '@/components/ui/Button/Button';

const Content = lazy(() => import('./Content'));

export default function AiSuggestions() {
    const [isOpened, setIsOpened] = useState(false);

    return (
        <>
            <Button
                variant="ghost"
                className="text-primary font-[300]"
                type="button"
                onClick={() => setIsOpened(true)}
            >
                AI suggestions
            </Button>

            {isOpened && (
                <Suspense>
                    <Sheet open={isOpened} onOpenChange={setIsOpened}>
                        <Content/>
                    </Sheet>
                </Suspense>
            )}
        </>
    );
}
