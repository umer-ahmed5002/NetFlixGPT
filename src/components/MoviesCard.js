import { IMG_CDN_URL } from "../utils/constant"

const MoviesCard = ({ postPath }) => {
  if (!postPath) return null;
  return (  
    <div className=" ">
      <img className=" p-1 min-w-[150px] movieImage" alt="Movie img" src={IMG_CDN_URL + postPath} />
    </div>
  )
}

export default MoviesCard