import React, { Component } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';


class List extends Component {
  render() {
    return (
      <Accordion>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            Accounts
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <p>Accounts</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            Reports
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <p>Residents</p>
              <p>Traffic</p>
              <p>Transactions</p>
              <p>Unit</p>
              <p>Work Orders</p>
              <p>Misc Property</p>
              <p>Weekly</p>
              <p>Month End</p>
              <p>All Reports</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            Residents
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <p>Add Pending Residents</p>
              <p>Make Canceled Pending</p>
              <p>Resident Data Update</p>
              <p>Resident Listing</p>
              <p>Resident Reports</p>
              <p>Bulk Letters</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="3">
            Traffic
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <p>New Traffic</p>
              <p>Edit/Update Traffic</p>
              <p>Traffic List</p>
              <p>Combine Traffic</p>
              <p>Move Traffic</p>
              <p>Add Roomate to Current</p>
              <p>Traffic Reports</p>
              <p>Screening</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="4">
            Charges
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
              <p>Post Transaction</p>
              <p>Bulk Payments</p>
              <p>Bulk HUD Payments</p>
              <p>Online Payment Disburse</p>
              <p>Import Future Transactions</p>
              <p>Multiple Charges/Payments</p>
              <p>Multi Service Charges</p>
              <p>Apply Late Charges</p>
              <p>NSF</p>
              <p>Move In/Out Prorates</p>
              <p>Charges/Payment Reports</p>
              <p>Post Bank Deposit</p>
              <p>Find Check</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="5">
            Unit
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="5">
            <Card.Body>
              <p>Edit Unit</p>
              <p>Unit Maintenance Reports</p>
              <p>Work Orders By Unit</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="6">
            Work Orders
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="6">
            <Card.Body>
              <p>Work Order Dashboard</p>
              <p>New Work Order</p>
              <p>Edit/Close Work Orders</p>
              <p>Bulk Close Work Orders</p>
              <p>Bulk Print Work Orders</p>
              <p>Work Order Reports</p>
              <p>Work Order Categories</p>
              <p>Work Orders By Unit</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="7">
            System Utilities
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="7">
            <Card.Body>
              <p>System Date</p>
              <p>Accounting Export</p>
              <p>Import Utilities</p>
              <p>Reverse Utilities</p>
              <p>Property Contact</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="8">
            Help
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="8">
            <Card.Body>
              <p>Help Documentation</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }
}
export default List;