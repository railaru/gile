"use client";

import React, { FormEvent, SyntheticEvent } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/Table/Table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/Tooltip/Tooltip";
import useOptionsStore from "@/app/(steps)/[steps]/store/options";
import Input from "@/components/ui/Input/Input";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { tableHeadData } from "./staticData";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import BottomNav from "@/app/(steps)/[steps]/BottomNav/BottomNav";
import Button from "@/components/ui/Button/Button";

const minRating = 1;
const maxRating = 5;

const ratingSchema = z
  .number()
  .min(minRating, { message: `Min. rating is ${minRating}` })
  .max(maxRating, { message: `Max. rating is ${maxRating}` });

export const schema = z.object({
  options: z.array(
    z.object({
      id: z.string(),
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
  const { options } = useOptionsStore();

  console.log(options);

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      options,
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formValues = form.getValues();

    console.log(formValues);
  };

  const handleFieldChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    console.log(name, value);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="mt-16 xl:mr-[-200px]">
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
                            <InfoCircledIcon className="w-4 h-4 text-neutral-2" />
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
          {options.map((option) => (
            <TableRow key={option.id}>
              <TableCell>{option.title}</TableCell>

              {Object.values(option.ratings).map((value, index) => {
                const ratingName = Object.keys(option.ratings)[index];
                const fieldName = `options.${index}.ratings.${ratingName}`;

                return (
                  <TableCell key={index}>
                    <Input
                      defaultValue={value}
                      onChange={handleFieldChange}
                      name={fieldName}
                      type="number"
                      // min={minRating}
                      // max={maxRating}
                      className="text-center border-0"
                    />
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <BottomNav>
        <Button type="submit">Continue</Button>
      </BottomNav>
    </form>
  );
}
