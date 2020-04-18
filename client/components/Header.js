import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <Link to="/" className="header-link">Jukebox Center</Link>
            <div className="header-login">
                <Link to="/login" className="header-link">Login</Link>
                <Link to="/signup" className="header-link">Sign Up</Link>
                <div className="header-link">Cart</div>
            </div>
        </div>
    )
}

export default Header