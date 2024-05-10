import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMoviesSuggation from './GptMoviesSuggation'
import { IMG_BACKGROUND } from '../utils/constant'

const GptPage = () => {
  return (
    <div className='loginBackgroung'>
    <GptSearchBar/>
    <GptMoviesSuggation/>
    </div>
  )
}

export default GptPage