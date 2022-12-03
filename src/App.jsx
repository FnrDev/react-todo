import { useState } from 'react'
import './App.css'
import FormTodo from './components/FormTodo';
import Todo from './components/Todo';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [tasks, setTask] = useState([])

  const addTodo = (text) => {
    setTask([...tasks, { text }]);
  }

  const completeTask = (index) => {
    const newTask = [...tasks];
    newTask[index].isDone = true;
    setTask(newTask);
  }

  const removeTask = (index) => {
    const newTask = [...tasks];
    newTask.splice(index, 1);
    setTask(newTask);
  }

  return (
    <div className='app'>
      <div className='container'>
        <h1 className='text-center mb-4'>Todo List</h1>
        <FormTodo addTodo={addTodo} />
        <div>
          {tasks.map((todo, index) => (
            <Card>
              <Card.Body>
                <Todo
                  key={index}
                  index={index}
                  todo={todo}
                  markTodo={completeTask}
                  removeTodo={removeTask}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}