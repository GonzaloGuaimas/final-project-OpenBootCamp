import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {

  const history = useNavigate()
  const goBack = () => {
    history.goBack()
  }
  return (
    <div>
        <h1>Home Page</h1>
        <h2>Accces to your taskList</h2>
        <button onClick={goBack}>Go Back Home</button>
    </div>
  )
}
export default HomePage