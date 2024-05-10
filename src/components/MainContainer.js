import React from 'react'
import { useSelector } from 'react-redux'
import MovieTitle from './MovieTitle'
import MovieBackground from './MovieBackground'

const MainContainer = () => {

  const movies = useSelector((store) => store.movies?.nowPlayingMovies)
  if(movies === null) return;
  const mainMovie = movies[0]
  // console.log(mainMovie)

  const {original_title, overview, id} = mainMovie

  return (
    <div>

      <MovieTitle title={original_title} overview={overview}/>
      <MovieBackground videoId={id}/>      
    
    </div>
  )
}

export default MainContainer