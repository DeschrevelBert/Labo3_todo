import AddToDo from '../assets/Components/AddToDo'
import AppHeader from '../assets/Components/AppHeader'
import TodoItem from '../assets/Components/TodoItem'

export default () => {
    return (
        <main>
            <AppHeader />

            <AddToDo />

            <ul>
                <TodoItem name="water drinken" category="personal"  isDone={false}/>
            </ul>
        </main> 
    )
}