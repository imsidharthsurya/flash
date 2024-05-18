import { addTrailerVideo } from '../utils/moviesSlice'
import { API_OPTIONS } from '../utils/constants'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useTrailerVideo=(movieId)=>{
  const dispatch=useDispatch();
  const getTrailerVideo=async(movieId)=>{
      const data=await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",API_OPTIONS);
      const res=await data.json();
      // console.log("movie video detail is: ",res)
      //filter out only trailer videos
      const trailers=res.results.filter((video)=>{
        return video.type==="Trailer";
      })
      const trailer=trailers.length?trailers[0]:res.results[0];
      // console.log("trailer is: ",trailer)
      //dispatch the action to add trailer
      dispatch(addTrailerVideo(trailer));
  }

  useEffect(()=>{
    getTrailerVideo(movieId);
  },[])

}

export default useTrailerVideo;