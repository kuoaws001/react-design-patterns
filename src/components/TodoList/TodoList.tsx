import React, { useContext, useState } from 'react'
import { TodoProvider, TodoContext, ITodoContext, ITodo } from '../../context/TodoProvider'

const TodoList = () => {
    return (
        <TodoProvider>
            <AddTodo />
        </TodoProvider>
    )
}

export default TodoList

const AddTodo = () => {

    const { add } = useContext(TodoContext) as ITodoContext

    const [task, setTask] = useState('');

    const handleAdd = () => {
        add(task);
        setTask('')
    }

    return (
        <div>
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
            <button onClick={handleAdd}>Add</button>

            <div>
                <Todos />
            </div>
        </div>
    )
}

const Todos = () => {

    const { todos } = useContext(TodoContext) as ITodoContext;

    return (
        <ul>
            {todos.map(todo => (<TodoItem key={todo.id} {...todo} />))}
        </ul>
    )

}

const TodoItem = ({ id, task, complete }: ITodo) => {

    const { remove, toggleComplete } = useContext(TodoContext) as ITodoContext;

    return (
        <div>
            <input type="text" value={task} onChange={() => { }} />
            <button onClick={() => remove(id)}>Delete</button>
            <button onClick={() => toggleComplete(id)}>{complete ? 'redo' : 'complete'}</button>
        </div>
    )
}