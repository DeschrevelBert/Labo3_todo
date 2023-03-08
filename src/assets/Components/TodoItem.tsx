//Remember bij afvinken doorgeven aan de parent
import { ITodo } from '../../../Interfaces/ITodo'
import { Check } from 'lucide-react'
import { useState } from 'react'

//TODO: Add custom checkbox
//TODO: add styling
//ref: zie leho

export default ({todo, toggle, remove} : {todo: ITodo, toggle : Function, remove: Function}) => {
    // TODO: i want props here
    // description, category, isDone, id
    console.log(todo)

    const [timeOutId, setTimeOutId] = useState<number | undefined>()


    const handleToggle = () => {
        if(timeOutId) clearTimeout(timeOutId)
        toggle(todo)

        if(!todo.isDone){
          const id = setTimeout(() => {
            remove(todo)
            setTimeOutId(undefined) // better safe than sorry
          }, 3000)
      
          setTimeOutId(id)
        }
      }
    return(
        <li>

            <label htmlFor={todo.id} className={`flex items-center gap-4 transition-opacity duration-200 ${todo.isDone ? 'opacity-40' : ''}`}>

                <input className='sr-only peer' id={todo.id} type="checkbox" defaultChecked={todo.isDone} onChange={handleToggle}/>



                <label className={`shrink-0 flex justify-center items-center rounded-full w-12 h-12 border-2 border-blue-600 peer-checked:bg-blue-600 peer-focus-visible:ring`} >
                    <Check className={`stroke-current text-white`} />
                </label>

                <div>
                    {/* <label className='text-xl font-semibold' htmlFor={todo.name}>{todo.name}</label> */}
                    <p className='text-xl font-semibold'>{todo.name}</p>
                    <p className='text-neutral-400'>{todo.category}</p>
                </div>
            </label>
        </li>
    )
}