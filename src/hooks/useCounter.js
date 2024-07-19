import { useEffect, useState } from "react"

export const useCounter = (initialValue = 1)=> {

    const [counter, useCounter] = useState(initialValue)

    const addCounter = (value = 1) =>{
        useCounter(counter + value)
    }
    const resetCounter = () =>{
        useCounter(initialValue)
    }
    const lessCounter = (value = 1) =>{
        // if( counter === 0) return;
        useCounter(counter - value)
    }
    return{
    counter,
    addCounter, 
    resetCounter,
    lessCounter,
    }
}