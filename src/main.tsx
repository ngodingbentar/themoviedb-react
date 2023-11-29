import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'

import './index.css'
import store from './redux/store'
import router from './routes'
import { ProvidersReactQuery } from './providersReactQuery'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProvidersReactQuery>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ProvidersReactQuery>
  </React.StrictMode>,
)
