import { useRef } from "react"

//use ref le da una referencia directa a un objeto que querramos obtener directamente 

export const FocusScreen = () => {
    
    const inputRef = useRef ();

    const focusInput = () =>{
       inputRef.current.select() // current hace referencia al valor que tiene seleccionado actualmente 
    }

    return(
        <>
        <h1>UseRef</h1>

        <input 
        ref={inputRef}
        type="text"
        placeholder="Nombre"
        className="form-control"
        />

        <button onClick={ focusInput } className="btn btn-primary mt-2">Aceptar</button>
        
        </>
    )
}