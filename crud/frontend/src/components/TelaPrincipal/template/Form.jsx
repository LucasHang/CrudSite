import React from 'react'
import FormRow from './FormRow'
import FormData from './FormData'

export default props =>
    <div className="form">

        <FormRow>
            <FormData typeData='field' title="Nome" value={props.user.name} name="name" placeHolder="Digite o Nome..." updateField={props.updateField}/>
            <FormData typeData='field' title="Email" value={props.user.email} name="email" placeHolder="Digite o Email..."  updateField={props.updateField}/>
        </FormRow>
        <hr/>
        <FormRow>
            <FormData typeData='IteratorButtons' save={props.save} clear={props.clear}/>

        </FormRow>
    </div>