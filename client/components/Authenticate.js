import React from "react"
import { connect } from "react-redux"
import Base from "./Base"
import store, { authenticate, setError } from "../store"

class Authenticate extends Base {
    constructor() {
        super()
        this.state = {
            method: "login",
            email: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        const method = this.props.match.path.slice(1)
        this.setState({ method })
        store.dispatch(setError(""))
    }

    handleSubmit(event) {
        const { authenticate, history } = this.props
        event.preventDefault()
        authenticate(this.state, history)
    }

    render() {
        const { error } = this.props
        const { method, email, password } = this.state
        return (
            <div className="login">
                <div className="login-input-container">
                    <div><input className="login-input" name="email" type="email" placeholder="Email" value={email} onChange={this.handleChange} required></input></div>
                    <div><input className="login-input" name="password" type="password" placeholder="Password" value={password} onChange={this.handleChange} required></input></div>
                </div>
                <div className="login-submit-button" onClick={this.handleSubmit}>{method === "login" ? "Login" : "Sign Up"}</div>
                {error && <div className="error">{error}</div>}
            </div>
        )
    }
}

const mapState = (state) => ({
    error: state.error
})

const mapDispatch = (dispatch) => ({
    authenticate: (state, history) => dispatch(authenticate(state, history))
})

export default connect(mapState, mapDispatch)(Authenticate)