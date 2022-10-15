import React, { useRef, useState, useEffect} from 'react'
import getRandomUser from '../../services/axiosService'

export const AxiosExample = () => {
    
    const [users, setUsers] = useState([])

    useEffect(() => {
        getRandomUser()
            .then((res) => {
            console.log(res)
            setUsers(res.data.data)
        } )
        .catch((err) => {
            console.log(err)
        })
    }, [])
  return (
    <div>
        <h2>USERSSSS</h2>
        {
            users.map((user, key) => {
                return(
                    <p key={key}> {user.first_name}</p>
                )
            })
        }
    </div>
  )
}
