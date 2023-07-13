import React from "react";
import Pane from "@/components/ui/Pane/Pane";
import Examples from "./Examples/Examples";

export default function Page() {
  return (
    <div>
      <Pane className="space-y-8">
        <div className="lg:w-[680px] space-y-8">
          <div className="lg:flex lg:justify-between lg:items-center">
            <h1 className="text-2xl font-[300]">What options do you have?</h1>

            <Examples />
          </div>

          <div className="h-[1px] bg-neutral-6" />
        </div>
      </Pane>
    </div>
  );
}
