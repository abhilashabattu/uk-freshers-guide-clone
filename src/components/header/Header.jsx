import { NavLink } from "react-router-dom";
import './HeaderStyle.css';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <NavLink className="navbar-brand fw-bold" to="/">
          UK <br />FRESHERS <br />GUIDE
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item pe-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  "nav-link fs-6 " + (isActive ? "active-link" : "")
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item pe-2">
              <NavLink
                to="/events"
                className={({ isActive }) =>
                  "nav-link fs-6 " + (isActive ? "active-link" : "")
                }
              >
                Events
              </NavLink>
            </li>
            <li className="nav-item pe-2">
              <NavLink
                to="/groups"
                className={({ isActive }) =>
                  "nav-link fs-6 " + (isActive ? "active-link" : "")
                }
              >
                Groups
              </NavLink>
            </li>
            <li className="nav-item pe-2">
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  "nav-link fs-6 " + (isActive ? "active-link" : "")
                }
              >
                Blogs
              </NavLink>
            </li>
            <li className="nav-item pe-2">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  "nav-link fs-6 " + (isActive ? "active-link" : "")
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
