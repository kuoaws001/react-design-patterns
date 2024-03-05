import React, { createContext, useState, useReducer } from "react"

interface ITodo {
    id: number;
    task: string;
    complete: boolean;
}

interface ITodoContext {
    todos: ITodo[];
    add: any;
    remove: any;
    toggleComplete: any;
}

const TodoContext = createContext<ITodoContext | null>(null)

const TodoProvider = ({ children }) => {

    const [state, dispatch] = useReducer(todoReducer, [])

    const add = (task: string) => {
        dispatch({
            type: ActionType.ADD,
            payload: {
                id: new Date().getTime(),
                task,
                complete: false
            }
        })
    }

    const remove = (id: number) => {
        dispatch({
            type: ActionType.REMOVE,
            payload: id
        })
    }

    const toggleComplete = (id: number) => {
        dispatch({
            type: ActionType.COMPLETE,
            payload: id
        })
    }

    const value = {
        todos: state,
        add,
        remove,
        toggleComplete
    }

    return (
        <TodoContext.Provider value={value}>
            {children}
        </TodoContext.Provider>
    )

}

enum ActionType {
    ADD = 'ADD',
    REMOVE = 'REMOVE',
    COMPLETE = 'COMPLETE'
}

interface Action {
    type: ActionType;
    payload?: any;
}



const todoReducer = (todos: ITodo[], action: Action): ITodo[] => {
    switch (action.type) {
        case ActionType.ADD:
            return [...todos, action.payload]

        case ActionType.REMOVE:
            return todos.filter(todo => todo.id != action.payload)

        case ActionType.COMPLETE:
            return todos.map(todo => {
                if (todo.id == action.payload) {
                    return { ...todo, complete: !todo.complete }
                } else {
                    return todo
                }
            })
        default:
            return todos
    }
}



export { TodoProvider, TodoContext, ITodoContext, ITodo }
