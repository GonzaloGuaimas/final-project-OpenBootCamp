import React, { useState } from 'react'

const registerForm = () => {
    const initialData = [{
        user: '',
        password: '',
        email: '',
        name: ''
    }]
    const [data, setData] = useState(initialData)
  return (
    <div>registerForm</div>
  )
}
