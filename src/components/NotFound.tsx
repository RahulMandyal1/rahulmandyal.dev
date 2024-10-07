import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        404 - Article Not Found
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Sorry, the article you are looking for does not exist or has been
        removed.
      </p>
      <a
        href="/"
        className="text-blue-500 hover:text-blue-700 font-semibold underline"
      >
        Go back to the homepage
      </a>
    </div>
  );
};

export default NotFound;
