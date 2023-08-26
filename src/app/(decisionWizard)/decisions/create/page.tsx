import Pane from '@/components/ui/Pane/Pane';
import React from 'react';
import Examples from './Examples/Examples';
import DecisionForm from './DecisionForm/DecisionForm';
import Divider from '@/components/ui/Divider/Divider';

export default function Page() {
    return (
        <div>
            <Pane className="space-y-8">
                <div className="lg:w-[680px] space-y-8">
                    <div className="lg:flex lg:justify-between lg:items-center">
                        <h1 className="text-2xl font-[300] mb-3">
                            What decision do you have to make?
                        </h1>

                        <Examples/>
                    </div>

                    <Divider/>

                    <DecisionForm/>
                </div>
            </Pane>
        </div>
    );
}
