import { useState } from "react";
import { Link } from "react-router-dom";
import { Settings } from "lucide-react";



export default ({todoCount}: {todoCount: number}) =>{
    const [user, setUser] = useState("Marty");
    console.log(todoCount)

    const printAmountTodos = () => {
        if (todoCount === 0) {
            return "no todo's";
        } else if (todoCount === 1) {
            return "1 todo";
        } else {
            return `${todoCount} todo's`;
        }
        return 'You have no todos';
    }

    return (
        <header className="py-12 flex items-center justify-between py-12" >
            <h1 className="text-4xl tracking-wide font-bold">Hello {user ? `, ${user}` : ''}</h1>
            <p className="text-lg text-neutral-500">{printAmountTodos()}</p>

            <Link className="rounded-full p-4 bg-neutral-100 hover:text-neutral-600 focus:outline-none focus-visible:text-neutral-600 focus-visible:ring" 
            to={'./Settings'} >
                <Settings className="stroke-current" />
            </Link>
        </header>
    )
}