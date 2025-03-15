import React from 'react'
import { removeTodo, toggleTodo } from '../features/todoSlice'
import { useDispatch, useSelector } from 'react-redux'

const TodoList = () => {

  const todo = useSelector((state) => state.todos)

    const dispatch = useDispatch()


  return (
    <div>
      {todo.length === 0 && <p>No todos yet!</p>}
      {todo.map((todo) => (
        <div key={todo.id} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
          <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
        </div>
      ))}
    </div>

  )
}

export default TodoList