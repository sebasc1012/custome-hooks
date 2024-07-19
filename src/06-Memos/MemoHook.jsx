import { useMemo, useState } from "react"
import { useCounter } from "../hooks/useCounter"

const heavyMemorize = (iterationNumber) =>{
for (let i = 0 ; i < iterationNumber; i++){
    console.log('actualizando');}

return`${iterationNumber} numero realizado`;
}



export const MemoHook = ()=> {
    const {counter,addCounter } = useCounter (4000)

    const [change, setChange] = useState ()

    const MessageMemorize = useMemo(()=>{
        heavyMemorize(counter)
        }, [counter])
 
    return(
        <>
        <h1> Counter = <small>{ counter }</small></h1>
        <h4>{heavyMemorize(MessageMemorize)}</h4>
        <button className="btn btn-primary" onClick={ () => addCounter() }> +1 </button>
        <button className="btn btn-primary "onClick={()=> setChange(!change)} > change / Hide {JSON.stringify(change)}</button>
        </>
    )
}