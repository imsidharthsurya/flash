import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {
  const movies=useSelector((store)=>store.movie)
  if(!movies.nowPlayingMovies || !movies.topRatedMovies || !movies.upcomingMovies || !movies.popularMovies) return;//early return since at starting null will be there in
  //now playing movies store
  return (
    <div className='bg-black text-white'>
      <div className='pl-8 -mt-60 relative z-20'>
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Popular"} movies={movies.popularMovies}/>
        <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
        <MovieList title={"Upcoming"} movies={movies.upcomingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer