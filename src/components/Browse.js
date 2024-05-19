
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import { useSelector } from "react-redux";
import GptSearchPage from "./GptSearchPage";

const Browse=()=>{

    useNowPlayingMovies();
    usePopularMovies();
    useUpcomingMovies();
    useTopRatedMovies();
    const showSearch=useSelector((store)=>store.gpt.showSearch);
    return (
        <div>
            <Header/>
            {
                showSearch?<GptSearchPage/>:<><MainContainer/>
                <SecondaryContainer/></>
            }
            
        </div>
    )
}

export default Browse;