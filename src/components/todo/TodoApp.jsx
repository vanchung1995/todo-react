import { useState } from "react";

import reactLogo from '../../assets/react.svg';
import TodoData from './TodoData';
import TodoNew from './TodoNew';

const TodoApp = () => {

    const [todoList, setTodoList] = useState([]);

    const addNewTodoHandler = (name) => {
        const newId = todoList.length == 0 ? 1 : Math.max(...todoList.map(todo => todo.id)) + 1;
        const newTodo = {
            id: newId,
            name: name
        }
        setTodoList([...todoList, newTodo]);
    }

    const deleteTodoHandler = (todoId) => {
        const newTodos = todoList.filter(todo => todo.id !== todoId);
        setTodoList(newTodos);
    }

    return (
        <div className='todo-container'>
            <div className='todo-title'>Todo List</div>
            <TodoNew addNewTodoHandler={addNewTodoHandler} />
            <TodoData todoList={todoList} deleteTodoHandler={deleteTodoHandler} />
            <div className='todo-image'>
                <img src={reactLogo} />
            </div>
        </div>
    )
}

export default TodoApp