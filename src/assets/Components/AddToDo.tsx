import {Plus} from 'lucide-react'
import { ITodo } from '../../../Interfaces/ITodo';
import { ChangeEvent, useState } from 'react';
import '../../assets/styles/Components/add-todo.scss'

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
        <form className='c-add-todo' onSubmit={addTodo}>
            <button className='c-add-todo__button'>
                <Plus className='c-add-todo__icon' />
            </button>

            <div>
                <input value={newTodo.name} 
                onInput={(e) => setNewTodo({...newTodo, name: e.currentTarget.value})} //3 puntjes (spread operator) haalt de keys uit een object en zet ze in een nieuw object
                type="text" placeholder='ex. Learn more' className='c-add-todo__input' />
                <select value={newTodo.category} onChange={(e:ChangeEvent<HTMLSelectElement>) => {
                    setNewTodo({...newTodo, category: e.currentTarget.value})
                }} 
                className='c-add-todo__select' name="category" id="category">
                    <option value="Work">Work</option>
                    <option value="Personal">Personal</option>
                </select>
            </div>

        </form>
    )
}