import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTraillerVideo } from '../movieSlice'
import { API_OPTION } from '../constant'

const useMovieTrailer = (videoId) => {
  const dispatch = useDispatch()
  const trailerVideo = useSelector(store => store.movies.trailerVideo)

  const getMovieTrailer = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/" + videoId + "/videos?language=en-US", API_OPTION)
    const json = await data.json()
    const filterData = json.results.filter((video) => video.type === "Trailer")
    const trailer = filterData.length ? filterData[0] : json.results[0]
    // console.log(trailer)
    dispatch(addTraillerVideo(trailer))

  }
  useEffect(() => {
    !trailerVideo && getMovieTrailer()
  })
}

export default useMovieTrailer;