import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux'

const SecondryContainer = () => {
  const movies = useSelector((store) => store.movies)

  return (
    movies.nowPlayingMovies &&
    (
      <div className='secondaryBackgroung'>
      <div>

        <MoviesList title={"Now Playing"} movie={movies.nowPlayingMovies} />
        <MoviesList title={"Popular"} movie={movies.popularMovies} />
        <MoviesList title={"Top Movies"} movie={movies.topRatedMovies} />
        <MoviesList title={"Horrer"} movie={movies.upcommingMovies} />

      </div>
      </div>
    )
  )
}

export default SecondryContainer