//Remember bij afvinken doorgeven aan de parent
import '../styles/Components/todo-item.scss'
import { ITodo } from '../../../Interfaces/ITodo'


export default ({name, category, isDone} : {name: string, category: string, isDone: boolean}) => {
    // TODO: i want props here
    // description, category, isDone, id


    return(
        <li className="c-todo-item">
            <input type="checkbox" />
            <label>{name}</label>
            <p>{category}</p>
        </li>
    )
}