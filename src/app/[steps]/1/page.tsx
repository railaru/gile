import Pane from "@/components/ui/Pane/Pane";
import React from "react";
import Examples from "./Examples/Examples";
import DecisionForm from "./DecisionForm/DecisionForm";

export default function Page() {
  return (
    <div>
      <Pane className="space-y-8">
        <div className="lg:w-[680px] space-y-8">
          <div className="lg:flex lg:justify-between lg:items-center">
            <h1 className="text-2xl font-[300]">
              What decision do you have to make?
            </h1>

            <Examples />
          </div>

          <div className="h-[1px] bg-neutral-6" />

          <DecisionForm />
        </div>
      </Pane>
    </div>
  );
}
