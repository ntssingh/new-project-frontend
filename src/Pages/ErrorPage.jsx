import React from 'react'
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >

        <h1>404-Page not found</h1>
        <br /><br />

        <div style={{
        width: "150px",
        backgroundColor: "#512da8",
        height: "50px",
        marginTop:"12px",
        marginBottom: "12px",
        marginLeft:"12px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "12px",
        cursor: "pointer",
      }}>
            <Link to="/">
              <h1 style={{
                color: "#fff",
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                fontSize:"15px",
              }}>
                Go to Homepage
                </h1>
            </Link>
          </div>

    </div>
    </div>

  )
}

export default ErrorPage
