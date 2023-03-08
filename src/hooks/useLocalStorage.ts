import { ITodo } from "../../Interfaces/ITodo"

export default () => {
    const key = 'todos'

    const get = () => localStorage.getItem(key) ? JSON.parse(localStorage.todos) : []

    const set = (payload: ITodo[]) => localStorage.setItem(key, JSON.stringify(payload))
    return { get, set }
}