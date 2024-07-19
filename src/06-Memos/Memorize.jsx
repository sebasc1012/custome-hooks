import { useState } from "react"
import { useCounter } from "../hooks/useCounter"
import { SmallMemo } from "./smallMemo"


export const Memorize = ()=> {
    const {counter,addCounter } = useCounter (10)

    const [change, setChange] = useState ()

 
    return(
        <>
        <h1> Counter = <SmallMemo value={ counter }/> </h1>
        
        <button className="btn btn-primary" onClick={ () => addCounter() }> +1 </button>
        <button className="btn btn-primary "onClick={()=> setChange(!change)} > change / Hide {JSON.stringify(change)}</button>
        </>
    )
}