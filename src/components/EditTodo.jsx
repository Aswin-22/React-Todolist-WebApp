import React from 'react'

const EditTodo = ({editTodo, task}) => {

  const [value, setValue] = React.useState(task.task)

  function handleChange(event){
    setValue(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault()
    editTodo(task.id, value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
          <input 
          type="text"
          className='input-box'
          onChange={handleChange}
          placeholder='Enter changes to your to-do...'
          value={value}
          />
          <button type='submit' className='add-task'>Update task</button>
      </form>
    </div>
  )
}

export default EditTodo
