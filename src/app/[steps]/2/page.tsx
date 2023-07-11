import BottomNav from "@/app/BottomNav/BottomNav";
import { PAGE_ROUTES } from "@/constants/routes";
import React from "react";

export default function Page() {
  return (
    <div>
      <BottomNav
        prevLink={PAGE_ROUTES.STEPS[1]}
        nextLink={PAGE_ROUTES.STEPS[3]}
      />
    </div>
  );
}
