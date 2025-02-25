const TodoData = (props) => {

    const { todoList } = props

    return (
        <div className='todo-data'>
            <div>Todo List</div>
            <table>
                {todoList.map((todo, index) => {
                    return (
                        <tr>
                            <th>{index}</th>
                            <th>{todo.id}</th>
                            <th>{todo.name}</th>
                            <th><button>Delete</button></th>
                        </tr>
                    );
                })}
            </table>
        </div>
    );
}

export default TodoData