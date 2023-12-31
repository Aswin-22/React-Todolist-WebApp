import React from 'react'
import Todoform from './Todoform'
import Todos from './Todos';
import EditTodo from './EditTodo';
import { v4 as uuidv4 } from 'uuid'

uuidv4();

const Todowrapper = () => {
  // JSON.parse(localStorage.getItem('todos')) ?? []
  const [todos, setTodos] = React.useState(
    JSON.parse(localStorage.getItem('todos')) === null ? [] :
    JSON.parse(localStorage.getItem('todos')) 
  )
  

  React.useEffect(() => {
    const data = window.localStorage.getItem('todos');
    if ( data !== null ) setTodos(JSON.parse(data));
  }, []);

  React.useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function addTodo(Todo){
    setTodos([...todos,
      {
       id:uuidv4(),
       task:Todo, 
       completed:false,
       isEditing:false 
      }])  
  }


  function toggleComplete(id){
    setTodos(
      todos.map(
        (todo) => todo.id === id ? {
          ...todo, completed: !todo.completed
        } : todo
      )
    )
  }


  function toggleEditing(id){
    setTodos(
      todos.map(
        (todo) => todo.id === id ? {
          ...todo, isEditing: !todo.isEditing
        } : todo
      )
    )
  }


  function deletetodo(id){
    setTodos(todos.filter(
      todo => todo.id !== id
    ))
  }


  function editTodo(id, task){
    setTodos(todos.map(
      todo => todo.id === id ?
      {...todo, task: task, isEditing: !todo.isEditing} : todo
    ))
  }

  return (
    <div className='TodoWrapper'>
      <Todoform addTodo={addTodo}/>
      {todos.map((todo, index) => (
        todo.isEditing ? (
          <EditTodo editTodo={editTodo} task={todo}/>
        ) : (
        <Todos
         task={todo}
         key={index}
         toggleComplete={toggleComplete}
         deletetodo={deletetodo}
         toggleEditing={toggleEditing}
         />
        )
      ))}
    </div>
  )
}

export default Todowrapper
