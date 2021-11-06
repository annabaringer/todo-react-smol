import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from './TodoList';

import "bootswatch/dist/minty/bootstrap.css";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";

  
var destination = document.querySelector("#list-container");
  
ReactDOM.render(

    <div>
      <TodoList />
    </div>,
    destination
);