import React from 'react'
import { Link, Route, BrowserRouter } from 'react-router-dom'
import Header from './Header'
import Navigation from './Navigation'
import Footer from './Footer'
import Albums from './Albums'

const Main = () => {
    return (
        <BrowserRouter>
            <Header />
            <Navigation />
            <Albums />
            <Footer />
        </BrowserRouter>
    )
}

export default Main