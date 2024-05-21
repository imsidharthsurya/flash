import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useDispatch,useSelector } from "react-redux";

const usePopularMovies=()=>{
    const popularMovies=useSelector((store)=>store.movie.popularMovies)
    const dispatch=useDispatch();

    const getPopularMovies=async()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/popular?page=1",API_OPTIONS);
        const json=await data.json();
        // console.log("popular movies are: ",json);
        dispatch(addPopularMovies(json.results));
    }
    useEffect(()=>{
        if(!popularMovies){
            getPopularMovies();
        }
        
    },[])
}

export default usePopularMovies;