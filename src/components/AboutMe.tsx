import React from "react";
import Avatar from "./Avatar";
import SocialLinksCard from "./SocialLinksCard";

const AboutMe = () => {
  return (
    <section className="mb-5  text-gray-100">
      <Avatar />
      <h1 className="text-2xl font-bold">Rahul thakur</h1>
      <div>
        <p className="mt-4">
          I’m a fullstack software engineer specializing in building scalable
          web applications having rich user interface using javascript.
        </p>
        <p className="mt-4 mb-4">
          I&apos;ve worked with startups to deliver end-to-end solutions across
          various domains, including Web3 platforms and crypto exchanges. My
          contributions have played a key role in enhancing user experiences.
          &nbsp; Currently, I am building a SaaS platform, focusing on
          delivering innovative and efficient software solutions.
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
      <SocialLinksCard />
    </section>
  );
};

export default AboutMe;
