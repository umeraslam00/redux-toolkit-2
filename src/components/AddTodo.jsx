import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todoSlice'

const AddTodo = () => {

    const [task, setTask] = useState("")
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if (task.trim()) {
            dispatch(addTodo(task))
            setTask('')
        }
    }


  return (
      <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Add a task' value={task} onChange={(e) => setTask(e.target.value)} />
            <button>Add</button>
        </form>

      </div>
  )
}

export default AddTodo