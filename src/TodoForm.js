import React, { useState } from 'react';
import { Form } from "react-bootstrap"
import { Button } from "react-bootstrap"


function TodoForm({ addTodo }) {
  const [value, setValue] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    if(!value) return
    addTodo(value)
    setValue("")
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Add Todo</Form.Label>
        <Form.Control type ="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Add Todo"></Form.Control>
      </Form.Group>
      <Button variant="primary-mb-3" type="submit">Submit</Button>
    </Form>
  )

}

export default TodoForm
