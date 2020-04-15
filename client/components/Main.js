import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Header from './Header'
import Navigation from './Navigation'
import Footer from './Footer'
import Albums from './Albums'

const Main = () => {
    return (
        <BrowserRouter>
            <Header />
            <Navigation />

            <Route exact path="/" component={Albums} />
            <Route exact path="/albums" component={Albums} />
            <Route path="/albums/:genre" component={Albums} />

            <Footer />
        </BrowserRouter>
    )
}

export default Main