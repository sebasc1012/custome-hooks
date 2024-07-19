import React from 'react'
import ReactDOM from 'react-dom/client'
import { HooksApp } from './HooksApp'
import { CountesApp } from './01-useState/CountesApp'
import { CounterCustomeHook } from './counterCustomeHook'
import { SimpleForm } from './02-useEffect/simpleForm'
import { CoustonForm } from './02-useEffect/CustonForm'
import { MultipleCustonHooks } from './03-examples/MultipleCustonHooks'
import { FocusScreen } from './04-useRef/FocusScrren'
import { Memorize } from './06-Memos/Memorize'
import { MemoHook } from './06-Memos/MemoHook'
import { CallbackHook } from './06-Memos/CallbackHook'
import { Padre } from './07-tarea-memo/Padre'
import todoState from './08-UseReduce/reducerTodo'



ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Padre/>
  // </React.StrictMode>
)
