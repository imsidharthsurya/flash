import React, { useRef } from 'react'
import { API_OPTIONS, BG_IMAGE } from '../utils/constants'
import lang from '../utils/languageConstant'
import { useSelector,useDispatch } from 'react-redux'
import openai from '../utils/openai'
import { addMovieResults } from '../utils/gptSlice'
const GptSearchBar = () => {

  const dispatch=useDispatch();
  const searchText=useRef(null);
  const langValue=useSelector((store)=>store.config.lang)
  const searchMovie=async(movie)=>{
    const data=await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&page=1",API_OPTIONS);
    const json=await data.json();
    return json.results;//array of objects of diff. movies
  }
  const handleGptSearch=async()=>{
      // console.log("search input value is: ",searchText.current.value);

      const gptQuery="Act as a Movie recommendation system and suggest some movie for the query: "+
        searchText.current.value+". only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Dhol";
      const gptResults=await openai.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery}],
        model: 'gpt-3.5-turbo',
      });
      // console.log("final gpt results are: ",gptResults.choices?.[0]?.content.split(","));
      const gptMovies=gptResults.choices?.[0]?.content.split(",");  //array of 5 movies name

      const promiseArray=gptMovies.map((movie)=>{
          return searchMovie(movie);
      })  //this will be array of promise b/c fetch will take some time to get resolved
      //so data will be array of 5 promises
      //now to get data from this promiseArray we've to use Promise.all()
      const tmdbResults=await Promise.all(promiseArray);
      dispatch(addMovieResults({movieNames:gptMovies,movieResults:tmdbResults}));
  }
  return (
    <div>
        <img className="absolute -z-10" src={BG_IMAGE} alt="bg-image"/>
    <div className='pt-[12%] flex justify-center'>
        
        <form className='bg-black w-1/2 grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText} className='col-span-9 py-2 px-4 m-4' type='text' placeholder={lang[langValue].searchPlaceholder}/>
            <button onClick={handleGptSearch} className='col-span-3 py-2 px-4 m-4 bg-red-600 text-white rounded-md'>{lang[langValue].search}</button>
        </form>
    </div>
    </div>
  )
}

export default GptSearchBar