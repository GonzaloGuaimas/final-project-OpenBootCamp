import React, { useState } from 'react'

const loggedStlye = {
    color: 'blue'
}
const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}


const Greetingstyled = (props) => {
    const [logged, setLogged] = useState(false)
  return (
    <div style={logged ? loggedStlye : unloggedStyle}>
        {logged ?   (<p> HOLA COMO ESTAS? {props.name}</p>) : (<p>Debes loggearte</p>)}
      
        <button onClick={() => {
            console.log('BOTON PULSADO')
            setLogged(!logged)
        }}>
            {logged ? 'Logout' : 'Login'}
        </button>
    </div>
  )
}
export default Greetingstyled
