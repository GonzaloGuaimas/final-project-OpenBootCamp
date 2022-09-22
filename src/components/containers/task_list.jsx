import React, { useState } from 'react'
import { LEVELS } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import TaskForm from '../pure/forms/taskForm'
import TaskComponent from '../pure/task'

function TaskListComponent() {

  const defaultTask = new Task('Example','desc',true,LEVELS.URGENTE)
  const defaultTask2 = new Task('Example2','desc2',false,LEVELS.NORMAL)
  const defaultTask3 = new Task('Example2','desc2',false,LEVELS.BLOCKING)
  
  const [tasks, setTasks] = useState([defaultTask,defaultTask2,defaultTask3])
  const [loading, setLoading] = useState(true)

  function completeTask(task){
    console.log('Complete this task', task)
    const index = tasks.indexOf(task)
    const tempTasks = [...tasks]
    tempTasks[index].completed = !tempTasks[index].completed
    setTasks(tempTasks)
  }
  function deleteTask(task) {
    console.log('Delete this task', task)
    const index = tasks.indexOf(task)
    const tempTasks = [...tasks]
    tempTasks.splice(index,1)
    setTasks(tempTasks)
  }

  function addTask(task) {
    console.log('Adding this task', task)
    const index = tasks.indexOf(task)
    const tempTasks = [...tasks]
    tempTasks.push(task)
    setTasks(tempTasks)
  }

  const Table = () => {
    return (
      <table>
        <thead>
          <tr>
            <th scope='col'>Title</th>
            <th scope='col'>Description</th>
            <th scope='col'>Priority</th>
            <th scope='col'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task,index) => {
            return(<TaskComponent task={task} key={index} complete={completeTask} remove={deleteTask}></TaskComponent>)
          })}
        
        </tbody>
      </table>
    )
  }
  let tasksTable = <Table/>
  if(tasks.length>0){
    tasksTable = <Table/>
  }else{
    tasksTable = (
      <div>
      <h3>No tasks</h3>
      <p>please create a task</p>
    </div>
    )
  }

  return (
    <div>
        <div className='col-12'>
            <div className='card'>
              <div className='card-header p-3'>
                <h5>Your Tasks:</h5>
              </div>
              <div className='card-body' data-mdb-perfect-scrollbar='true'  style={ {position: 'relative', height: '400px'} }>
                {tasksTable}
              </div>
            </div>
            <TaskForm add={addTask}></TaskForm>
        </div>
        
    </div>
  )
}

export default TaskListComponent
