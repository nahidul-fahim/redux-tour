import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layout/Root';
import ErrorPage from './components/ErrorPage';
import Home from './pages/Home';
import ReactWay from './pages/ReactContext/ReactWay';
import ReactAuthProvider from './pages/ReactContext/ReactAuthProvider';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/reactWay",
        element: <ReactWay />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReactAuthProvider>
      <RouterProvider router={router} />
    </ReactAuthProvider>
  </React.StrictMode>,
)
