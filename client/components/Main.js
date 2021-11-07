import React, { Fragment } from "react"
import { connect } from "react-redux"
import { Route, BrowserRouter } from "react-router-dom"
import { Header, Navigation, Footer, Albums, Album, Authenticate, Profile, Cart, Confirmation } from "./Index"
import { loadUser } from "../store"

class Main extends React.Component {
    componentDidMount() {
        this.props.loadUser()
    }

    render() {
        const { user } = this.props
        return (
            <BrowserRouter>
                <Header />
                <Navigation />
    
                <Route exact path="/" component={Albums} />
                <Route exact path="/albums" component={Albums} />
                <Route exact path="/albums/:genre" component={Albums} />
                <Route exact path="/albums/:genre/:id" component={Album} />
                <Route exact path="/login" component={Authenticate} />
                <Route exact path="/signup" component={Authenticate} />
                <Route exact path="/cart" component={Cart} />
                {user.id && 
                <Fragment>
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/profile/edit" component={Profile} />
                </Fragment>}
                <Route exact path="/confirmation" component={Confirmation} />
        
                <Footer />
            </BrowserRouter>
        )
    }
}

const mapState = (state) => ({
    user: state.user
})

const mapDispatch = (dispatch) => ({
    loadUser: () => dispatch(loadUser())
})

export default connect(mapState, mapDispatch)(Main)