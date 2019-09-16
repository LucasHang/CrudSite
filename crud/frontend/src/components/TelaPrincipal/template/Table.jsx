import React from 'react'
import TableRow from './TableRow'

export default props =>
    <table className="table mt-4">
        <thead>
            <tr>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            {props.list.map(user => {
              return  <TableRow id={user.id} name={user.name} email={user.email} user={user} load={props.load} remove={props.remove}/>
            })}
        </tbody>
    </table>