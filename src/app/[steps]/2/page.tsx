import React from "react";
import Pane from "@/components/ui/Pane/Pane";
import Examples from "./Examples/Examples";
import Options from "./Options/Options";
import Divider from "@/components/ui/Divider/Divider";

export default function Page() {
  return (
    <div>
      <Pane className="space-y-8">
        <div className="lg:w-[680px] space-y-8">
          <div className="lg:flex lg:justify-between lg:items-center">
            <h1 className="text-2xl font-[300]">What options do you have?</h1>

            <Examples />
          </div>

          <h2 className="text-xl font-[300] text-neutral-2 max-w-[360px]">
            Add what possible options you could take to solve your challenge.
          </h2>

          <Divider />

          <Options />
        </div>
      </Pane>
    </div>
  );
}
