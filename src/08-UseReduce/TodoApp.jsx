import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'
import { useTodo } from '../hooks/useTodo'



export const TodoApp = () => {

   const {   todos,handleNewTodo,  handleDeleteTodo, handleToogleTodo} = useTodo ()

  return (
    <>

    <h1>Todo App (10) <small>pendientes : 2</small></h1>
    <hr/>

    <div className="row">
        <div className="col-7">

            <TodoList
             todos={ todos } 
             onDeleteTodo={handleDeleteTodo}
             onToggleTodo={handleToogleTodo}/>

        </div>
        <div className="col-5">
            <h4> Agregar TODO</h4>
            <hr/>
                 <TodoAdd onNewTodo={handleNewTodo}/>
        </div>
    </div>
    </>
  )
}

