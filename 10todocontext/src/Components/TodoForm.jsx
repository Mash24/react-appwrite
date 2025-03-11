import React from 'react'
import { useState } from 'react'
import { useTodos} from '../Contexts/TodoContext'

function TodoForm() {
    const [todo,setTodo]=useState('')
    const {addTodo}=useTodos()
    const add=(e)=>{
        e.preventDefault()
        if(!todo) return
        addTodo({todo, completed: false})
        setTodo('')
    }

  return (
    <form onSubmit={add} className='flex flex-col space-y-2' >
        <label className='bg-gray-700 text-white font-bold px-4 py-1.5 rounded-l-lg w-full text-center'>
            Add your todo</label>
        <div className="flex">
        <input type="text" 
        value={todo} 
        onChange={(e)=>setTodo(e.target.value)} 
        placeholder="Add todo"
        required
        className='w-full border border-black/10 rounded-l-lg px-3 py-1.5 bg-white/20'
        />
        <button type="submit" className='bg-blue-600 text-white font-bold px-4 py-1.5 rounded-r-lg'>Add</button>
        </div>
        
    </form>
  )
}


export default TodoForm