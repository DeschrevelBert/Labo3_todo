//Remember bij afvinken doorgeven aan de parent
import { ITodo } from '../../../Interfaces/ITodo'
import { Check } from 'lucide-react'

//TODO: Add custom checkbox
//TODO: add styling
//ref: zie leho

export default ({todo} : {todo: ITodo}) => {
    // TODO: i want props here
    // description, category, isDone, id


    return(
        <li className="flex items-center gap-4">
            <input className='sr-only peer'
            id={todo.name}
             type="checkbox" />
             <span className={`shrink-0 flex justify-center items-center rounded-full w-12 h-12 border-2 border-blue-600 ${todo.isDone ? 'bg-blue-600' : ''}`} >
                <Check className={`stroke-current text-white`} />
             </span>
             <div>
                <label className='text-xl font-semibold' htmlFor={todo.name}>{todo.name}</label>
                <p className='text-neutral-400'>{todo.category}</p>
             </div>
        </li>
    )
}