import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type Props = HTMLAttributes<HTMLElement>

export default function EmptyState(props: Props) {
    return (
        <div {...props} className={cn('flex flex-col items-center justify-center h-full text-center', props.className)}>
            <p className="text-2xl font-medium">No decisions yet!</p>

            <p className="text-neutral-4">Add a decision to get started.</p>
        </div>
    );
}