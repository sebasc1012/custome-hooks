import React from 'react'
import ReactDOM from 'react-dom/client'
import { HooksApp } from './HooksApp'
import { CountesApp } from './01-useState/CountesApp'
import { CounterCustomeHook } from './counterCustomeHook'
import { SimpleForm } from './02-useEffect/simpleForm'
import { CoustonForm } from './02-useEffect/CustonForm'
import { MultipleCustonHooks } from './03-examples/MultipleCustonHooks'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MultipleCustonHooks/>
  </React.StrictMode>
)
