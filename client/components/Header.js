import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../store'

class Header extends React.Component {
    constructor() {
        super()
        this.renderLoginLinks = this.renderLoginLinks.bind(this)
    }

    renderLoginLinks() {
        const { user, logout } = this.props
        return user.id ? 
        <Fragment>
            <Link to="/profile" className="header-link">{user.email}</Link>
            <Link to="/" className="header-link" onClick={() => logout()}>Log Out</Link>
        </Fragment> :
        <Fragment>
            <Link to="/login" className="header-link">Login</Link>
            <Link to="/signup" className="header-link">Sign Up</Link>
        </Fragment>
    }

    render() {
        return (
            <div className="header">
                <Link to="/" className="header-link">Jukebox Center</Link>
                <div className="header-login">
                    {this.renderLoginLinks()}
                    <div className="header-link">Cart</div>
                </div>
            </div>
        )
    }
}

const mapState = (state) => ({
    user: state.user
})

const mapDispatch = (dispatch) => ({
    logout: () => dispatch(logout())
})

export default connect(mapState, mapDispatch)(Header)