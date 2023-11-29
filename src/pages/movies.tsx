import { IMovie } from "../types/main"
import { useGetMovies } from "../hooks/useMovies"

function MoviesPage() {
  const {data, isLoading} = useGetMovies()

  return (
    <div className='p-8'>
      {isLoading && <div>Loading...</div>}
      {!isLoading && data.map((movie: IMovie) => (
        <div key={movie.id}>
          {movie.title}
        </div>
      ))}
    </div>
  )
}

export default MoviesPage