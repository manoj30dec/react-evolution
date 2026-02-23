import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../context/useAuth";

const Primeheader = () => {
  const { logout } = useAuth();
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to={"/dashboard"}
                  className={({ isActive }) =>
                    isActive ? "navbar-brand nav-link" : "nav-link"
                  }
                >
                  Dashboard
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={"/contact-us"}
                  className={({ isActive }) =>
                    isActive ? "navbar-brand nav-link" : "nav-link"
                  }
                >
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={"/useoptimistic-example"}
                  className={({ isActive }) =>
                    isActive ? "navbar-brand nav-link" : "nav-link"
                  }
                >
                  useOptimistic Example
                </NavLink>
              </li>
            </ul>
            <div className="d-flex" role="search">
              {/* <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
              <button
                className="btn btn-primary"
                type="button"
                onClick={logout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Primeheader;
