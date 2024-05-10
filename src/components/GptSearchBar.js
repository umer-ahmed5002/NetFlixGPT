import React, { useRef } from 'react'
import language from '../utils/languageConstant'
import { useDispatch, useSelector } from 'react-redux'
import { API_OPTION } from '../utils/constant'
import { addGptMovieResult } from '../utils/gptSlice'

const GptSearchBar = () => {

  const languageKey = useSelector((store) => store.config.lang)
  const searchText = useRef(null)
  const dispatch = useDispatch()

  const searchMovieTMDB = async (movie) => {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_OPTION)
    const json = await data.json()
    return json.results
  }

  const handleSearchClick = async () => {

    // console.log(searchText.current.value)
    // const getQuery = "Act as a Movie Recommendation system and suggest some movies for the query :" + searchText.current.value + "only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Done, Golmaal, Koi Mil Gaya";
    // const getResults = await openai.chat.completions.create({
    //   messages: [{ role: 'user', content: getQuery }],
    //   model: 'gpt-3.5-turbo',
    // });
    // console.log(getResults.choices)

    const gptMovies = ["Andaz Apna Apna", "Hera Pheri", "Chupke Chupke", "Angoor", "Padosan"]
    const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie))
    const tmdbResult = await Promise.all(promiseArray)
    console.log(tmdbResult)
    dispatch(addGptMovieResult({ moviesName: gptMovies, moviesResult: tmdbResult }))
  }
  return (
    <div className='pt-[20%]  flex justify-center'>

      <form className='w-[350px] grid grid-cols-12 bg-black p-5' onSubmit={(e) => e.preventDefault()}>
        <input ref={searchText} className=' rounded-md pl-3 bg-white col-span-9' type='text' placeholder={language[languageKey].gptSearchPlaceholder} />
        <button onClick={() => handleSearchClick()} className=' p-[5px] rounded-lg ml-2 text-white col-span-3 bg-red-700'>{language[languageKey].search}</button>
      </form>

    </div>
  )
}

export default GptSearchBar