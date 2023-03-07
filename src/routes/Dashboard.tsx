import AddToDo from '../assets/Components/AddToDo'
import AppHeader from '../assets/Components/AppHeader'
import TodoItem from '../assets/Components/TodoItem'
import { ITodo } from '../../Interfaces/ITodo'
import { useState } from 'react'

export default () => {

    const [todos, setTodos] = useState<ITodo[]>([
        {
          id: '1',
          name: 'Learn React',
          category: 'Work',
          isDone: true
        },
        {
          id: '2',
          name: 'Learn Typescript',
          category: 'Work',
          isDone: false
        },
        {
          id: '3',
          name: 'Learn GraphQL',
          category: 'Work',
          isDone: false
        },
      ])

    const addNewTodo = (t: ITodo) => {
        setTodos([t, ...todos])
    }

    return (
        <main>
            <AppHeader />

            <AddToDo handleNewTodo={addNewTodo}/>

            <ul className='flex flex-col gap-y-4'>
                {todos.map((todo: ITodo) => (
                    <TodoItem key={todo.name} todo={todo} />
                ))}
            </ul>
        </main> 
    )
}