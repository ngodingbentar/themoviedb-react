import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../pages/home'
import ErrorPage from '../pages/404'
import ProfilePage from '../pages/profile'
import MoviesPage from '../pages/movies'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/profile',
    element: <ProfilePage />
  },
  {
    path: '/movies',
    element: <MoviesPage />
  }
])

export default router