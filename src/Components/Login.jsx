import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5">
              <div
                className="card-body p-4 p-sm-5"
                style={{
                  boxShadow: "2px 2px 5px black",
                  backgroundColor: "lightskyblue",
                }}
              >
                <h5
                  className="card-title text-center "
                  style={{
                    fontWeight: "bold",
                    fontFamily: "serif",
                    color: "black",
                    fontSize: "40px",
                  }}
                >
                  Sign In
                </h5>
                <form>
                  <div className="form-floating mb-2">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="HlLp9@example.com"
                    />
                    <label htmlFor="floatingInput" className="form-label">
                      Email address
                    </label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                    />
                    <label htmlFor="floatingPassword" className="form-label">
                      Password
                    </label>
                  </div>
                  <div className="d-grid">
                    <button
                      className="btn btn-primary btn-login text-uppercase fw-bold"
                      type="submit"
                      style={{ margin: "10px"}}
                    >
                      Sign in
                    </button>
                    <button className="btn btn-danger btn-login text-uppercase fw-bold">
                      <Link to='/register' style={{ color: "white" }}>
                      Register
                      </Link>
                    </button>

                  </div>
                  <hr className="my-4" />
                  <div
                    className="d-grid mb-2"
                    style={{
                      border: "1px solid black",
                      borderRadius: "10px",
                      backgroundColor: "white",
                      margin: "10px",
                      marginTop: "0px",
                    }}
                  >
                    <Link
                      className="btn btn-google btn-login text-uppercase fw-bold"
                      to="/"
                    >
                      <i className="fab fa-google me-2"></i>
                      Sign in with Google
                    </Link>
                  </div>
                  <div
                    className="d-grid"
                    style={{
                      border: "1px solid black",
                      borderRadius: "10px",
                      backgroundColor: "white",
                      margin: "10px",
                    }}
                  >
                    <Link
                      className="btn btn-facebook btn-login text-uppercase fw-bold"
                      to="/"
                    >
                      <i className="fab fa-facebook-f me-2"></i>
                      Sign in with Facebook
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
