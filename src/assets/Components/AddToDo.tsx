import {Plus} from 'lucide-react'
import '../../assets/styles/Components/add-todo.scss'

export default () => {
    return (
        <form className='c-add-todo'>
            <button className='c-add-todo__button'>
                <Plus className='c-add-todo__icon' />
            </button>
            <div>
                <input type="text" placeholder='ex. Learn more' className='c-add-todo__input' />
                <select className='c-add-todo__select' name="category" id="category">
                    <option value="Work">Work</option>
                    <option value="Personal">Personal</option>
                </select>
            </div>
        </form>
    )
}