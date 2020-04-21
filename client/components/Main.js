import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { Route, BrowserRouter } from 'react-router-dom'
import Header from './Header'
import Navigation from './Navigation'
import Footer from './Footer'
import Albums from './Albums'
import Album from './Album'
import Authenticate from './Authenticate'
import Profile from './Profile'
import { loadUser } from '../store'

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
                {user.id && 
                <Fragment>
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/profile/edit" component={Profile} />
                </Fragment>}
        
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