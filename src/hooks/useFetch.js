import React, { useEffect, useState } from 'react'

export const useFetch = ( url ) => {

const [ state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
})


useEffect(() =>{
    getApi();

}, [url])

const setLoadingAgain = ()=>{
    setState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
    })
}

const getApi= async () => {

    setLoadingAgain()

    const respond= await fetch ( url );

    if (!respond.ok) {
        setState({
            data: null,
            isLoading:false,
            hasError:true,
            error:{
                code: respond.status,
                massege: respond.statusText
            }
        });
        return;
    }

    const data = await respond.json();

        setState({
            data: data,
            isLoading:false,
            hasError:false,
            error:null,
        })
}

return{
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
}


}

