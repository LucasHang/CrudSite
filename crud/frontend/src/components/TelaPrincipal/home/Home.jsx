import React from 'react'
import Main from '../template/Main'

export default props => {
    return (
        <Main icon="home" title="Início" subtitle="Segundo projeto do capítulo de React">
            <div className="display-4">Bem vindo {props.user.name}!</div>
            <hr />
            <p className="mb-0">Isso aqui vai se tornar um site para divulgar ou alugar áreas recreativas, como campos de futebol, quadras de volei, salões de festas etc...</p>
            <hr />
        </Main>
    )
}
