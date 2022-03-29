import React from "react";
import { Link } from "react-router-dom";


function Navigation () {
    return (
    <div>
        <span className="nav">
            <Link to="/">Home</Link>
            <Link to="/search">Search</Link>
        </span>
    </div>
    )
}

export default Navigation;