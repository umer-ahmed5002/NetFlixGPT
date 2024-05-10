import React from 'react'
import { useSelector } from 'react-redux'
import MoviesList from './MoviesList'

const GptMoviesSuggation = () => {
  const {moviesName, moviesResult} = useSelector((store) => store.gpt)
  if(!moviesName) return null
  return (
    
    <div className=' bg-black text-white p-4 m-4 bg-opacity-80'>
      <div className=' flex overflow-x-auto srollBar'>
    {
      moviesName.map((moviesName, index) => <MoviesList title={moviesName} movie={moviesResult[index]} />)
    }
      </div>
    </div>
  )
}

export default GptMoviesSuggation