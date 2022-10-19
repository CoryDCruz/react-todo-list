import { Button } from "react-bootstrap"

function Todo({ todo, index, completeTodo, deleteTodo }) {
  <div className="todo">
    <span style={{ textDecoration: todo.done ? "line-through" : "" }}>{todo.todo}</span>
    <div>
      <Button variant="outline-success" onClick={() => completeTodo(index)}>Complete</Button>
      <Button variant="outline-danger" onClick={() => deleteTodo(index)}>Delete</Button>
    </div>
  </div>
}

export default Todo
