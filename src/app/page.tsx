import LineSeprator from "@/components/LineSeprator";
import LatestPosts from "@/components/LatestPosts";
import AboutMe from "@/components/AboutMe";
import OpenSource from "@/components/OpenSource";

export default function Home() {
  return (
    <>
      <AboutMe />
      <LineSeprator />
      <OpenSource />
      <LineSeprator />
      <LatestPosts />
    </>
  );
}
