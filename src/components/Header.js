import React from "react"
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <div className="Header">
            <p><Link className="link" to="/">Home</Link></p>
            <h1>Winc Academy Student Dashboard</h1>
        </div>
    )
}

export default Header