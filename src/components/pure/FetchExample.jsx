import React from 'react'
import { useEffect, useState } from 'react'
import { getAllUser } from '../../services/fetchService'

export const FetchExample = () => {

    const [users, setUsers] = useState([])
    
    useEffect(()=> {
        ObtainUsers()
    },[])

    const ObtainUsers = async () => {
        await getAllUser()
            .then((res) => {
                console.log('LA DATA DEL FETCH',res)
                setUsers(res.data)
            })
            .catch((err)=> {
                console.log('Ocurrió un problema',err)
            })
    }

  return (
    <div>
        { users?.map((user, index) =>
        {
           return(
            <p key={index}>{user.first_name}</p>
           )
        })}
    </div>
  )
}
