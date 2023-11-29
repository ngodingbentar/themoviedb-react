import { createBrowserRouter } from 'react-router-dom'
import MovieDetailPage from '../pages/movieDetail'
import ErrorPage from '../pages/404'
import ProfilePage from '../pages/profile'
import MoviesPage from '../pages/movies'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MoviesPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/profile',
    element: <ProfilePage />
  },
  {
    path: '/movie',
    element: <MoviesPage />
  },
  {
    path: '/movie/:id',
    element: <MovieDetailPage />
  }
])

export default router