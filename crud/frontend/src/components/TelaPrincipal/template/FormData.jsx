import React from 'react'

export default props => {
    if (props.typeData === 'field') {
        return (
            <div className="col-12 col-md-6">
                <div className="form-group">
                    <label>{props.title}</label>
                    <input type="text" className="form-control" name={props.name}
                        value={props.value}
                        onChange={e => props.updateField(e)}
                        placeholder={props.placeHolder} />
                </div>
            </div>
        )
    } else if (props.typeData === 'IteratorButtons') {
        return (
            <div className="col-12 d-flex justify-content-end">
                <button className="btn btn-primary"
                    onClick={e => props.save(e)}>
                    Salvar
                </button>
                <button className="btn btn-secondary ml-2"
                    onClick={e => props.clear(e)}>
                    Cancelar
                </button>
            </div>
        )
    } else {
        return <span>Não foi possivel carregar</span>
    }

}