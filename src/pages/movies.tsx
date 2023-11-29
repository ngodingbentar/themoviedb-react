import { IMovie } from "../types/main"
import { useGetMovies } from "../hooks/useMovies"
import MovieCard from "../components/MovieCard"
import Layout from "../components/Layout"

function MoviesPage() {
  const {data, isLoading} = useGetMovies()

  return (
    <Layout>
      <div className='p-8'>
        <div>
          <div className="min-h-screen">
            <div className="min-h-screen max-w-6xl mx-auto justify-center grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-5 ">
            {!isLoading && data.map((movie: IMovie) => (
              <div key={movie.id}>
                <MovieCard movie={movie} />
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default MoviesPage