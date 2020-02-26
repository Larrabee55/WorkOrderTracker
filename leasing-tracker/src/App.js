import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import List from "./components/List";
import Header from "./components/Header";
import Nav from "./components/Nav";
import NewWorkOrder from "./components/Main/Workorders/NewWorkOrder";

// import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <Container>
        <Row>
          <Header />
        </Row>

        <Row id="nav" >
          <Nav />
        </Row>
        {/* Main Content & List */}
        <Row>
          <Col md={2}>
            <List>
            </List>
          </Col>
          <Col md={10}>
            <NewWorkOrder />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
