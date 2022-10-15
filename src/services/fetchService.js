export const getAllUser = async() => {
    let response = await fetch('https://reqres.in/api/users')
    console.log('Primer resp',response)
    return response.json
}