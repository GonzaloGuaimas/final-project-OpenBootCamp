import APIRequest from '../utils/config/axios.config'

export default function getRandomUser(){
    return APIRequest.get('/')
}
