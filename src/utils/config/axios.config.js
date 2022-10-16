import axios from 'axios'

export default axios.create(
    {
        baseURL: 'https://reqres.in/api/users?page=2',
        responseType: 'json'
    }
)