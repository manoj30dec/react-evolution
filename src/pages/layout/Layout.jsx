import { Outlet } from 'react-router-dom'
import Primeheader from '../../component/primeheader/Primeheader'
import Primefooter from '../../component/primefooter/Primefooter'
import "./Layout.css"
const Layout = () => {
    return (
        <>
            <div className='container-fluid layout'>
                <Primeheader />
                <div className='outlet-wrapper'>
                    <Outlet />
                </div>
                <Primefooter />
            </div>
        </>
    )
}

export default Layout