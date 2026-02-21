// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/login/Login'
import Dashboard from './pages/dashboard/Dashboard'
import ProtectedRoute from './component/ProtectedRoute'
import PublicRoute from './component/PublicRoute'

// to apply lazy loading
const Contactus = lazy(() => import('./pages/contactus/Contactus'))

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        } />
        <Route path='/login' element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        } />
        <Route path='/dashboard' element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path='/contact-us' element={
          <ProtectedRoute>
            <Contactus />
          </ProtectedRoute>
        } />
      </Routes>
    </>
  )
}

export default App
