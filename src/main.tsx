import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import HomePage from './pages/home'
import ErrorPage from './pages/404'
import ProfilePage from './pages/profile'
import { Provider } from 'react-redux'
import store from './redux/store'
import MoviesPage from './pages/movies'

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

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
