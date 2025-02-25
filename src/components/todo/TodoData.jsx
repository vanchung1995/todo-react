const TodoData = (props) => {

    const { todoList, deleteTodoHandler } = props

    return (
        <div className='todo-data'>
            <div>Todo List</div>
            <table>
                {todoList.map((todo, index) => {
                    return (
                        <tr className="todoRow">
                            <th className="todoInfo">{index}</th>
                            <th className="todoInfo">{todo.id}</th>
                            <th className="todoInfo">{todo.name}</th>
                            <th className="todoRemove"><button onClick={() => {deleteTodoHandler(todo.id)}}>Delete</button></th>
                        </tr>
                    );
                })}
            </table>
        </div>
    );
}

export default TodoData