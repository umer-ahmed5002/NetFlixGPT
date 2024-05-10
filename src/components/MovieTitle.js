import React from 'react'

const MovieTitle = ({ title, overview }) => {
  return (
    <>
      <div className=' w-[400px] absolute z-10  left-0 bottom-0 text-white'>
        <h1 className=' text-3xl font-bold text-white'>{title}</h1>
        <p>{overview}</p>
        <div>
          <button className=' m-2 w-[80px] h-[40px] bg-white p-1 rounded-md text-black hover:bg-opacity-80'> <i class="fa-solid fa-play"></i> Play</button>
          <button className=' w-[120px] h-[40px] bg-gray-700 p-1 rounded-md text-white'>More info</button>
        </div>
      </div>
    </>
  )
}

export default MovieTitle