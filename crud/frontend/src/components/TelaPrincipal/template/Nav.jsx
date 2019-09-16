import './Nav.css'
import React from 'react'

import Navitem from './Nav-item'

export default props =>
    <aside className="menu-area">
        <Navitem link="/home" icon="home" text="Início"/>
        <Navitem link="/users" icon="users" text="Usuários"/>
    </aside>