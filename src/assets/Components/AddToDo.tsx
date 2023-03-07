import {Plus} from 'lucide-react'
import { ITodo } from '../../../Interfaces/ITodo';
import { ChangeEvent, useState } from 'react';

export default ({handleNewTodo} : {handleNewTodo: Function}) => {
    const [newTodo, setNewTodo] = useState<ITodo>({
        name: '',
        category: 'Work',
        isDone: false
    });

    const emptyTodo = () => {
        setNewTodo({
            name: '',
            category: 'Work',
            isDone: false
        })
    };

    const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); //vermijd refresh van pagina
        if(!newTodo.name || !newTodo.category) return console.error('Please fill in all fields');
        
        handleNewTodo(newTodo) //zie parent component
        emptyTodo();
    };


    return (
        <form className='flex items-center mb-8 gap-4' onSubmit={addTodo}>
            <button className='w-16 h-16 hover:bg-neutral-100 flex items-center justify-center rounded-full focus:outline-none focus-visible:ring-2'>
                <Plus className='stroke-current text-neutral-700' />
            </button>

            <div className='spacey-y-2 w-full'>
                <input value={newTodo.name} 
                onInput={(e) => setNewTodo({...newTodo, name: e.currentTarget.value})} //3 puntjes (spread operator) haalt de keys uit een object en zet ze in een nieuw object
                type="text" placeholder='ex. Learn more' className='p-2 border border-neutral-200 rounded w-full focus:outline-none focus-visible:ring-2' />
                <select 
                value={newTodo.category} onChange={(e:ChangeEvent<HTMLSelectElement>) => {
                    setNewTodo({...newTodo, category: e.currentTarget.value})
                }} 
                className='w-full p-2 border border-neutral-200 rounded focus:outline-none focus-visible:ring-2' name="category" id="category">
                    <option value="Work">Work</option>
                    <option value="Personal">Personal</option>
                </select>
            </div>

        </form>
    )
}
/*
export default () => {
    return (
        <form className='c-add-todo'>
            <button className='c-add-todo__button'>
                <Plus className='c-add-todo__icon'/>
            </button>
            <div>
                <input type="text" placeholder="Eg. learn vue" className='c-add-todo__input'/>
                <select name="category" id="category" className='c-add-todo__select'>
                    <option value="work">Work</option>
                    <option value="personal">Personal</option>
                </select>
            </div>
        </form>
    )
}*/