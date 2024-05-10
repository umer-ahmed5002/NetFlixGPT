import { useSelector } from "react-redux"
import useMovieTrailer from "../utils/Hook/useMovieTrailer"

const MovieBackground = ({ videoId }) => {

  const trailerVideo = useSelector((store) => store.movies?.trailerVideo)
  useMovieTrailer(videoId)

  return (
    <div>
      <iframe className=" w-full relative aspect-video"  src={"https://www.youtube.com/embed/" + trailerVideo?.key + '?&autoplay=1&mute=1&controls=0'} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

export default MovieBackground