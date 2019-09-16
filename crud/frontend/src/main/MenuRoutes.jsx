import React from 'react'
import { Switch, Route, Redirect } from 'react-router'



import Home from '../components/TelaPrincipal/home/Home'
import UserCrud from '../components/TelaPrincipal/user/UserCrud'



export default props => {
    
    return (
        <Switch>
            <Route exact path='/home' render={(otraProps) => <Home user = {props} />} />
            <Route path='/users' component={UserCrud} />
            <Redirect from="*" to='/home' />
        </Switch>
    )
}
