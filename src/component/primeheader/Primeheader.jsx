import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from "../../context/useAuth"

const Primeheader = () => {
    const { logout } = useAuth();
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link to={'/dashboard'} className="navbar-brand" >Dashboard</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-disabled="true">Reducer Demo</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/contact-us'} className="nav-link" >Contact Us</Link>
                            </li>

                        </ul>
                        <div className="d-flex" role="search">
                            {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
                            <button className="btn btn-primary" type="button" onClick={logout}>Logout</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Primeheader