import BottomNav from "@/app/BottomNav/BottomNav";
import Pane from "@/components/ui/Pane/Pane";
import Textarea from "@/components/ui/Textarea/Textarea";
import { PAGE_ROUTES } from "@/constants/routes";
import React from "react";
import Examples from "./Examples/Examples";

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

          <Textarea placeholder="Write one sentence about what challenge you want to tackle. Keep it short and simple." />
        </div>
      </Pane>

      <BottomNav nextLink={PAGE_ROUTES.STEPS[2]} />
    </div>
  );
}
