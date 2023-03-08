import AddToDo from '../assets/Components/AddToDo'
import AppHeader from '../assets/Components/AppHeader'
import TodoItem from '../assets/Components/TodoItem'
import { ITodo } from '../../Interfaces/ITodo'
import { useEffect, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

export default () => {
  const {get, set} =  useLocalStorage()

    const [todos, setTodos] = useState<ITodo[]>(get())

    useEffect(() => {
      set(todos.filter((t: ITodo) => !t.isDone))
    }, [todos])

    const addNewTodo = (t: ITodo) => {
        setTodos([t, ...todos])
    }

    //TODO: when click on a todo it should be marked as done
    //TODO: after 3s the todo should be removed from the list
    //TODO: keep track of the todos in local storage

    const remove = (todo: ITodo) => {
      setTodos((currentTodos: ITodo[]) => currentTodos.filter((t: ITodo) => t.id !== todo.id),
      )
    }

    const toggleTodo = (todo: ITodo) => {
      setTodos((currentTodos: ITodo[]) =>
        currentTodos.map((t: ITodo) => {
            if (t.id === todo.id) return { ...t, isDone: !t.isDone}
            return t
        }),
      )
    }
    return (
        <main>
            <AppHeader todoCount={todos.filter((t: ITodo) => !t.isDone).length}/>

            <AddToDo handleNewTodo={addNewTodo}/>

            <ul className='flex flex-col gap-y-4'>
                {todos.map((todo: ITodo) => (
                    <TodoItem key={todo.id} todo={todo} toggle={toggleTodo} remove={remove} />
                ))}
            </ul>
        </main> 
    )
}