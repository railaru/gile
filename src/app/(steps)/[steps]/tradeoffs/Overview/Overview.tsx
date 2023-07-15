"use client";

import React from "react";
import useOptionsStore from "../../store/options";
import Cta from "../Cta/Cta";
import { PAGE_ROUTES } from "@/constants/routes";
import Pane from "@/components/ui/Pane/Pane";

export default function Overview() {
  const { options } = useOptionsStore();

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

      <Pane id="long-term-thinking" className="mt-16">
        <div className="justify-between lg:flex lg:items-start">
          <div>
            <h1 className="text-2xl font-[300]">Long term thinking</h1>

            <h2 className="text-xl font-[300] text-neutral-2 max-w-[360px] mt-[32px]">
              Slow and steady wins the race. Find tradeoffs that that optimise
              for long term wins.
            </h2>
          </div>

          <div>
            <h3 className="text-[130px] relative lg:top-[-28px] lg:mb-[-45px]">
              🐢
            </h3>
          </div>
        </div>

        {options.length > 0 && (
          <ul className="mt-16 space-y-4">
            {options.map((option, index) => (
              <li
                key={index}
                className="rounded-[4px] px-4 py-[21.5px] bg-white"
              >
                #{index} {option.title}
              </li>
            ))}
          </ul>
        )}
      </Pane>
    </div>
  );
}
