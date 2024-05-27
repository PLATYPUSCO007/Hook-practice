import React, { useState } from 'react'

export const SecondComponent = () => {
    const [name, setName] = useState('Eli');
    const [isChange, setIsChange] = useState(false);

    const changeName = (e)=>{
        setIsChange(!isChange);
        isChange ? setName('Pedro Pablo') : setName('Maria pepita');
    }

  return (
    <div className='mt-5'>
        <h4>Segundo Hook</h4>
        <pre>{name}</pre>
        <button className='btn btn-secondary' onDoubleClick={changeName}>Cambiar Nombre</button>
    </div>
  )
}
