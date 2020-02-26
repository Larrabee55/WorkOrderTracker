import React, { Component } from "react";
import Col from 'react-bootstrap/Col';

class Header extends Component {
  render() {
    return (
      <>
        <Col md={2}>
          <p>Logo</p>
        </Col>
        <Col md={4}>
          <h3>Property Name</h3>
          <p>Date</p>
        </Col>
        <Col md={4}>
          <h4>Name of person</h4>
        </Col>
        <Col md={2}>
          <p>Change Property Logout</p>
        </Col>
      </>
    );
  }
}
export default Header;