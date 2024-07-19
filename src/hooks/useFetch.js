import React, { useEffect, useState } from 'react'

const localCatch = {

}

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

    if (localCatch[url]){
        setState({
            data: localCatch[url],
            isLoading:false,
            hasError:false,
            error:null,
        })

        return;
    }

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

    localCatch [url] = data
}

return{
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
}


}

