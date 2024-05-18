import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-[20%] pl-20 absolute bg-gradient-to-r from-black text-white w-screen aspect-video'>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <p className='w-1/2 mt-5'>{overview}</p>
        <button className='px-8 py-2 bg-red-600 mt-10 mr-2 rounded-md font-bold hover:bg-opacity-80'>Play</button><button className='font-bold px-4 py-2 bg-red-600 rounded-md hover:bg-opacity-80'>More Info</button>
    </div>
  )
}

export default VideoTitle