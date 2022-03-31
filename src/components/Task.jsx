import React from 'react'
import {FaTimes} from "react-icons/fa";
const Duty = ({task, deleteTask}) => {
  return (
    <div className='task'>
        <h3>{task.text} <FaTimes style={{color:"red",cursor:"pointer"}} onClick={()=>deleteTask(task.id)} />  </h3>
        <p>{task.day}</p>
    </div>
  )
}
export default Duty;

