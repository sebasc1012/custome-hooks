import { useEffect, useState } from "react"
import { Message } from './Message'


export const SimpleForm = () => {

    const[formState, setFormState] = useState ({
        email: 'sebas@google.com',
        username:'sebastian',
         })

        const { email , username} = formState

         const onInputChange = ({target}) => {
            const { name, value } = target;
            setFormState({...formState, [ name ] : value,})
         }



        //  useEffect (()=> {
        //   console.log('cuando es cambia username ');// en este caso cuando le damos el parametro username solo cambia cuando editamos el username
        //  }, [username])

        //  useEffect (()=> {
        //   console.log('cuando se carga email '); // en este caso cuando le damos el parametro email, solo so saca cuando cambiamos nuestro email 
        //  }, [email])

  return (
    <>
    <h1>Formulario simple </h1>
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

        {   
         (username === 'sebastian2') && <Message/>
        }
    </>
  )
}

