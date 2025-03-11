import { createContext, useContext} from 'react';


export const TodoContext = createContext({
    todos: [
        { id: 1, title: 'Todo 1', completed: false },
        { id: 2, title: 'Todo 2', completed: false },
        { id: 3, title: 'Todo 3', completed: false },
    ],
    addTodo: (title) => {},
    updateTodo: (id, title) => {},
    deleteTodo: (id) => {},
    toggleTodo: (id) => {},
});

export const useTodos = () => {
    return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;