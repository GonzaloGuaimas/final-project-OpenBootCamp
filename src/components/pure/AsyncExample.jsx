import React from 'react'

const AsyncExample = () => {

    async function generate(){
        return 1
    }

    function obtainNumber(){
        generate()
            .then((res) => alert(res))
            .catch((err) => alert("salio mal"+err))
    }
    function obtainPromiseNumber(){
        generatePromiseNumbner()
            .then((res) => alert(res))
            .catch((err) => alert("salio mal"+err))
    }

   

    async function generatePromiseNumbner(){
        return Promise.resolve(2)
    }

    async function saveSessionStorage(key, value){
        sessionStorage.setItem(key, value)
        return Promise.resolve(sessionStorage.getItem(key))
    }
    function showStorage(){
        saveSessionStorage('name','Gonzlao')
            .then((res) => alert(res))
            .catch((err) => alert(err))
            .finally(() => console.log('name saved and retrieved'))
    }


    async function obtainMessage(){
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve('Hola'), 2000)
        })

        let msg = await promise
        await alert ('msg received'+ msg)
    }

    const returnError = async () => {
        await Promise.reject(new Error('Error'))
    }
    const consumeError = () => {
        returnError()
        .then(res => alert('error:'+ res))
        .catch(err => alert('salio algo mal'+ err))
    }

    const urlNotFound = async () => {
        try {
            let response = await fetch('https://asdas')
            alert(`respuesta:${JSON.stringify(response)} `)
        }catch(error){
            alert('salio algo mal'+ error)
        }
    }

    const multiplePromise = async () => {
        let results = await Promise.all(
            [
                fetch('https://reqres.in/api/users'),
                fetch('https://reqres.in/api/users?page=2')
            ]
        ).catch(err => alert(err))

        await alert(JSON.stringify(results))
    }

  return (
    <div>
        <button onClick={obtainNumber}>CLIC</button>
        <button onClick={obtainPromiseNumber}>CLIC</button>
        <button onClick={showStorage}>CLIC</button>
        <button onClick={obtainMessage}>SET MSG</button>
        <button onClick={consumeError}>error</button>
        <button onClick={urlNotFound}>FETCH</button>
        <button onClick={multiplePromise}>MUL</button>
    </div>
  )
}

export default AsyncExample