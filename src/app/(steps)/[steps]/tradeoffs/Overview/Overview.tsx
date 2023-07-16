import React from "react";
import Cta from "../Cta/Cta";
import { PAGE_ROUTES } from "@/constants/routes";
import Pane from "@/components/ui/Pane/Pane";
import HighLongTermReturnLowRisk from "../Sections/HighLongTermReturnLowRisk/HighLongTermReturnLowRisk";

export default function Overview() {
  return (
    <div>
      <div className="grid gap-8 mt-20 lg:grid-cols-2">
        <div>
          <Cta
            emoji="🐢"
            title="Long term thinking"
            description="Slow and steady wins the race. Find tradeoffs that that optimise for long term wins."
            link={{
              title: "Discover",
              url: PAGE_ROUTES.STEPS.TRADEOFFS.HASH_SECTIONS.LONG_TERM_THINKING,
            }}
          />
        </div>

        <div>
          <Cta
            emoji="🎸"
            title="High reward & risky opportunities"
            description="Find oppurtinities optimised for the biggest review while ignoring the risk."
            link={{
              title: "Discover",
              url: PAGE_ROUTES.STEPS.TRADEOFFS.HASH_SECTIONS
                .HIGH_REWARD_HIGH_RISK,
            }}
          />
        </div>
      </div>

      <HighLongTermReturnLowRisk />
    </div>
  );
}
