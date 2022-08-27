import React from 'react'

const Ejemplo4 = (props) => {
  return (
    <div>
        <h2>NOMBRE: {props.nombre}</h2>
        {props.children}
    </div>
  )
}
