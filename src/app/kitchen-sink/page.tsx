import Pane from "@/components/ui/Pane/Pane";
import React from "react";
import ExampleForm from "./ExampleForm/ExampleForm";
import { ProfileForm } from "./ProfileForm/ProfileForm";
import { redirect } from "next/navigation";
import { PAGE_ROUTES } from "@/constants/routes";

export default function Page() {
  if (process.env.NODE_ENV !== "development") {
    redirect(PAGE_ROUTES.HOME);
  }

  return (
    <div className="container mt-12 lg:mt-24">
      <h1 className="text-3xl font-medium">Kitchen sink</h1>

      <Pane className="mt-8 max-w-[800px]">
        <ExampleForm />
      </Pane>

      <Pane className="mt-8 max-w-[800px]">
        <ProfileForm />
      </Pane>
    </div>
  );
}
