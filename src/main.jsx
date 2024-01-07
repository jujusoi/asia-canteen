import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import './index.css'
import Home from './pages/Home.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h3>404 not found</h3>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/About',
        element: <h3>about</h3>
      },
      {
        path: '/Menu',
        element: <h2>menu</h2>
      },
      {
        path: '/Contact',
        element: <h3>Contact</h3>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
