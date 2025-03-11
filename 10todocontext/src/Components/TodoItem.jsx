import React from 'react'
import { useState } from 'react'
import { useTodos} from '../Contexts/TodoContext'


function TodoItem({ todo }) { // Destructure properly
  const [isTodoEditing, setIsTodoEditing] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.title);

  const { updateTodo, deleteTodo, toggleTodo } = useTodos();

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, title: todoMsg }); // Fix `todo` field
    setIsTodoEditing(false);
  };

  const toggleComplete = () => {
    toggleTodo(todo.id); // Fix function call
  };

  return (
    <div className={`flex items-center justify-between p-2 border-b border-gray-200 ${todo.completed ? 'bg-green-100' : 'bg-gray-100'}`}>
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggleComplete}
      />
      <input
        type="text"
        className={`border outline-none p-2 w-full bg-transparent rounded-lg ${
          isTodoEditing ? 'border-black/10 px-2' : 'border-transparent'
        }`}
        value={todoMsg}
        readOnly={!isTodoEditing}
        onChange={(e) => setTodoMsg(e.target.value)}
      />
      <div className="flex space-x-2">
        <button
          className="inline-flex w-8 h-8 items-center justify-center rounded-lg bg-gray-50 shrink-0 disabled:opacity-50"
          onClick={() => setIsTodoEditing(!isTodoEditing)}
        >
          {isTodoEditing ? 'Save' : 'Edit'}
        </button>

        <button
          className="inline-flex w-8 h-8 items-center justify-center rounded-lg bg-red-50 shrink-0 disabled:opacity-50"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
