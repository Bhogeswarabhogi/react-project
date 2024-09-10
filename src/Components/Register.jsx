import React from "react";

function Register() {
  return (
    <div
      className="container"
      style={{
        boxShadow: "2px 2px 5px black",
        padding: "20px",
        borderRadius: "10px",
        margin: "20px",
        backgroundColor: "lightblue",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginTop: "20px",
          fontWeight: "bold",
          fontFamily: "serif",
        }}
      >
        Register
      </h1>
      <form
        style={{
          boxShadow: "2px 2px 5px black",
          padding: "20px",
          borderRadius: "10px",
          margin: "20px",
        }}
      >
        <div
          className="form-group"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <label
            htmlFor="username"
            style={{
              fontWeight: "bold",
              fontFamily: "serif",
              fontSize: "20px",
            }}
          >
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter username"
            style={{
              boxShadow: "2px 2px 5px black",
              borderRadius: "10px",
              margin: "10px",
            }}
          />
        </div>
        <div
          className="form-group"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <label
            htmlFor="password"
            style={{
              fontWeight: "bold",
              fontFamily: "serif",
              fontSize: "20px",
            }}
          >
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter password"
            style={{
              boxShadow: "2px 2px 5px black",
              borderRadius: "10px",
              margin: "10px",
            }}
          />
        </div>
        <div
          className="form-group"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <label
            htmlFor="email"
            style={{
              fontWeight: "bold",
              fontFamily: "serif",
              fontSize: "20px",
            }}
          >
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            style={{
              boxShadow: "2px 2px 5px black",
              borderRadius: "10px",
              margin: "10px",
            }}
          />
        </div>
        <div
          className="form-group"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <label
            htmlFor="phone"
            style={{
              fontWeight: "bold",
              fontFamily: "serif",
              fontSize: "20px",
            }}
          >
            Phone
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            placeholder="Enter phone"
            style={{
              boxShadow: "2px 2px 5px black",
              borderRadius: "10px",
              margin: "10px",
            }}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          style={{
            boxShadow: "2px 2px 5px black",
            borderRadius: "10px",
            margin: "10px",
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
