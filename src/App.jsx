import { useState } from 'react';

import './App.css'

function App() {
  let [ counter, setCounter ] = useState(0)

  const user = "John Doe";

  function incrementar() {
    setCounter(counter + 1)
  }

  function decrementar() {
    setCounter(counter - 1)
  }

  return (
    <>
        <h1 className="text-xl">Introduccion React</h1>

        <h3>Bienvenido {user}</h3>

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, eos optio laborum voluptatem harum nisi saepe dolorem ratione velit sunt. Incidunt, libero suscipit? Doloribus facere recusandae beatae accusantium dolore porro.</p>

        <hr />

        <h2>Contador: { counter } </h2>

        <button onClick={ () => decrementar() }>-</button>


        <button onClick={  () => incrementar()  }  >+</button>

    </>
  )
}

export default App
