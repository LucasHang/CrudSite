import React from 'react'

import LoginForm from './Form'
import Logo from '../TelaPrincipal/template/Logo'
import Footer from '../TelaPrincipal/template/Footer'


export default props =>
    <div className="tela-inicial">
        <LoginForm />
        <Logo />
        <Footer />
    </div>