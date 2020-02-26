import React, { Component } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class NewWorkOrder extends Component {
  render() {
    return (
      <>
        <Row>
          <Col md={12}>
            <h4>New Work Order</h4>
            <br />
          </Col>
        </Row>

        <Form>

          <Form.Row>
            <Col md={2}>
              <p>Unit ID:</p>
            </Col>
            <Col md={1}>
              <Form.Group controlId="">
                <Form.Control as="select">
                  <option>1</option>
                  <option>1</option>
                  <option>1</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Form.Row>

          <Form.Row>
            <Col md={2}>
              <p>Bulding Number:</p>
            </Col>
            <Col md={1}>
              <Form.Group controlId="">
                <Form.Control size="sm" type="text" />
              </Form.Group>
            </Col>
          </Form.Row>

          <Form.Row>
            <Col md={2}>
              <p>Date Submitted:</p>
            </Col>
            <Col md={10}>
              <p>Current Date and Time</p>
            </Col>
          </Form.Row>

          <Form.Row>
            <Col md={2}>
              <p>Reported By:</p>
            </Col>
            <Col md={4}>
              <Form.Group controlId="">

                <Form.Control size="sm" type="text" />
              </Form.Group>
            </Col>
          </Form.Row>

          <Form.Row>
            <Col md={2}>
              <p>ContactPhone:</p>
            </Col>
            <Col md={3}>
              <Form.Group controlId="">
                <Form.Control size="sm" type="text" />
              </Form.Group>
            </Col>
          </Form.Row>

          <Form.Row>
            <Col md={2}>
              <p>Premission To Enter By:</p>
            </Col>
            <Col md={3}>
              <Form.Group controlId="">
                <Form.Control size="sm" type="text" />
              </Form.Group>
            </Col>
          </Form.Row>

          <Form.Row>
            <Col md={2}>
              <p>Premission To Enter Date:</p>
            </Col>
            <Col md={3}>
              <Form.Group controlId="">
                <p>Date Pick box</p>
              </Form.Group>
            </Col>
          </Form.Row>

          <Form.Row>
            <Col md={2}>
              <p>Work Order Category</p>
            </Col>
            <Col md={5}>
              <Form.Group controlId="">
                <Form.Control as="select">
                  <option value="alarmsytem">Alarm Sytem</option>
                  <option value="Blinds">Blinds</option>
                  <option value="buildingexterior">Building Exterior</option>
                  <option value="Doors">Doors</option>
                  <option value="Flood">Flood</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Form.Row>

          <Form.Row>
            <Col md={2}>
              <p>Describe the Problem</p>
            </Col>
            <Col md={10}>
              <Form.Control size="sm" as="textarea" rows="3" />
              <br />
            </Col>
          </Form.Row>

          <Form.Row>
            <Col md={2}>
              <p>Work Order Assigned To:</p>
            </Col>
            <Col md={2}>
              <Form.Group controlId="">
                <Form.Control size="sm" as="select">
                  <option>1</option>
                  <option>1</option>
                  <option>1</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Form.Row>

          <Col md={12}>
            <Button variant="primary">Submit</Button>
          </Col>
        </Form>
        <br />
      </>
    );
  }
}
export default NewWorkOrder;