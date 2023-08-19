import { cn } from '@/lib/utils';
import React, { HTMLAttributes } from 'react';

type Props = HTMLAttributes<HTMLElement>;

export default function Pane(props: Props) {
    return (
        <div
            {...props}
            className={cn(
                'p-4 rounded-[4px] bg-neutral-7/50 md:p-[60px] w-full',
                props.className
            )}
        >
            {props.children}
        </div>
    );
}
