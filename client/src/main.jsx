import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Home from './pages/Home'
// import SingleThought from './pages/SingleThought'
import Error from './pages/Error'
import About from './pages/About.jsx'
import Team from './pages/Team.jsx'
import Contact from './pages/Contact.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Services from './pages/Services.jsx'

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
      path: '/about',
      element: <About/>,
     },
     {
      path: '/team',
      element: <Team/>,
     },
   
        {
          path: '/Contact',
          element: <Contact />,
        },
        {
          path: '/Portfolio',
          element: <Portfolio />,
        },
        {
          path: '/Services',
          element: <Services />,
        }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
