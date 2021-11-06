import React, { useState } from 'react'
import "bootswatch/dist/minty/bootstrap.css";
import { Navbar, Nav, Container, Row, Col, Button, Form, ListGroup } from "react-bootstrap";


function TodoItem({toDoArray, setToDoArray}){
    const deleteToDo = (key) => {
        // delete the todo by returning all items in the list expect the one that was passes
        const newToDoArray = toDoArray.filter(toDo=> {
            return toDo.key !== key;
        });

        // update the list of todos
        setToDoArray(newToDoArray);
    };

    return (
        <div>
            {toDoArray.map((toDo)=>{
                return (
                    <div key={toDo.key}>
                    <ListGroup.Item>
                        <p onDoubleClick={() => deleteToDo(toDo.key)}>{toDo.item}</p>
                    </ListGroup.Item>
                    </div>
                )
            })}
        </div>
    );
};

export default TodoItem;