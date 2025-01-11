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
          I am a JavaScript Developer with experience in React and React Native development. 
          I have contributed to the development of a Web3 social media platform at Torum Technology. Currently,
          I am focusing on building scalable mobile applications using React Native and working with the MERN stack 
          (MongoDB, Express, React, Node.js). I'm also pursuing a Bachelor's in Computer Applications
          (BCA) from Lovely Professional University.
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
