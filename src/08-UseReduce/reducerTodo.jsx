

const parametros = [{
    id:1,
    name:'juan',
    estado:'vivo'
}]

const todoState = ( state= parametros , action = {}) => { /// El reduce siempre recive el estado y action como parametros y siempre se retorna el estado
 if (action.type === '[Information]' ){
    return [...state, action.payload ]
 }

    return state;}

let prueba = todoState()


const newParametros = [{
    id:2,
    name:'sebastian',
    estado:'vivo'
}]

const addParametros ={
    type: '[Information]',
    payload:newParametros,
}


prueba = todoState(prueba, addParametros)
console.log(prueba);

export default todoState;