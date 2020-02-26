import React, { Component } from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

class Nav extends Component {
  render() {
    return (
      <>
        <Col md={8}>Button Links</Col>
        <Col md={4}>
          <Form>
            <Form.Control size="sm" type="text" placeholder="search" />
          </Form>
        </Col>
      </>
    );
  }
}
export default Nav;