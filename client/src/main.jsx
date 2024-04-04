import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { About, Dashboard, Home, Projects, Signin, Signup } from './pages'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<div>Home</div>}></Route>
      <Route path='about' element={<About />}></Route>
      <Route path='sign-in' element={<Signin />}></Route>
      <Route path='sign-up' element={<Signup />}></Route>
      <Route path='dashboard' element={<Dashboard />}></Route>
      <Route path='projects' element={<Projects />}></Route >
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
