import About from './About'
import Root from './Root'
import ErrorPage from './ExtendedErrorPage'
import { type RouteObject } from 'react-router-dom'
import Main from './Main'
import Chart from './Chart'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Main />,
      },
      {
        path: 'chart',
        element: <Chart />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]

export default routes
