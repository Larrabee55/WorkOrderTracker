import React, { Component } from "react";
import { Container } from "./components/Grid";
import List from "./components/List";

// import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <Container>
        {/* nav */}
        <div className="row bg-primary p-3">
          <div className="col-md-12">
            <p>hello</p>
          </div>
        </div>
        <div className="row">
          <List>
          </List>
          <div className="col-md-10">main content</div>
        </div>
      </Container>
    );
  }
}

export default App;
