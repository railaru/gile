import Pane from "@/components/ui/Pane/Pane";
import React from "react";
import Examples from "./Examples/Examples";
import EvaluateOptions from "./EvaluateOptions/EvaluateOptions";

export default function Page() {
  return (
    <div>
      <Pane className="space-y-8">
        <div className="lg:w-[680px] space-y-8">
          <div className="lg:flex lg:justify-between lg:items-center">
            <h1 className="text-2xl font-[300]">Evaluate options</h1>

            <Examples />
          </div>

          <h2 className="text-xl font-[300] text-neutral-2 max-w-[360px]">
            Rate the options from 1 to 5.
          </h2>
        </div>
      </Pane>

      <EvaluateOptions />
    </div>
  );
}
