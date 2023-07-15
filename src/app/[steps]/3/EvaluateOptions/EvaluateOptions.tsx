"use client";

import React from "react";

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
import useOptionsStore from "@/app/store/options";
import Input from "@/components/ui/Input/Input";
import { InfoCircledIcon } from "@radix-ui/react-icons";

const tableHeadData = [
  {
    title: "Options",
  },
  {
    title: "Financial cost",
    tooltipContent: (
      <>
        <h3 className="font-[400]">Money required.</h3>

        <p className="mt-1">
          How much financial capital do you need to take this option?
        </p>
      </>
    ),
  },
  {
    title: "Level of effort",
    tooltipContent: (
      <>
        <h3 className="font-[400]">Level of effort required of you.</h3>

        <p className="mt-1">
          Cognitive load, emotional load, physical load, learning curve, etc.
        </p>
      </>
    ),
  },
  {
    title: "Time investment",
    tooltipContent: (
      <>
        <h3 className="font-[400]">Time investment required of you.</h3>

        <p className="mt-1">
          Working hours, personal life sacrifices that you need to make, etc.
        </p>
      </>
    ),
  },
  {
    title: "Risk",
    tooltipContent: (
      <>
        <h3 className="font-[400]">Risk of this option.</h3>

        <p className="mt-1">
          How much are you risking? How likely is it to fail? What are the
          consequences of failure?
        </p>
      </>
    ),
  },
  {
    title: "Short term return",
    tooltipContent: (
      <>
        <h3 className="font-[400]">Short term return of this option.</h3>

        <p className="mt-1">
          What will you get in a few weeks after taking this option?
        </p>
      </>
    ),
  },
  {
    title: "Long term return",
    tooltipContent: (
      <>
        <h3 className="font-[400]">Long term return of this option.</h3>

        <p className="mt-1">
          What will you get in a few months or years after taking this option?
        </p>
      </>
    ),
  },
];

export default function EvaluateOptions() {
  const { options } = useOptionsStore();

  return (
    <div className="mt-16 xl:mr-[-200px]">
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

              <TableCell>
                <Input type="number" />
              </TableCell>

              <TableCell>
                <Input type="number" />
              </TableCell>

              <TableCell>
                <Input type="number" />
              </TableCell>

              <TableCell>
                <Input type="number" />
              </TableCell>

              <TableCell>
                <Input type="number" />
              </TableCell>

              <TableCell>
                <Input type="number" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
