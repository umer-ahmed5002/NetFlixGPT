import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTION, SUPPORTED_LANGUAGES } from '../utils/constant';
import { addNowPlayingMovies } from '../utils/movieSlice';
import MainContainer from './MainContainer';
import SecondryContainer from './SecondryContainer';
import usePopularMovies from '../utils/Hook/usePopularMovies';
import useTopRatedMovies from '../utils/Hook/useTopRatedMovies';
import useUpcommingMovies from '../utils/Hook/useUpcommingMovies';
import { toggleGptSearchView } from '../utils/gptSlice';
import GptPage from './GptPage';
import { changeLanguage } from '../utils/configSlice';

const Brows = () => {

  const navigate = useNavigate()
  const userName = useSelector((store) => store.user)
  const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies)
  const dispatch = useDispatch()


  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies()
  }, [])

  usePopularMovies();
  useTopRatedMovies();
  useUpcommingMovies();

  const getNowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTION)
    const json = await data.json()
    // console.log(json.results)
    dispatch(addNowPlayingMovies(json.results))
  }

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      // An error happened.
    });
  }

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView())
  }
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

  const handleLanguageCahnge = (e) => {
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <>
      <div className=' w-full absolute z-10 p-2 bg-gradient-to-t from-black'>
        <div className='flex justify-between items-center'>
          <div>
            <img className=' w-[200px]' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo' />
          </div>
          <div className=' flex gap-5'>
            {
              showGptSearch && (
                <select className=' bg-red-700 rounded-lg text-white' onChange={handleLanguageCahnge}>
                  {
                    SUPPORTED_LANGUAGES.map((lang) => <option value={lang.identifier}>{lang.name}</option>)
                  }
                </select>
              )
            }
            <button className=' bg-purple-700 p-2 text-white rounded-sm' onClick={handleGptSearch}>{showGptSearch ? "Homepage" : "Gpt Search"}</button>
            <div className=' flex gap-3 items-center'>
              <p className='text-red-600 font-bold text-xl'>{userName?.displayName}</p>
              <button className=' text-white font-bold' onClick={handleSignOut}>(Sign Out)</button>
            </div>
          </div>
        </div>
      </div>
      {

        showGptSearch ? <GptPage /> : <> <MainContainer />
          <SecondryContainer /> </>
      }

    </>
  )
}

export default Brows