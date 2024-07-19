import React from 'react'

export const CardComponent = ({name, id , status, species, image}) => {
  return (
    <>
    <section>
     <h2>{name} {id}</h2>
     <h5>{status}</h5>
     <h5>{species}</h5>
     <img alt="imagen" src= {image}></img>
    

    </section>
      
    </>
  )
}

