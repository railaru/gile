"use client";

import React, { Suspense, lazy, useState } from "react";
import { Sheet } from "@/components/ui/Sheet/Sheet";

const Content = lazy(() => import("./Content"));

export default function Examples() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <>
      <button
        className="text-primary font-[300]"
        type="button"
        onClick={() => setIsOpened(true)}
      >
        Examples
      </button>

      {isOpened && (
        <Suspense>
          <Sheet open={isOpened} onOpenChange={setIsOpened}>
            <Content />
          </Sheet>
        </Suspense>
      )}
    </>
  );
}
