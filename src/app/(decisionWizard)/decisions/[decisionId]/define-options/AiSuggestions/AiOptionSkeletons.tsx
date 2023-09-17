import React from 'react';

export default function AiOptionSkeletons() {
    return (
        <div className="flex flex-col gap-4">
            {
                Array.from({ length: 8 }).map((_, index) => (
                    <div
                        key={index}
                        className="bg-neutral-7 animate-pulse rounded-[4px] h-[78px] flex justify-between items-center px-4 gap-24"
                    >
                        <p className="bg-neutral-6 animate-pulse rounded-[4px] w-full h-[20px]"/>

                        <span className="bg-neutral-6 animate-pulse rounded-[4px] w-[40px] h-[20px]"/>
                    </div>
                ))
            }
        </div>
    );
}