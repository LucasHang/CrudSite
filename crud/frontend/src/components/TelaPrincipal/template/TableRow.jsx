import React from 'react'

export default props => {
    return (
        <tr key={props.id}>
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td >
                <button className="btn btn-warning mt-2 ml-2"
                    onClick={() => props.load(props.user)}>
                    <i className="fa fa-pencil "></i>
                </button>
                <button className="btn btn-danger mt-2 ml-2"
                    onClick={() => props.remove(props.user)}>
                    <i className="fa fa-trash"></i>
                </button>
            </td>
        </tr>
    )
}