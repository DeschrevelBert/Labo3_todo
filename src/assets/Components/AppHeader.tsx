import { useState } from "react";

import '../styles/Components/header.scss'


export default () =>{
    const [user, setUser] = useState("Marty");
    const [todoCount, setTodoCount] = useState(14);

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
        <header className="c-header" >
            <h1 className="Title">Hello, {user}</h1>
            <p className="Text">There are {printAmountTodos()}</p>
        </header>
    )
}