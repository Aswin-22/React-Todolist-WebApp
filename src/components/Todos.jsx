import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const Todos = ({task, toggleComplete, deletetodo, toggleEditing}) => {
  return (
    <div className='Todos'>
      <p onClick={() => toggleComplete(task.id)} className={`${task.completed ? "completed":""}`}>
        {task.task}
      </p>
      <div className='icons'>
      <FaRegEdit className='edit'onClick={() => toggleEditing(task.id)}/>
      <RiDeleteBin6Line className='delete'onClick={() => deletetodo(task.id)}/>
      </div>
    </div>
  )
}

export default Todos
