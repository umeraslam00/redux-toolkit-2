import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = [
    {
        id: nanoid(),
        text: "Learn Redux Toolkit",
        completed: false
    }
]


const todoSlice = createSlice({
    name: 'todos',
    initialState,
    
    reducers:{

        addTodo: (state, action) => {
            state.push({
                id: nanoid(),
                text: action.payload,
                completed: false
            })
        },

        removeTodo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload)
        },

        toggleTodo: (state, action) => {
            const todo = state.find(todo => todo.id === action.payload)

            if(todo) {
                todo.completed = !todo.completed
            }
        }

    }
})


// Export actions
export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;

// Export reducer
export default todoSlice.reducer;