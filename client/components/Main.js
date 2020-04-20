import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Header from './Header'
import Navigation from './Navigation'
import Footer from './Footer'
import Albums from './Albums'
import Album from './Album'
import Authenticate from './Authenticate'

const Main = () => {
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

export default Main