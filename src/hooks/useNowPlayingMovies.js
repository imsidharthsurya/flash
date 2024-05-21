import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies=()=>{

    const nowPlayingMovies=useSelector((store)=>store.movie.nowPlayingMovies);
    const dispatch=useDispatch();
    const getNowPlayingMovies=async()=>{
        const res=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_OPTIONS)
        const data=await res.json();
        dispatch(addNowPlayingMovies(data.results))
        // console.log("movie data is ",data.results);
    }

    useEffect(()=>{
        if(!nowPlayingMovies){
            getNowPlayingMovies();
        }
    },[])
}

export default useNowPlayingMovies;