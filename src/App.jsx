import { lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/login/Login'
import Dashboard from './pages/dashboard/Dashboard'
import ProtectedRoute from './component/ProtectedRoute'
import PublicRoute from './component/PublicRoute'
import Notfound from './pages/notfound/Notfound'

// to apply lazy loading
const Contactus = lazy(() => import('./pages/contactus/Contactus'))

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Navigate to="/login" replace />} />
        {/* <Route path="/" element={<Navigate to="/login" replace />} /> */}
        <Route path={'/login'} element={
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
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  )
}

export default App
