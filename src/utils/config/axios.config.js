import axios from 'axios'

//def config for AXIOS

export default axios.create(
    {
        baseURL: 'https://reqres.in/api/users',
        responseType: 'json',
        timeout: '6000',
    }
)