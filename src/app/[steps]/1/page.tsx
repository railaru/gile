import BottomNav from "@/app/BottomNav/BottomNav";
import { PAGE_ROUTES } from "@/constants/routes";
import React from "react";

export default function Page() {
  return (
    <div>
      <BottomNav nextLink={PAGE_ROUTES.STEPS[2]} />
    </div>
  );
}
