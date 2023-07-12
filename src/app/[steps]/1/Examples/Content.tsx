import React from "react";
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/Sheet/Sheet";
import Button from "@/components/ui/Button/Button";

type MockDataItem = {
  emoji: string;
  category: string;
  title: string;
};

const mockData: MockDataItem[] = [
  {
    emoji: "🚀",
    category: "Career",
    title: "“What next steps should I take in my career?”",
  },
  {
    emoji: "📈",
    category: "Business",
    title: "“Should I hire a project manager?””",
  },
  {
    emoji: "🚀",
    category: "Career",
    title: "“What next steps should I take in my career?”",
  },
  {
    emoji: "📈",
    category: "Business",
    title: "“Should I hire a project manager?””",
  },
  {
    emoji: "🚀",
    category: "Career",
    title: "“What next steps should I take in my career?”",
  },
  {
    emoji: "📈",
    category: "Business",
    title: "“Should I hire a project manager?””",
  },
  {
    emoji: "🚀",
    category: "Career",
    title: "“What next steps should I take in my career?”",
  },
  {
    emoji: "📈",
    category: "Business",
    title: "“Should I hire a project manager?””",
  },
  {
    emoji: "🚀",
    category: "Career",
    title: "“What next steps should I take in my career?”",
  },
  {
    emoji: "📈",
    category: "Business",
    title: "“Should I hire a project manager?””",
  },
];

export default function Content() {
  return (
    <SheetContent className="w-full sm:min-w-[540px] lg:min-w-[680px]">
      <SheetHeader className="mt-10">
        <SheetTitle>Examples</SheetTitle>

        <ul>
          {mockData.map((item, index) => (
            <li key={index} className="mt-16 bg-neutral-7/50">
              <div className="p-8 mt-8">
                <h4 className="text-[80px] -mt-[85px]" aria-label="Emoji">
                  {item.emoji}
                </h4>

                <div className="space-y-8">
                  <h3 className="text-3xl font-[300]">{item.category}</h3>

                  <h4 className="text-3xl font-[200] text-neutral-2">
                    {item.title}
                  </h4>

                  <Button>Apply</Button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </SheetHeader>
    </SheetContent>
  );
}
