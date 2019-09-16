import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import './App.css'
import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'

import axios from 'axios'

import ScreenRoutes from './SceenRoutes'
import TelaPrincipal from '../components/TelaPrincipal/TelaPrincipal'

const baseUrl = 'http://localhost:3001/users'

const pcIp = window.userip
let loggedUser

const initialState = {
    list: []
}


export default class App extends Component {

    constructor(props) {
        super(props)

        this.findLoggedUser = this.findLoggedUser.bind(this)
    }

    state = { ...initialState }


    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })

    }

    findLoggedUser() {
        this.state.list.forEach(user => {
            if (user.loggedIp === pcIp) {
                loggedUser = user
            }
        })
    }



    render() {
        this.findLoggedUser()
        if (loggedUser) {
            return (
                <TelaPrincipal {...loggedUser} />
            )
        } else {
            return (
                <BrowserRouter>
                    <ScreenRoutes user={loggedUser} />
                </BrowserRouter>
            )
        }
    }

}









