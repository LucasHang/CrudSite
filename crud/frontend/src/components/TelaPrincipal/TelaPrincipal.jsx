import React from 'react'
import { BrowserRouter } from 'react-router-dom'


import Nav from './template/Nav'
import Logo from './template/Logo'
import Footer from './template/Footer'
import MenuRoutes from '../../main/MenuRoutes'

export default props => {
    
    return (
        <BrowserRouter >
            <div className="app">
                <Logo />
                <Nav />
                <MenuRoutes {...props} />
                <Footer />
            </div>
        </BrowserRouter>
    )
}
