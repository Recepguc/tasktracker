import React from 'react'

const Tasks = (tasks) => {
  return (
    <div>
        {tasks.map((task)=>(
            <p>{task.text}</p>
         ))}
    </div>
  )
}

export default Tasks