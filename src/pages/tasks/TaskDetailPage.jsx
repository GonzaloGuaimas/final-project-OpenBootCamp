import React from 'react'
import { useParams } from 'react-router-dom'

const TaskDetailPage = () => {
    const {id} = useParams
  return (
    <div>TaskDetailPage {id}</div>
  )
}

export default TaskDetailPage
