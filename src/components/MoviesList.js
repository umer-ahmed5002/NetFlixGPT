
import MoviesCard from './MoviesCard'

const MoviesList = ({ title, movie }) => {
  // const [data, setData] = useState([])
  // setData(movie)
  // console.log(movie)


  return (
    <>
      <h1 className='title'>{title}</h1>

      <div className=' '>
        <div className=' flex gap-2 overflow-x-auto srollBar'>
          {movie && movie.map((movies) => <MoviesCard key={movies.id} postPath={movies.poster_path} />)}
        </div>
      </div>
    </>
  )
}

export default MoviesList