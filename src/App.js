import './App.css';
import Header from './Header';
import TodoForm from './TodoForm'
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

function App() {
  const [todos, setTodos] = React.useState(
    [
      {
        todo: "Foo",
        done: false,
      }
    ])

    const addTodo = text => {
      const todoList = [...todos, { text }]
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
        {todos.map((todo, index) => {
          return(
            <Card>
            <Card.Body>

            </Card.Body>
          </Card>
          )
          
        })}
      </div>
    </div>
  );
}

export default App;
