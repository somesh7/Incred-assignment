import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
    return ( <>
    <div className="error_div">
        <h1> Opps Error, This page does not exist. </h1>
        <NavLink to="/" className="btn_error" role="button"> Go to Home Page </NavLink>
        </div>
        </>
    )
}
export default Error;