//Remember bij afvinken doorgeven aan de parent
import '../styles/Components/todo-item.scss'

export default ({name, category, isDone} : {
    name : string 
    category : string
    isDone : boolean 
}) =>{
    //TODO: I want props here
    //TODO: name, category, isDone, id
    return (
        <li className="c-todo-item">
            <input type="checkbox" />
            <label>Todo: vissen water geven</label>
        </li>
    )
}