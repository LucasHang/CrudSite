import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

   
import TelaInicial from '../components/TelaInicial/TelaInicial'
import TelaPrincipal from '../components/TelaPrincipal/TelaPrincipal'
    

export default props =>
    <Switch>
        <Route exact path='/' component={TelaInicial} />
        <Route path='/home' component={TelaPrincipal} />
        <Redirect from="*" to='/'/>
    </Switch>