import React from 'react'
import { LEVELS } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/task'

function TaskListComponent() {

  const defaultTask = new Task('Example','desc',true,LEVELS.URGENTE)
  

  return (
    <div>
        <div>
            <h1>MY TASKS</h1>
        </div>
        <TaskComponent task={defaultTask} ></TaskComponent>
    </div>
  )
}

export default TaskListComponent
