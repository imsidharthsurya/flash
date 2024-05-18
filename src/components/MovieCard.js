import React from 'react'
import { TMDB_IMG_URL } from '../utils/constants'

const MovieCard = ({title,poster_path}) => {
  return (
    <div className='w-48 pr-4'>
        <img className='h-full' alt={title} src={TMDB_IMG_URL+poster_path}/>
    </div>
  )
}

export default MovieCard