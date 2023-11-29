import { Link } from "react-router-dom"
import { IMovie } from "../types/main"

const MovieCard = ({movie}: {movie: IMovie}) => {
  const sliceOverview = () => {
    if(movie.title.length < 15) return 150
    if(movie.title.length >= 50) return 50
    if (movie.title.length > 30 && movie.title.length < 40 ) return 80
    if(movie.title.length > 40 && movie.title.length < 50 ) return 60
    return 100
  }
  return (
    <Link to={`/movie/${movie.id}`}>
      <div
        className="bg-white shadow-lg rounded-xl overflow-hidden max-w-xs order-first lg:order-none h-[400px]">
        <div>
          <img src={`https://image.tmdb.org/t/p/w400${movie.backdrop_path}`} alt={movie.title} />
        </div>
        <div className="py-5 px-6 sm:px-8">
          <h2 className="text-xl sm:text-2xl text-gray-800 font-semibold mb-3">{movie.title}</h2>
          {movie.overview.length > 150 ? (
            <p className="text-gray-500 leading-relaxed">{movie.overview.slice(0, sliceOverview())},...</p>
          ) : (
            <p className="text-gray-500 leading-relaxed">{movie.overview}</p>
          )}
        </div>
      </div>
    </Link>
  )
}

export default MovieCard