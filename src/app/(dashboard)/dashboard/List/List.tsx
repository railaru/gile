'use client';

import { useMutation } from 'convex/react';
import { api } from '../../../../../convex/_generated/api';
import Link from 'next/link';
import { Id } from '../../../../../convex/_generated/dataModel';
import EmptyState from '@/app/(dashboard)/dashboard/EmptyState/EmptyState';
import { cn } from '@/lib/utils';
import { useDecisions } from '@/hooks/queries/useDecisions';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/components/ui/DropdownMenu/DropdownMenu';
import { CandlestickChart, FileEdit, List as ListIcon, MoreHorizontal, Scale, Trash } from 'lucide-react';
import { PAGE_ROUTES } from '@/constants/routes';
import useStoreUserEffect from '@/hooks/auth/useStoreUserEffect';

export default function List() {
    const { data, isReady, isEmpty, isLoading } = useDecisions();
    const deleteDecision = useMutation(api.decisions.deleteById);

    const handleDelete = async (_id: Id<'decisions'>) => {
        await deleteDecision({ _id });
    };

    useStoreUserEffect();

    return <>
        {isReady && (
            <ul className="grid gap-8 md:grid-cols-2">
                {data?.map((item) => (
                    <li key={item._id} className="bg-neutral-7/50 rounded-[4px] p-4 lg:p-7 pt-7 lg:pt-10 relative">
                        <DropdownMenu>
                            <DropdownMenuTrigger
                                className="absolute right-3 top-2 rounded-full hover:bg-neutral-6/50 h-7 w-7 inline-flex items-center justify-center transition"
                                onClick={() => handleDelete(item._id)}
                            >
                                <MoreHorizontal className="w-5 h-5 text-neutral-2"/>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent className="min-w-[200px]">
                                <DropdownMenuItem>
                                    <Link href={PAGE_ROUTES.DECISIONS.MAKE(item._id)} className="flex">
                                        <FileEdit className="w-4 h-4 mr-2"/>

                                        <span>
                                            Edit decision
                                        </span>
                                    </Link>
                                </DropdownMenuItem>

                                <DropdownMenuItem>
                                    <Link href={PAGE_ROUTES.DECISIONS.DEFINE_OPTIONS(item._id)} className="flex">
                                        <ListIcon className="w-4 h-4 mr-2"/>

                                        <span>Update options</span>
                                    </Link>
                                </DropdownMenuItem>

                                <DropdownMenuItem>
                                    <Link href={PAGE_ROUTES.DECISIONS.EVALUATE_OPTIONS(item._id)} className="flex">
                                        <Scale className="w-4 h-4 mr-2"/>

                                        <span>Re-evaluate options</span>
                                    </Link>
                                </DropdownMenuItem>

                                <DropdownMenuItem>
                                    <Link href={PAGE_ROUTES.DECISIONS.TRADEOFFS.INDEX(item._id)} className="flex">
                                        <CandlestickChart className="w-4 h-4 mr-2"/>

                                        <span>See results</span>
                                    </Link>
                                </DropdownMenuItem>

                                <DropdownMenuSeparator/>

                                <DropdownMenuItem
                                    className="text-destructive hover:text-destructive cursor-pointer"
                                    typeof="button"
                                    onClick={() => handleDelete(item._id)}
                                >
                                    <Trash className="w-4 h-4 mr-2"/>

                                    <span>Delete</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>


                        <h3 className="text-2xl">
                            {item.decision}
                        </h3>

                        <Link
                            href={PAGE_ROUTES.DECISIONS.TRADEOFFS.INDEX(item._id)}
                            className="text-primary inline-block mt-4"
                        >
                            Check results
                        </Link>
                    </li>
                ))}
            </ul>
        )}

        {isEmpty && (
            <EmptyState className={cn('transition', {
                'opacity-0': isLoading,
                'opacity-100': !isLoading,
            })}/>
        )}
    </>;
}