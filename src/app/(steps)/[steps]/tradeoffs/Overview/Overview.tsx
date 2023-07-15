"use client";

import React from "react";
import useOptionsStore from "../../store/options";

export default function Overview() {
  const { options } = useOptionsStore();

  return <div>{JSON.stringify(options)}</div>;
}
