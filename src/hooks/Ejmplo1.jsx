import React, { useState } from 'react'

export default function Ejmplo1() {

  const initValue = 0
  const personValue = {
    name: 'gonza',
    email: 'asd@gmail'
  }

  const [contador, setContador] = useState(initValue)
  const [person, setPerson] = useState(personValue)


  function incrementarContador(){
    setContador(contador+1)
  }

  function actualizarPerson(){
    setPerson({
        name: 'otro',
        email: 'otrooo'
    })
  }

  return (
    <div>
        <h1>EJEMPLODE USE STATE</h1>
        <h3>COUNTER: {contador}</h3>
        <h3>PERSON MAIL: {person.email} AND {person.name}</h3>

        <br />

        <button onClick={incrementarContador}>INCREMENTAR</button>
        <button onClick={actualizarPerson}>PEROSNA</button>
    </div>
  )
}
