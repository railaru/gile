import Pane from "@/components/ui/Pane/Pane";
import { type LinkType } from "@/types/link";
import Link from "next/link";
import React, { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLElement> & {
  emoji: string;
  title: string;
  description: string;
  link: LinkType;
};

export default function Cta(props: Props) {
  const { link, emoji, title, description } = props;

  return (
    <Pane {...props} className="lg:p-[40px]">
      <h4 className="text-[60px] lg:mt-[-45px] lg:mb-[-45px]">
        <span className="lg:top-[-45px] relative">{emoji}</span>
      </h4>

      <h3 className="text-2xl font-[300] mt-4">{title}</h3>

      <h2 className="text-xl font-[300] text-neutral-2 max-w-[360px] mt-[32px]">
        {description}
      </h2>

      <Link
        href={link.url}
        className="text-primary font-[300] mt-4 inline-block"
      >
        {link.title}
      </Link>
    </Pane>
  );
}
