import React from 'react'
import ReactDOM from 'react-dom/client'

import './assets/tailwind.css'

import  Settings  from './routes/Settings'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppFooter from './assets/Components/AppFooter'
import Dashboard from './routes/Dashboard';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/settings",
    element: <Settings />,
  }

]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className="mx-auto max-w-4xl px-8">
      
      <RouterProvider router={router} />

      <AppFooter />
    </div>
  </React.StrictMode>,
)