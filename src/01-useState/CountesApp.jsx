import React, { useEffect, useState } from 'react'

export const CountesApp = () => {

    const [stateCounter, setCounter] = useState ({
        counter1: 10,
        counter2: 20,
        counter3: 30, 
    })

    const {counter1, counter2, counter3} = stateCounter;
    
    const handleSuma =() => {
        setCounter({
            ...stateCounter,
            counter1: counter1 + 1,
           
        });
    }

  return (
    <>
        <h1>Counter = {counter1}</h1>
        <h1>Counter = {counter2}</h1>
        <h1>Counter = {counter3}</h1>
            <hr/> 
        <button onClick={handleSuma}> + 1 </button>
    </>
  )
}


