import React from 'react'
import { connect } from 'react-redux'
import { login } from '../store'

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleLogin(event) {
        event.preventDefault()
        const { email, password } = this.state
        const { login } = this.props
        login(email, password)
    }

    render() {
        const { email, password } = this.state
        return (
            <div className="login">
                <div className="login-input-container">
                    <div><input className="login-input" name="email" type="email" placeholder="Email" value={email} onChange={this.handleChange} required></input></div>
                    <div><input className="login-input" name="password" type="password" placeholder="Password" value={password} onChange={this.handleChange} required></input></div>
                    <div onClick={this.handleLogin}>Login</div>
                </div>
            </div>
        )
    }
}

const mapDispatch = (dispatch) => ({
    login: (email, password) => dispatch(login(email, password)) 
})

export default connect(null, mapDispatch)(Login)