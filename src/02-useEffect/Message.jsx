import React, { useEffect, useState } from 'react'


export const Message = () => {

const [coordenadas, setCoordenadas]= useState({x:0 , y:0})

useEffect(()=>{

    const mouseMove = ({x,y}) => {
       setCoordenadas({x,y})
    }
 window.addEventListener('mousemove',mouseMove )
    return () => {
     window.removeEventListener('mousemove', mouseMove)
    }
},[])

  return (
    <>
        <h5>Usiario ya existente!!</h5>
        <h6>{JSON.stringify(coordenadas)}</h6>
    </>
  )
}

