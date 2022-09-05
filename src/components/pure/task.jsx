import React from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'
import '../../styles/task.scss'
import { LEVELS } from '../../models/levels.enum'

function TaskComponent( { task } ) {

    function taskLevelBadge(){
        switch(task.level){
            case LEVELS.NORMAL:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-primary'>
                        {task.level}
                    </span>    
                </h6>)
                break
                case LEVELS.URGENTE:
                    return(
                    <h6 className='mb-0'>
                        <span className='badge bg-warning'>
                            {task.level}
                        </span>    
                    </h6>)
                    break
                    case LEVELS.BLOCKING:
                        return(
                        <h6 className='mb-0'>
                            <span className='badge bg-danger'>
                                {task.level}
                            </span>    
                        </h6>)
                        break
                default:
                    break
        }
    }

    function taskCompletedIcon(){
        if(task.completed){
            return <i className='bi-toggle-on' style={{color: 'green', fontWeight: 'bold'}}></i>
        }else{
            return <i className='bi-toggle-off' style={{color: 'red', fontWeight: 'bold'}}></i>
        }
    }

  return (
    <tr className='fw-normal'>
        <th>
            <span className='ms-2'>{task.name}</span>
        </th>
        <td className='align-middle'>
            <span className='ms-2'>{task.description}</span>
        </td>
        <td className='align-middle'>
           {taskLevelBadge()}
        </td>
        <td className='align-middle'>
            {taskCompletedIcon()}
            <i className='bi-trash' style={{color: 'tomato', fontSize: '20px'}}></i>
        </td>
    </tr>
  )
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
}

export default TaskComponent
