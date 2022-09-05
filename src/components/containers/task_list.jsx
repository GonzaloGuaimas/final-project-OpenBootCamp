import React, { useState } from 'react'
import { LEVELS } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/task'

function TaskListComponent() {

  const defaultTask = new Task('Example','desc',true,LEVELS.URGENTE)
  const defaultTask2 = new Task('Example2','desc2',false,LEVELS.NORMAL)
  const defaultTask3 = new Task('Example2','desc2',false,LEVELS.BLOCKING)
  
  const [tasks, setTasks] = useState([defaultTask,defaultTask2,defaultTask3])
  const [loading, setLoading] = useState(true)

  const changeState = (id) => {
    console.log('cambiar estado de una tarea')
  }

  return (
    <div>
        <div className='col-12'>
            <div className='card'>
              <div className='card-header p-3'>
                <h5>Your Tasks:</h5>
              </div>
              <div className='card-body' data-mdb-perfect-scrollbar='true'  style={ {position: 'relative', height: '400px'} }>
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
                      return(<TaskComponent task={task} key={index}></TaskComponent>)
                    })}
                  
                  </tbody>
                </table>
              </div>
            </div>
        </div>
        
    </div>
  )
}

export default TaskListComponent
