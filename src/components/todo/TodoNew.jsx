import { useState } from "react"

const TodoNew = (props) => {
    const {addNewTodoHandler} = props;

    const [inputValue, setInputValue] = useState("");

    const handleOnChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleOnClick = () => {
        addNewTodoHandler(inputValue);
        setInputValue("");
    }

    return (
        <div className='todo-new'>
            <input type='text' onChange={handleOnChange} value={inputValue}></input>
            <button onClick={handleOnClick}>Add</button>
        </div>
    )
}
export default TodoNew