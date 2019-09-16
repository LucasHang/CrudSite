import './Form.css'

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const baseUrl = 'http://localhost:3001/users'
const initialState = {
    user: { name: '', email: '', senha: '', loggedIp: '' },
    list: []
}


export default class Form extends Component {

    constructor(props) {
        super(props)

        this.updateField = this.updateField.bind(this)
    }

    state = { ...initialState }

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }


    updateField(event) {
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    getUpdatedList(user, add = true) {
        const list = this.state.list.filter(u => u.id !== user.id)
        if (add) list.unshift(user)
        return list
    }

    logar(user){       
        const url = `${baseUrl}/${user.id}`
        axios['put'](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ user: initialState.user, list })
            })
    }


    verifyFields(user, e) {
        e.preventDefault()
        this.state.list.forEach(u => {
            if (u.email === user.email && u.senha === user.senha) {
                u.loggedIp = window.userip
                this.logar(u)
                window.location.href = e.target.href
            }
        })
    }

    render() {

        return (
            <aside className="login-form">
                <div className="form">
                    <div className="row">
                        <div className="col-12">
                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" className="form-control" name="email"
                                    value={this.state.user.email}
                                    onChange={e => this.updateField(e)}
                                    placeholder="Digite o Email..." />
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="form-group">
                                <label>Senha</label>
                                <input type="password" className="form-control" name="senha"
                                    value={this.state.user.senha}
                                    onChange={e => this.updateField(e)}
                                    placeholder="Digite a Senha..." />
                            </div>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <Link to='/home' className="btn btn-primary"
                                onClick={e => this.verifyFields(this.state.user, e)}>
                                Entrar
                            </Link>

                            <Link to='/cadastrar' className="btn btn-secondary ml-2">
                                Cadastrar-se
                        </Link>
                        </div>
                    </div>
                </div>
            </aside>
        )
    }



}

