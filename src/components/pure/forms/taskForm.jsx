import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { LEVELS } from '../../../models/levels.enum'
import { Task } from '../../../models/task.class'

const TaskForm = ({ add, length }) => {
  const nameRef = useRef('')
  const descriptionRef = useRef('')
  const levelRef = useRef(LEVELS.NORMAL)

  function addTask(e){
    e.preventDefault()
    const newTask = new Task(
      nameRef.current.value,
      descriptionRef.current.value,
      false,
      levelRef.current.value,
    )
    add(newTask)
  }
  return (
    <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
      <div className='form-outline flex-fill'>
        <input ref={nameRef} id='inputName' type={'text'} placeholder='input name' className='form-control form-control-lg' required autoFocus/>
        <input ref={descriptionRef} id='inputDescription' type={'text'} placeholder='input description' className='form-control form-control-lg' required/>
        <label htmlFor='selectLevel' className='sr-only'>Priority</label>
        <select id="inputLevel" ref={levelRef} defaultValue={LEVELS.NORMAL}>
          <option value={LEVELS.NORMAL}>Normal</option>
          <option value={LEVELS.URGENTE}>Urgent</option>
          <option value={LEVELS.BLOCKING}>Blocking</option>
        </select>
      </div>
      <button type='submit' className='btn btn-success btn-lg ms-2'>
        {length>0 ? 'Add Task' : 'Add your First Task'}
      </button>
    </form>
  )
}
TaskForm.prototype = {
  add: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired
}

export default TaskForm
