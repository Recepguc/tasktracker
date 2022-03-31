import React from 'react'
import Duty from './Task'

const Tasks = ({tasks, deleteTask}) => {
  return (
    <div>
        {tasks.map((task)=>(
            <Duty task={task} deleteTask={deleteTask}/>
         ))}
         
    </div>
  )
}

export default Tasks