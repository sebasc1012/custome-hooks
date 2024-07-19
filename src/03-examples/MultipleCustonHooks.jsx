import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { useCounter } from '../hooks/useCounter'
import { LoadingComponent } from './loadingComponent'
import { CardComponent } from './cardcomponent'

export const MultipleCustonHooks = () => {
    const {counter,addCounter, lessCounter} = useCounter(1)

   const {data , isLoading, hasError} = useFetch( `https://rickandmortyapi.com/api/character/${counter}` )

  return (
    <div>

        {isLoading 
        ? <LoadingComponent/>
        :  <CardComponent 
                id={counter}
                name={data.name}
                species={data.species}
                status={data.status}
                image={data.image}/>  }

  

    <button className='btn btn-primary' onClick={()=> counter > 1 ? lessCounter():null}>Anterior</button>
    <button className='btn btn-primary' onClick={()=> addCounter()}>Siguiente</button>
    </div>
  )
}


