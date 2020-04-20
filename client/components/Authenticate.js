import React from 'react'
import { connect } from 'react-redux'
import { authenticate } from '../store'

class Authenticate extends React.Component {
    constructor() {
        super()
        this.state = {
            method: 'login',
            email: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        const method = this.props.match.path.slice(1)
        this.setState({ method })
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit(event) {
        const { authenticate, history } = this.props
        event.preventDefault()
        authenticate(this.state, history)
    }

    render() {
        const { method, email, password } = this.state
        return (
            <div className="login">
                <div className="login-input-container">
                    <div><input className="login-input" name="email" type="email" placeholder="Email" value={email} onChange={this.handleChange} required></input></div>
                    <div><input className="login-input" name="password" type="password" placeholder="Password" value={password} onChange={this.handleChange} required></input></div>
                    <div className="login-submit-button" onClick={this.handleSubmit}>{method === 'login' ? 'Login' : 'Sign Up'}</div>
                </div>
            </div>
        )
    }
}

const mapDispatch = (dispatch) => ({
    authenticate: (state, history) => dispatch(authenticate(state, history))
})

export default connect(null, mapDispatch)(Authenticate)