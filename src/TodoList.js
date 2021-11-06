import React, { useState } from 'react'
import TodoItem from './TodoItem';
import "bootswatch/dist/minty/bootstrap.css";
import { Navbar, Nav, Container, Row, Col, Button, Form, ListGroup, Badge } from "react-bootstrap";

export default function TodoList() {
    // state variables
    //const [toDoCount, setCount] = useState(0);
    const [toDoArray, setToDoArray] = useState([]);
    const [userInput, setUserInput] = useState('');

    const length = toDoArray.length;

    // functions
    const onChangeFunction= e => {
      // set the current value
      setUserInput(e.target.value);
    };

    const addToDo = e => {
      // prevent form from submitting
      e.preventDefault();

      // update the array of todos
      setToDoArray([...toDoArray, {item: userInput, key: Date.now()}]);

      // clear the current input 
      setUserInput('');
    }

  return (
    <div className='todoListMain'>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>Simple To-Do App</Navbar.Brand>
        </Container>
      </Navbar>


      <div className='header'>
        <form> 
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control placeholder='Enter new task' value={userInput} onChange={onChangeFunction}/>
            <br />
            <Button variant="primary" onClick={addToDo}>Add</Button>{' '}
          </Form.Group>
        </form>
      </div>

      <div>
          <h6>You have <Badge bg="secondary">{length}</Badge> thing(s) to do! </h6>
      </div>

      <div>
        <ListGroup variant="flush">
          <TodoItem toDoArray={toDoArray} setToDoArray={setToDoArray}/>
        </ListGroup>
      </div>





    </div>
  )
}