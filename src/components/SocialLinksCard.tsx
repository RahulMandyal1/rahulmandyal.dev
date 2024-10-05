import { SOCIALS } from "@/data/social-links";
import React from "react";
import { SocialLink } from "./SocialLink";

export default function SocialLinksCard(): React.ReactNode {
  return (
    <div className="flex space-x-4 mb-2 mt-4">
      {SOCIALS.map((link) => {
        return <SocialLink {...link} key={link.href} />;
      })}
    </div>
  );
}
