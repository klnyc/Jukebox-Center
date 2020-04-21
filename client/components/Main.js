import React from 'react'
import { connect } from 'react-redux'
import { Route, BrowserRouter } from 'react-router-dom'
import Header from './Header'
import Navigation from './Navigation'
import Footer from './Footer'
import Albums from './Albums'
import Album from './Album'
import Authenticate from './Authenticate'
import { loadUser } from '../store'

class Main extends React.Component {
    componentDidMount() {
        this.props.loadUser()
    }

    render() {
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
          
                <Footer />
            </BrowserRouter>
        )
    }
}

const mapDispatch = (dispatch) => ({
    loadUser: () => dispatch(loadUser())
})

export default connect(null, mapDispatch)(Main)