import { cn } from "../libs/utils";
import Link from "next/link";
import React from "react";

interface Props {
  label: string;
  href: string;
  icon: React.ElementType;
}

export function SocialLink({ label, href, icon: Icon }: Props) {
  return (
    <Link
      href={href}
      target="_blank"
      className="group flex text-sm font-medium transition"
    >
      <Icon className="h-6 w-6 fill-zinc-500 group-hover:fill-zinc-200 transition" />
      <span className="sr-only">{label}</span>
    </Link>
  );
}
