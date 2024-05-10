import { useEffect } from "react"
import { addTopRatedMovies } from "../movieSlice"
import { useDispatch, useSelector } from "react-redux"
import { API_OPTION } from "../constant"

const useTopRatedMovies = () => {
  const topRatedMovies = useSelector(store => store.movies.topRatedMovies)
  const dispatch = useDispatch()
  useEffect(() => {
    !topRatedMovies && getTopRatedMovies()
  }, [])

  const getTopRatedMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTION)
    const json = await data.json()
    // console.log(json.results)
    dispatch(addTopRatedMovies(json.results))
  }

}

export default useTopRatedMovies;