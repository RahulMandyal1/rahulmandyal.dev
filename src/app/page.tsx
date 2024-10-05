import React from "react";
import LineSeprator from "@/components/LineSeprator";
import LatestPosts from "@/components/LatestPosts";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <React.Fragment>
      <AboutMe />
      <LineSeprator />
      <LatestPosts />
    </React.Fragment>
  );
}
