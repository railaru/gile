"use client";

import { AppProgressBar } from "next-nprogress-bar";

export default function RouteChangeAnimation() {
  return (
    <AppProgressBar
      height="3px"
      color="#00d369"
      options={{ showSpinner: false }}
      shallowRouting
    />
  );
}
