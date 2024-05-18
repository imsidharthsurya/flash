import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {

    console.log("In movie list title is: ",title," and movies are: ",movies)
  return (
    <div className='px-6 py-4'>
        <h1 className='text-2xl py-2'>{title}</h1>
    <div className='flex overflow-x-scroll no-scrollbar'>
        
        <div className='flex'>
            {
                movies.map((movie)=>{
                    return <MovieCard key={movie.id} title={movie.original_title} poster_path={movie.poster_path}/>
                })
            }
            
        </div>
    </div>
    </div>
  )
}

export default MovieList