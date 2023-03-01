//Remember bij afvinken doorgeven aan de parent
import '../styles/Components/todo-item.scss'
import { ITodo } from '../../../Interfaces/ITodo'


export default ({todo} : {todo : ITodo}) =>{
    //TODO: I want props here
    //TODO: name, category, isDone, id
    return (
        <li className="c-todo-item">
            <input type="checkbox" checked={todo.isDone} />
            <label>{todo.name}</label>
            <label>{todo.category}</label>
        </li>
    )
}