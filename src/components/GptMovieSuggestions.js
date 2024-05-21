import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestions = () => {

  const gptMoviess=useSelector((store)=>store.gpt)
  const {gptMovies,movieNames}=gptMoviess
  if(!gptMovies) return null;//show shimmer ui
  return (
    <div>
      {
        movieNames.map((movie,index)=>{
          return <MovieList key={movie} title={movie} movies={gptMovies[index]}/>
        })
      }
      
    </div>
  )
}

export default GptMovieSuggestions