import React from "react";
import Cta from "../Cta/Cta";
import { PAGE_ROUTES } from "@/constants/routes";
import RiskWeightedReturn from "../Sections/RiskWeightedReturn/RiskWeightedReturn";
import HighRewardHighRisk from "../Sections/HighRewardHighRisk/HighRewardHighRisk";

export default function Overview() {
  return (
    <div>
      <div className="grid gap-8 mt-20 lg:grid-cols-2">
        <div>
          <Cta
            emoji="🐢"
            title="Risk weighted return"
            description="Slow and steady wins the race. Find tradeoffs that that optimise for long term wins."
            link={{
              title: "Discover",
              url: PAGE_ROUTES.STEPS.TRADEOFFS.HASH_SECTIONS
                .RISK_WEIGHTED_RETURN,
            }}
          />
        </div>

        <div>
          <Cta
            emoji="🎸"
            title="High reward & High risk"
            description="Find oppurtinities optimised for the biggest reward while ignoring the risk."
            link={{
              title: "Discover",
              url: PAGE_ROUTES.STEPS.TRADEOFFS.HASH_SECTIONS
                .HIGH_REWARD_HIGH_RISK,
            }}
          />
        </div>
      </div>

      <RiskWeightedReturn />

      <HighRewardHighRisk />
    </div>
  );
}
