// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/login/Login'
import Dashboard from './pages/dashboard/Dashboard'
import ProtectedRoute from './component/ProtectedRoute'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
      </Routes>
    </>
  )
}

export default App
