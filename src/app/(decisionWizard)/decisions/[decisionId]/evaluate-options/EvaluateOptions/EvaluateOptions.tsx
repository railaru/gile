'use client';

import React, { useEffect } from 'react';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from '@/components/ui/Table/Table';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from '@/components/ui/Tooltip/Tooltip';
import useOptionsStore from '@/app/(decisionWizard)/store/options';
import { Input } from '@/components/ui/Input/Input';
import { InfoCircledIcon } from '@radix-ui/react-icons';
import { tableHeadData } from './staticData';
import { z } from 'zod';
import { useFieldArray, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import BottomNav from '@/app/(decisionWizard)/BottomNav/BottomNav';
import Button from '@/components/ui/Button/Button';
import { PAGE_ROUTES } from '@/constants/routes';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { Id } from '../../../../../../../convex/_generated/dataModel';
import { useQuery } from 'convex/react';
import { api } from '../../../../../../../convex/_generated/api';

const minRating = 1;
const maxRating = 5;

const ratingSchema = z
.number()
.min(minRating, { message: `Min. rating is ${minRating}` })
.max(maxRating, { message: `Max. rating is ${maxRating}` });

export const schema = z.object({
    options: z.array(
        z.object({
            _id: z.string(),
            title: z.string(),
            ratings: z.object({
                financialCost: ratingSchema,
                levelOfEffort: ratingSchema,
                timeInvestment: ratingSchema,
                risk: ratingSchema,
                shortTermReturn: ratingSchema,
                longTermReturn: ratingSchema,
            }),
        })
    ),
});

type FormData = z.infer<typeof schema>;

export default function EvaluateOptions() {
    const router = useRouter();
    const params = useParams();
    const decisionId = params?.decisionId as Id<'decisions'>;

    const options = useQuery(api.options.getByDecisionId, { decisionId });
    const { setOptions, setOptionsAreValidated } = useOptionsStore();


    const {
        control,
        handleSubmit,
        register,
        setValue,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            options: [],
        },
        mode: 'onTouched',
    });

    const { fields } = useFieldArray({
        name: 'options',
        control,
    });

    const onSubmit = (data: FormData) => {
        // setOptions(data.options);
        setOptionsAreValidated(true);
        router.push(PAGE_ROUTES.DECISIONS.TRADEOFFS.INDEX(decisionId));
    };

    useEffect(() => {
        setValue('options', options || []);
    }, [options]);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 lg:mt-16 xl:mx-[-100px]">
            <Table>
                <TableHeader>
                    <TableRow>
                        {tableHeadData.map((head, index) => (
                            <TableHead key={index}>
                                <div className="flex items-start min-h-[40px]">
                                  <span className="pr-2 whitespace-nowrap lg:whitespace-normal">
                                    {head.title}
                                  </span>

                                    {head.tooltipContent && (
                                        <TooltipProvider>
                                            <Tooltip delayDuration={200}>
                                                <TooltipTrigger asChild>
                                                    <button
                                                        type="button"
                                                        className="p-1 relative top-[-2px] transition duration-200 rounded-full hover:bg-neutral-6 focus:bg-neutral-6"
                                                    >
                                                        <InfoCircledIcon className="w-4 h-4 text-neutral-2"/>
                                                    </button>
                                                </TooltipTrigger>

                                                <TooltipContent className="font-[200] max-w-[250px]">
                                                    {head.tooltipContent}
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    )}
                                </div>
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {fields.map((field, index) => {
                        return (
                            <TableRow key={index}>
                                <TableCell className="min-w-[184px]">{field.title}</TableCell>

                                <TableCell>
                                    <Input
                                        type="number"
                                        {...register(
                                            `options.${index}.ratings.financialCost` as const,
                                            {
                                                valueAsNumber: true,
                                                required: true,
                                            }
                                        )}
                                        min={minRating}
                                        max={maxRating}
                                        error={
                                            errors?.options?.[index]?.ratings?.financialCost?.message
                                        }
                                        className="text-sm font-[300] text-center rounded-none"
                                    />
                                </TableCell>

                                <TableCell>
                                    <Input
                                        type="number"
                                        {...register(
                                            `options.${index}.ratings.levelOfEffort` as const,
                                            {
                                                valueAsNumber: true,
                                                required: true,
                                            }
                                        )}
                                        min={minRating}
                                        max={maxRating}
                                        error={
                                            errors?.options?.[index]?.ratings?.levelOfEffort?.message
                                        }
                                        className="text-sm font-[300] text-center rounded-none"
                                    />
                                </TableCell>

                                <TableCell>
                                    <Input
                                        type="number"
                                        {...register(
                                            `options.${index}.ratings.timeInvestment` as const,
                                            {
                                                valueAsNumber: true,
                                                required: true,
                                            }
                                        )}
                                        min={minRating}
                                        max={maxRating}
                                        error={
                                            errors?.options?.[index]?.ratings?.timeInvestment?.message
                                        }
                                        className="text-sm font-[300] text-center rounded-none"
                                    />
                                </TableCell>

                                <TableCell>
                                    <Input
                                        type="number"
                                        {...register(`options.${index}.ratings.risk` as const, {
                                            valueAsNumber: true,
                                            required: true,
                                        })}
                                        min={minRating}
                                        max={maxRating}
                                        error={errors?.options?.[index]?.ratings?.risk?.message}
                                        className="text-sm font-[300] text-center rounded-none"
                                    />
                                </TableCell>

                                <TableCell>
                                    <Input
                                        type="number"
                                        {...register(
                                            `options.${index}.ratings.shortTermReturn` as const,
                                            {
                                                valueAsNumber: true,
                                                required: true,
                                            }
                                        )}
                                        min={minRating}
                                        max={maxRating}
                                        error={
                                            errors?.options?.[index]?.ratings?.shortTermReturn
                                                ?.message
                                        }
                                        className="text-sm font-[300] text-center rounded-none"
                                    />
                                </TableCell>

                                <TableCell>
                                    <Input
                                        type="number"
                                        {...register(
                                            `options.${index}.ratings.longTermReturn` as const,
                                            {
                                                valueAsNumber: true,
                                                required: true,
                                            }
                                        )}
                                        min={minRating}
                                        max={maxRating}
                                        error={
                                            errors?.options?.[index]?.ratings?.longTermReturn?.message
                                        }
                                        className="text-sm font-[300] text-center rounded-none"
                                    />
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>

            <BottomNav>
                <Button variant="ghost" type="button" asChild>
                    <Link
                        href={PAGE_ROUTES.DECISIONS.DEFINE_OPTIONS(decisionId)} // todo: replace with decision id from db
                    >
                        Go back
                    </Link>
                </Button>

                <Button type="submit" className="ml-4">Continue</Button>
            </BottomNav>
        </form>
    );
}
