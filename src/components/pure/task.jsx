import React from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'
import '../../styles/task.scss'

function TaskComponent( { task } ) {
  return (
    <tr className='fw-normal'>
        <th>
            <span className='ms-2'>{task.name}</span>
        </th>
        <td className='align-middle'>
            <span className='ms-2'>{task.description}</span>
        </td>
        <td className='align-middle'>
            <span className='ms-2'>{task.level}</span>
        </td>
        <td className='align-middle'>
            <span className='ms-2'>{task.completed}</span>
        </td>
    </tr>
    //<div>
    //    <h2 className='task-name'>
    //        Name: { task.name }
    //    </h2>
    //    <h3>
    //        Description: { task.description }
    //    </h3>
    //    <h4>
    //        Level: { task.level }
    //    </h4>
    //    <h5>
    //        This task is: { task.completed ? 'Completed' : 'Incompleted' }
    //    </h5>
    //</div>
  )
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
}

export default TaskComponent
