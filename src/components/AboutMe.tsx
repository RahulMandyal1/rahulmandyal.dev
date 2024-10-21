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
          I am a fullstack software engineer specializing in building scalable
          web applications with rich user interfaces using JavaScript. I have
          worked with startups to deliver end-to-end solutions across various
          domains, including Web3 platforms and crypto exchanges. My
          contributions have played a key role in enhancing user experiences.
        </p>
        <p className="mt-4 mb-4">
          I’ve contributed as a Frontend and React Native Developer at Torum
          Technology and Technogetic Pvt. Ltd., developing web and mobile
          products, including Web3 platforms and crypto exchanges. I’ve also
          improved accessibility and enhanced platform security. Trained in MERN
          stack development from altcampus, I’m currently pursuing a BCA from
          Lovely Professional University. My tech stack includes HTML, CSS,
          JavaScript, Node.js, Express.js, React.js, MongoDB, React Native, and
          Xcode.
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
