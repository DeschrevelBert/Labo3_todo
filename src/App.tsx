import AppHeader from "./assets/Components/AppHeader"
import AppFooter from "./assets/Components/AppFooter"
import AddToDo from "./assets/Components/AddToDo"
import ToDoItem from "./assets/Components/TodoItem"
import './assets/styles/screen.scss'

function App() {

  return (
    <div className="o-container">
      <AppHeader />

      <AddToDo/>

      <ul>
        <ToDoItem name="Water drinken" category="Personal" isDone={false} />
      </ul>

      <AppFooter />
    </div>
)}

export default App
