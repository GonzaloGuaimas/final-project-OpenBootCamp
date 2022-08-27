import React, { useState, useEffect, useRef} from 'react'

export default function Ejemplo2() {

    const [contador1, setContador1] = useState(0)
    const [contador2, setContador2] = useState(0)


    const myRef = useRef()

    function incrementar1(){
        setContador1(contador1+1)   
    }

    function incrementar2(){
        setContador2(contador2+1)   
    }


    useEffect(() => {
      console.log('CAMBIO DEL ESTADO DEL CONTADOR 1')
      console.log(myRef)
    }, [contador1]) /* SOLO CONTROLAMOS LOS CAMBIOS QUE HAY EN EL CONTADOR UNO, SIN ESTO es el cambio de todo */
    /*recibe diferentes valores */
    
    useEffect(() => {
      console.log('CAMBIO DEL ESTADO DEL CONTADOR 1')
      console.log(myRef)
    }, [contador1, contador2])

  return (
    <div>
        <h3>COUNTER1: {contador1}</h3>
        <h3>COUNTER2: {contador2}</h3>
        <br />

        <button onClick={incrementar1}>INCREMENTAR1</button>
        <br />
        <button onClick={incrementar2}>INCREMENTAR2</button>


        <h4 ref={myRef}>
            EJEMPLO DE ELEMENTO REFERENCIADO
        </h4>
    </div>
  )
}
