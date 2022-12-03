import { Button } from 'react-bootstrap';

export default function Todo({ todo, index, markTodo, removeTodo }) {
    return (
        <>
        <div className="todo"></div>
        <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
        <div>
            <Button variant='outline-success' className='btn-done' onClick={() => markTodo(index)}>✅</Button>
            <Button variant='outline-danger' className='btn-cancel' onClick={() => removeTodo(index)}>❌</Button>
        </div>
        </>
    )
}