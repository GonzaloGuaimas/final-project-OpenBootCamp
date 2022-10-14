import React, { useState } from 'react'
import { getNumbers } from '../../services/observableService'

export const ObservableExample = () => {

    const [ number, setNumebr] = useState(0)
    console.log('Suscription to observable')
    const obtainNumber = () => {
        getNumbers.subscribe(
            {
                next(newNumber){
                    console.log('value: '+ newNumber)
                    setNumebr(newNumber)
                },
                error(){
                    alert('error')
                    console.log('Error in observable')
                },
                complete(){
                    alert('finished: '+number)
                    console.log('Copmplete observalbe')
                }
            }
        )
        console.log('Finished observable')
    }
  return (
    <div>
        <h3>Observable Example</h3>
        <h1>Number: {number}</h1>
        <button onClick={obtainNumber}> click here to run observable</button>
    </div>
  )
}
