import React from 'react'

const Todoform = ({addTodo}) => {

  const [value, setValue] = React.useState("") 

  function handleChange(event){
    setValue(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault()
    addTodo(value)
    setValue("")
  }

  return (
    <div>
      <h1>To-do Hub!</h1>
      <form onSubmit={handleSubmit}>
          <input 
          type="text"
          className='input-box'
          onChange={handleChange}
          placeholder='Enter your to-do here...'
          value={value}
          />
          <button type='submit' className='add-task'>Add task</button>
      </form>
    </div>
  )
}

export default Todoform
