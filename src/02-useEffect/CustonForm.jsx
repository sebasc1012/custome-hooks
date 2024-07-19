
import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm"


export const CoustonForm = () => {

 
  const {formState, onInputChange, onResetForm} = useForm({ // todo lo que se quiera cambiar dentro de este customHook se debe colocar en la restructuracion 
    email:'',
    username:'',
    password:'',})


    const {email, username, password } = formState // una forma de extraerlo y no colocar esto es colocar : ...formState en lo que retornamos del userForm



  return (
    <>
    <h1>Formulario customeHook </h1>
    <hr/>
        <input
        type='text'
        className="form-control"
        placeholder="Username"
        name="username"
        value={ username }
        onChange={onInputChange}
        />
         <input
        type='email'
        className="form-control mt-2"
        placeholder="Email"
        name="email"
        value={ email }
        onChange={onInputChange}
        />
          <input
        type='password'
        className="form-control mt-2"
        placeholder='Contraseña'
        name='password'
        value={ password }
        onChange={onInputChange}
        />

        <button onClick={onResetForm} className="btn btn-primary mt-2">Borrar</button>

    </>
  )
}

