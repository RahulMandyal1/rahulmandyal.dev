import React from "react";
import Link from "next/link";
import Avatar from "@/components/Avatar";
import { SOCIALS } from "@/data/social-links";
import { SocialLink } from "@/components/SocialLinks";
import { BlogList } from "@/components/BlogList";

export default function Home() {
  return (
    <React.Fragment>
      <section className="mb-5">
        <Avatar />
        <h1 className="text-2xl font-bold">Rahul thakur</h1>

        <div>
          <p className="mt-4">
            I’m a fullstack software engineer specializing in building scalable
            web applications having rich user interface using javascript.
          </p>
          <p className="mt-4 mb-4">
            I&apos;ve worked with startups to deliver end-to-end solutions
            across various domains, including Web3 platforms and crypto
            exchanges. My contributions have played a key role in enhancing user
            experiences. &nbsp; Currently, I am building a SaaS platform,
            focusing on delivering innovative and efficient software solutions.
          </p>

          <p className="mb-4">
            If you&apos;d like to collaborate, please&nbsp;
            <a
              href="mailto:rahulthakurcoder@gmail.com"
              className="border-b inline-block"
            >
              send me an email
            </a>
            &nbsp;or reach out on any of my social handles.
          </p>
        </div>

        <div className="flex space-x-4 mb-2 mt-4">
          {SOCIALS.map((link) => {
            return <SocialLink {...link} key={link.href} />;
          })}
        </div>
      </section>

      <div className="my-8 w-full border-t border-gray-200 dark:border-gray-800" />

      <div>
        <h2 className="mb-6 text-2xl font-bold">Latest posts</h2>
        <BlogList />
      </div>
    </React.Fragment>
  );
}
