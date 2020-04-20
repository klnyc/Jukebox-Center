import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Header extends React.Component {
    constructor() {
        super()
        this.renderLoginLinks = this.renderLoginLinks.bind(this)
    }

    renderLoginLinks() {
        const { user } = this.props
        return user.id ? <div>{user.name}</div> :
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

export default connect(mapState, null)(Header)