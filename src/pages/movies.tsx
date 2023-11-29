import { useEffect, useState } from "react"
import { getAllMoviePopular } from "../api/movie"
import { IMovie } from "../types/main"

function MoviesPage() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getAllMoviePopular().then((res) => {
      setMovies(res.data.results)
      setLoading(false)
    })
  }, [])

  return (
    <div className='p-8'>
      {!loading && movies.map((movie: IMovie) => (
        <div key={movie.id}>
          {movie.title}
        </div>
      ))}
    </div>
  )
}

export default MoviesPage