import React from 'react'
import { connect } from 'react-redux'
import { signup } from '../store'

class Signup extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            name: '',
            address: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleLogin(event) {
        event.preventDefault()
        const { email, password, name, address } = this.state
        const { signup } = this.props
        signup(email, password, name, address)
    }

    render() {
        const { email, password, name, address } = this.state
        return (
            <div className="login">
                <div className="login-input-container">
                    <div><input className="login-input" name="email" type="email" placeholder="Email" value={email} onChange={this.handleChange} required></input></div>
                    <div><input className="login-input" name="password" type="password" placeholder="Password" value={password} onChange={this.handleChange} required></input></div>
                    <div><input className="login-input" name="name" type="name" placeholder="Name" value={name} onChange={this.handleChange} required></input></div>
                    <div><input className="login-input" name="address" type="address" placeholder="Address" value={address} onChange={this.handleChange}></input></div>
                    <div onClick={this.handleLogin}>Sign Up</div>
                </div>
            </div>
        )
    }
}

const mapDispatch = (dispatch) => ({
    signup: (email, password, name, address) => dispatch(signup(email, password, name, address))
})

export default connect(null, mapDispatch)(Signup)