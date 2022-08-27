import React, { useState } from 'react'

const loginForm = () => {
    const initCredentials = [{
        user: '',
        password: ''
    }]
    const [credentials, setCredentials] = useState(initCredentials)
  return (
    <div>loginForm</div>
  )
}

export default LoginForm
