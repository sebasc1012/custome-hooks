import { useCounter } from './hooks/useCounter'


export const CounterCustomeHook = () => {

    const { counter, addCounter, resetCounter, lessCounter} = useCounter();

  return (
<>
<h1>Counter Coustome Hook {counter}</h1>

<button onClick={()=> addCounter(2)}>+1</button>
<button onClick={resetCounter} >Reset </button>
<button onClick={()=>lessCounter(2)}> -1</button>
</>
  )
}


