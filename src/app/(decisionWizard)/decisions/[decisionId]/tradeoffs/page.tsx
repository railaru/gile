import Pane from '@/components/ui/Pane/Pane';
import Overview from './Overview/Overview';
import React from 'react';

export const metadata = {
    title: 'Tradeoffs | Gilė',
};
export default function Page() {
    return (
        <div>
            <Pane className="justify-between lg:flex lg:items-start">
                <div>
                    <h1 className="text-2xl font-[300]">
                        <span className="relative bottom-[3px] lg:hidden mr-3">
                            ⚖️
                        </span>

                        <span>
                            Evaluate tradeoffs
                        </span>
                    </h1>

                    <h2 className="lg:text-xl font-[300] text-neutral-2 max-w-[360px] mt-[32px]">
                        Pick the best option the based on tradeoffs that are the most
                        important to you.
                    </h2>
                </div>

                <div className="hidden lg:block">
                    <h3 className="text-[130px] relative lg:top-[-28px] lg:mb-[-45px] text-center lg:text-left">
                        ⚖️
                    </h3>
                </div>
            </Pane>

            <Overview/>
        </div>
    );
}
