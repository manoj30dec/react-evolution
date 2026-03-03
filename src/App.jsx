import { lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/login/Login'
import Dashboard from './pages/dashboard/Dashboard'
import ProtectedRoute from './component/ProtectedRoute'
import PublicRoute from './component/PublicRoute'
import Notfound from './pages/notfound/Notfound'
import Layout from './pages/layout/layout'

// to apply lazy loading
const Contactus = lazy(() => import('./pages/contactus/Contactus'))
const Optimistic = lazy(() => import('./pages/Optimistic/Optimistic'))
const Reducerexample = lazy(() => import('./pages/reducerexample/Reducerexample'))

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

        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contact-us" element={<Contactus />} />
            <Route path="/useoptimistic-example" element={<Optimistic />} />
            <Route path="/reducer-example" element={<Reducerexample />} />
          </Route>
        </Route>

        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  )
}

export default App
