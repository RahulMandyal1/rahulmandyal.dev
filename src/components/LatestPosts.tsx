import React from "react";
import { BlogList } from "./BlogList";

const LatestPosts = () => {
  return (
    <div>
      <h2 className="mb-6 text-2xl font-bold">Latest posts</h2>
      <BlogList />
    </div>
  );
};

export default LatestPosts;
