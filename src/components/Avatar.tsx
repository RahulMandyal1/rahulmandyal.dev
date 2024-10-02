import React from 'react'
import Image from "next/image";


const Avatar : React.FC = ():React.ReactNode=> {
  return (
  <div className='w-[150px] h-[150px] rounded-full overflow-hidden'>
      <Image
          src="/_static/me.jpg"
          width={150}
          height={150}
          alt="avatar"
          className="rounded-full cursor-pointer hover:grayscale mb-5 fit-cover"
          priority
        />

  </div>
  )
}

export default Avatar