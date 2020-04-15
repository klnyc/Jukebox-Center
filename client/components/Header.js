import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <Link to="/" className="header-link">Jukebox Center</Link>
            <div className="login">
                <div className="header-link">Login</div>
                <div className="header-link">Cart</div>
            </div>
        </div>
    )
}

export default Header