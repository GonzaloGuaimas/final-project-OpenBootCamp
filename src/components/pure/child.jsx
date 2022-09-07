import React, { useRef } from 'react'

const Child = ({ name, send, update }) => {

    const messageRef = useRef('')
    const nameRef = useRef('')

    function pressBtn(){
        const text = messageRef.current.value
        alert(text)
    }
    function pressBtnParams(txt){
        alert(txt)
    }
    function submitName(e){
        e.preventDefault()
        update(nameRef.current.value)
    }
  return (
    <div>
        <p onMouseOver={()=>{ console.log('MouseObver') }}>CHILD</p>
        <h2>{name}</h2>
        <button onClick={pressBtn}>BTN1</button>
        <button onClick={()=>{pressBtnParams('asd')}}>BTN2</button>
        <button onClick={() => send(messageRef.current.value)}>send Message</button>
        <input placeholder='Insert a text'
         onFocus={() => { console.log('Input foused') }}
          onChange={(e)=> console.log('Input Changed',e.target.value)}
          onCopy={() => console.log('Copied text')}
          ref={messageRef}/>
        <div style={{marginTop:'20px'}}>
            <form onSubmit={submitName}>
                <input ref={nameRef} placeholder='Nuevo Nombre'/>
                <button type='submit'>Update Name</button>
            </form>
        </div>
    </div>
  )
}

export default Child