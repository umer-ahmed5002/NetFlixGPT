import { useEffect } from "react"
import { addPopularMovies } from "../movieSlice"
import { useDispatch, useSelector } from "react-redux"
import { API_OPTION } from "../constant"
import { useSearchParams } from "react-router-dom"

const usePopularMovies = () => {
  const popularMovies = useSelector(store => store.movies.popularMovies)
  const dispatch = useDispatch()
  useEffect(() => {
    !popularMovies && getPopularMovies()
  }, [])

  const getPopularMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTION)
    const json = await data.json()
    // console.log(json.results)
    dispatch(addPopularMovies(json.results))
  }

}

export default usePopularMovies;