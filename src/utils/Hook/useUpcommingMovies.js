import { useEffect } from "react"
import {  addUpcommingMovies } from "../movieSlice"
import { useDispatch, useSelector } from "react-redux"
import { API_OPTION } from "../constant"

const useUpcommingMovies = () => {
  const dispatch = useDispatch()
  const upcommingMovies = useSelector(store => store.movies.upcommingMovies)
  useEffect(() => {
    !upcommingMovies && getUpcommingMovies()
  }, [])

  const getUpcommingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTION)
    const json = await data.json()
    // console.log(json)
    dispatch(addUpcommingMovies(json.results))
  }

}

export default useUpcommingMovies;