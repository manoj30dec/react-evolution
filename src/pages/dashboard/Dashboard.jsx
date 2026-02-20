import React from 'react'
import useAuth from "../../context/useAuth"
const Dashboard = () => {
    const { logout } = useAuth();
    return (
        <>
            <h1>Dashboard</h1>
            <button className='btn btn-primary' onClick={logout}>Logout</button>
        </>

    )
}

export default Dashboard