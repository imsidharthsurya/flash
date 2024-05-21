import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-[40%] md:pt-[20%] pl-4 md:pl-20 absolute bg-gradient-to-r from-black text-white w-screen aspect-video'>
        <h1 className='text-lg md:text-4xl font-bold'>{title}</h1>
        <p className='hidden md:block w-1/2 mt-5'>{overview}</p>
        <button className='px-3 py-1 md:px-8 md:py-2 bg-red-600 mt-10 mr-2 rounded-md md:font-bold hover:bg-opacity-80'>Play</button>
        <button className='px-3 py-1 md:font-bold md:px-4 md:py-2 bg-red-600 rounded-md hover:bg-opacity-80'>More Info</button>
    </div>
  )
}

export default VideoTitle