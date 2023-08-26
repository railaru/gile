import Pane from '@/components/ui/Pane/Pane';
import React from 'react';
import EvaluateOptions from './EvaluateOptions/EvaluateOptions';

export default function Page() {
    return (
        <div>
            <Pane className="space-y-8">
                <div className="lg:w-[680px] space-y-6 lg:space-y-8">
                    <div className="lg:flex lg:justify-between lg:items-center">
                        <h1 className="text-2xl font-[300]">Evaluate options</h1>

                        {/* todo: add evaluation examples */}
                        {/*<Examples/> */}
                    </div>

                    <h2 className="lg:text-xl font-[300] text-neutral-2 max-w-[360px]">
                        Add what options do you have for making your decision.
                    </h2>
                </div>
            </Pane>

            <EvaluateOptions/>
        </div>
    );
}
