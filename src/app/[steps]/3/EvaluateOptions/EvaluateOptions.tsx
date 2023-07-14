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
import { QuestionMarkCircledIcon } from "@radix-ui/react-icons";

const tableHeadData = [
  {
    title: "Options",
  },
  {
    title: "Financial cost",
    tooltipContent: "Financial cost of your decision",
  },
  {
    title: "Level of effort",
    tooltipContent: "Level of effort required of you",
  },
  {
    title: "Time investment",
    tooltipContent: "Time investment required of you",
  },
  {
    title: "Risk",
    tooltipContent: "Risk of your decision",
  },
  {
    title: "Short term return",
    tooltipContent: "Short term return of your decision",
  },
  {
    title: "Long term return",
    tooltipContent: "Long term return of your decision",
  },
];

export default function EvaluateOptions() {
  const { options } = useOptionsStore();

  return (
    <div className="mt-16 xl:mr-[-100px]">
      <Table>
        <TableHeader>
          <TableRow>
            {tableHeadData.map((head, index) => (
              <TableHead key={index}>
                <div className="flex items-start">
                  <span className="pr-2">{head.title}</span>

                  {head.tooltipContent && (
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button type="button" className="relative top-[3px]">
                            <QuestionMarkCircledIcon />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent>{head.tooltipContent}</TooltipContent>
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
