import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch,useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";


const useUpcomingMovies=()=>{

    const upcomingMovies=useSelector((store)=>store.movie.upcomingMovies)
    const dispatch=useDispatch();
    const getUpcomingMovies=async()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1",API_OPTIONS);
        const json=await data.json();

        // console.log("upcoming movies are: ",json.results);
        dispatch(addUpcomingMovies(json.results));
    }

    useEffect(()=>{
        if(!upcomingMovies){
            getUpcomingMovies();
        }
        
    },[]);
}

export default useUpcomingMovies;