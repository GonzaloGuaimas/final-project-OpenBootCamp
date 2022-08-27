import React, { useEffect, useContext, useState} from 'react'


const myContext = React.createContext(null)

const Componente1 = () => {
    const state = useContext(myContext)
  return (
    <div>
        <h1>El tokjen es: {state.token}</h1>
        <Componente2></Componente2>
    </div>
  )
}
const Componente2 = () => {
    const state = useContext(myContext)
  return (
    <div>
        <h2>La Sesion es: {state.sesion}</h2>
    </div>
  )
}


export default function MyComponentWithContext() {

    const estadoInicial = {
        token: '12345',
        sesion: 1,
        //creamos el estado del componente
    }
    const [sessionData, setSessionData] = useState(estadoInicial)

    function actualizarSesion(){
        setSessionData({token:'NUEVO',sesion: sessionData.sesion + 1})
    }


  return (
    /* todo lo que esta aca dentro puede leer los datos de sesion data y ttambien se actualiza si los demás lo hacen */
    <myContext.Provider value={sessionData}>
        <Componente1></Componente1>
        <button onClick={actualizarSesion}>ACTUALIZAR</button>
    </myContext.Provider>
  )
}
