import { NavLink } from "react-router-dom";
import "../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";

export default function Header() {
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-info">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-1" to="#">
            ZUNO
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
            </ul>
            <div className="button">
              <NavLink to="/login" className="btn btn-outline-dark">
                <i className="fa fa-sign-in me-1"></i> Login
              </NavLink>
              <NavLink to="/register" className="btn btn-outline-dark ms-2">
                <i className="fa fa-user plus me-1"></i> Register
              </NavLink>
              <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1"></i> cart
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
