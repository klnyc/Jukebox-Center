import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Header from './Header'
import Navigation from './Navigation'
import Footer from './Footer'
import Albums from './Albums'
import Album from './Album'
import Login from './Login'
import Signup from './Signup'

const Main = () => {
    return (
        <BrowserRouter>
            <Header />
            <Navigation />

            <Route exact path="/" component={Albums} />
            <Route exact path="/albums" component={Albums} />
            <Route exact path="/albums/:genre" component={Albums} />
            <Route exact path="/albums/:genre/:id" component={Album} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
      
            <Footer />
        </BrowserRouter>
    )
}

export default Main