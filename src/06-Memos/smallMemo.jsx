import { memo } from "react"


export const SmallMemo = memo(({value})=>{
    console.log('me dubujo');
    return(
        <>
        <small >{ value }</small> 
        </>
    )
})