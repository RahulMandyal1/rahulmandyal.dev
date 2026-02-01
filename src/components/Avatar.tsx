import React from "react";
import Image from "next/image";

const Avatar: React.FC = (): React.ReactNode => {
  return (
    <div className="w-[110px] h-[110px] rounded-full overflow-hidden   mb-5 ">
      <Image
        src="https://avatars.githubusercontent.com/u/93306066?v=4"
        width={110}
        height={110}
        alt="avatar"
        className="rounded-full cursor-pointer hover:grayscale fit-cover"
        priority
      />
    </div>
  );
};

export default Avatar;
