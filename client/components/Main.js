import React from 'react'
import { Link, Route, BrowserRouter } from 'react-router-dom'
import Header from './Header'
import Navigation from './Navigation'
import Footer from './Footer'

const Main = () => {
    return (
        <BrowserRouter>
            <Header />
            <Navigation />
            <Footer />
        </BrowserRouter>
    )
}

export default Main