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
import ReduxHome from './pages/ReduxPages/ReduxHome';
import { Provider } from 'react-redux';
import { store } from './redux/store';


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
      },
      {
        path: "/reduxHome",
        element: <ReduxHome />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReactAuthProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ReactAuthProvider>
  </React.StrictMode>,
)
