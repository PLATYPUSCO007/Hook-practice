import React, { useState } from 'react'

export const FirstComponent = () => {
    const [counter, setCounter] = useState(0)
  return (
    <div>
        <h4>Primer Hook</h4>
        <pre>Contador {counter}</pre>
        <button className='btn btn-danger' onClick={()=>{setCounter(counter + 1)}}>Aumentar Contador</button>
    </div>
  )
}
