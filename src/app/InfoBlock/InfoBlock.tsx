import Pane from '@/components/ui/Pane/Pane';
import React from 'react';

export default function InfoBlock() {
    return (
        <Pane className="mt-24 lg:mt-32">
            <div className="text-2xl lg:text-5xl lg:grid-cols-2 grid gap-8">
                <div className="space-y-8 text-neutral-2 font-normal">
                    <h3>1. Ask a question</h3>

                    <h3>2. List your options</h3>

                    <h3>3. Evaluate</h3>
                </div>

                <div className="flex items-center">
                    <h3>
                        Find the best tradeoff for you.
                    </h3>
                </div>
            </div>
        </Pane>
    );
}