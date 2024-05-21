import React from 'react'
import {useSelector} from "react-redux"
import useTrailerVideo from '../hooks/useTrailerVideo'


const VideoBackground = ({movieId}) => {

  const trailerData=useSelector((store)=>store.movies?.trailerVideo)
  useTrailerVideo(movieId);
  return (
    <div>
      <iframe className="pt-[45%] md:pt-0 w-screen aspect-video" src={"https://www.youtube.com/embed/XeDbyVODQ5M?si="+trailerData?.key+"&autoplay=1&mute=1"} title="YouTube video player" allow="autoplay"></iframe>
      {/* <iframe className="w-screen aspect-video" src={"https://www.youtube.com/embed/XeDbyVODQ5M?si="+trailerData?.key+"&autoplay=1&mute=1"} title="YouTube video player" referrerPolicy="strict-origin-when-cross-origin" allow="autoplay"></iframe> */}
    </div>
  )
}

export default VideoBackground