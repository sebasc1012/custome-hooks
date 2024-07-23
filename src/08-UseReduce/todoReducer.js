

export const todoReducer = (inicialState, action) =>{

    switch (action.type) {
        case '[TODO] AddTodo':
         return [...inicialState, action.payload]

        case '[TODO] Remove':
            return inicialState.filter(todo => todo.id !== action.payload);

        case '[TODO] toogle Todo':
            return inicialState.map((todo)=> {
                if(todo.id === action.payload){
                    return{ ...todo,
                         done:!todo.done}

                }
                return todo;
            })
        
    
        default:
            return inicialState
    }

}