import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-UseReduce/todoReducer";

export const  useTodo = ( ) => {


    const initialState = [
    ]
    
    const init = () =>{
        return JSON.parse(localStorage.getItem('todos')) || [];
    }

    const [todos, dispatch ] = useReducer(todoReducer, initialState, init);
    
    useEffect(() =>{
        localStorage.setItem('todos', JSON.stringify( todos ))
    }, [todos])
    
    
    const handleNewTodo = (todo) => {
    
    const action = {
        type:'[TODO] AddTodo',
        payload: todo
    }
    
    dispatch(action)
    
    } 
    
    const handleDeleteTodo = ( id ) => {
    dispatch({
        type:'[TODO] Remove',
        payload: id
    })
    }
    
    const handleToogleTodo = (id) => {
    dispatch({
        type:'[TODO] toogle Todo',
        payload: id
    })
    
    }
    return{

        todos,
        handleNewTodo, 
        handleDeleteTodo,
         handleToogleTodo

    }

}

