import React from 'react'
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

import { useSelector } from "react-redux";
const MainContainer = () => {

    const movies=useSelector((store)=>store.movie?.nowPlayingMovies);
    if(!movies) return;    //early return in case of movies not fetched useSelector will
    //automatically gives updated store value once fetched & re-render will happen

    const topMovie=movies[0];
  return (
    <div>
         <VideoTitle title={topMovie.original_title} overview={topMovie.overview}/>
        <VideoBackground movieId={topMovie.id}/>
    </div>
  )
}

export default MainContainer