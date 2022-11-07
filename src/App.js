import './App.css';
import Header from './Header';
import TodoForm from './TodoForm'
import Todo from './Todo'
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = text => {
    const todoList = [...todos, { todo: text }]
    setTodos(todoList)
  }

  const completeTodo = index => {
    const todoList = [...todos]
    todoList[index].done = true
    setTodos(todoList)
  }

  const deleteTodo = index => {
    const todoList = [...todos]
    todoList.splice(index, 1)
      setTodos(todoList)
  }
  
  return (
    <div className="App">
      <Header/>
      <TodoForm addTodo={addTodo}/>
      <div>
        {todos.map((todo, index) => (
          <Card bg={'Primary'}>
            <Card.Body>
              <Todo 
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              deleteTodo={deleteTodo}
              />
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default App;
