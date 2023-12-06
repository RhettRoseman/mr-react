import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Home from './pages/Home'
import SingleThought from './pages/SingleThought'
import Error from './pages/Error'
import About from './pages/About.jsx'
import Team from './pages/Team.jsx'
import { element } from 'prop-types'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
     {
      path: '/About',
      element: <About/>,
     },
     {
      path: '/blog',
      element: <Team/>,
     },
     {
      path: '/Contact',
      element: <Contact/>,

     },
      {
        path: '/thoughts/:thoughtId',
        element: <SingleThought />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
