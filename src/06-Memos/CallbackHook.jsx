import React, { useCallback, useState } from 'react'
import { useCounter } from '../hooks/useCounter'
import { ShowIncrement } from './ShowIncrement'

export const CallbackHook = () => {

const [ counter, setCounter ]= useState(10)

const incrementFather = useCallback(()=>{ // se tulitiza para almacenar funciones y memorizarlas para ver si han cambiado o no  
        setCounter(counter + 1)
},[])



  return (
    <>
    <h1>Counter = {counter}</h1>
    <ShowIncrement increment={incrementFather}/>
    </>
  )
}


