import AppHeader from "./assets/Components/AppHeader"
import AppFooter from "./assets/Components/AppFooter"
import AddToDo from "./assets/Components/AddToDo"
import ToDoItem from "./assets/Components/TodoItem"
import './assets/styles/screen.scss'
import {ITodo} from '../Interfaces/ITodo'
import { useState } from "react"

function App() {
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
    <div className="o-container">
      <AppHeader />

      <AddToDo handleNewTodo={addNewTodo}/>

      <ul>
        {todos.map((todo : ITodo) => (
        <ToDoItem todo={ todo} key={todo.name} />
        ))} 
      </ul>

      <AppFooter />
    </div>
)}

export default App