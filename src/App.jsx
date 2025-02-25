import TodoData from './components/learning/TodoData';
import TodoNew from './components/learning/TodoNew';
import './components/todo/todo.css';
import reactLogo from './assets/react.svg';
import { useState } from 'react';

const App = () => {

  const [todoList, setTodoList] = useState([]);

  const addNewTodoHandler = (name) => {
    const newId = todoList.length == 0 ? 1 :  Math.max(...todoList.map(todo => todo.id)) + 1;
    const newTodo = {
      id: newId,
      name: name
    }
    setTodoList([...todoList, newTodo]);
  }

  return (
    <div className='todo-container'>
      <div className='todo-title'>Todo List</div>
      <TodoNew addNewTodoHandler = {addNewTodoHandler}/>
      <TodoData todoList={todoList}/>
      <div className='todo-image'>
        <img src={reactLogo}/>
      </div>
    </div>
  )
}

export default App
