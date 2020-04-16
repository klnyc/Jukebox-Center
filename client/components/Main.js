import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Header from './Header'
import Navigation from './Navigation'
import Footer from './Footer'
import Albums from './Albums'
import Album from './Album'

const Main = () => {
    return (
        <BrowserRouter>
            <Header />
            <Navigation />

            <Route exact path="/" component={Albums} />
            <Route exact path="/albums" component={Albums} />
            <Route exact path="/albums/:genre" component={Albums} />
            <Route exact path="/albums/:genre/:id" component={Album} />
      
            <Footer />
        </BrowserRouter>
    )
}

export default Main