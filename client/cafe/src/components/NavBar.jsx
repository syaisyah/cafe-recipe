import React from "react";
import { Col, Button } from "react-bootstrap";

export default function NavBar() {
  return (
    <>
      <Col md={2} className="bg-light py-5" style={{ height: "100vh"}}>
        <div className="d-flex flex-column justify-content-space-between align-items-center my-5">
          <Button variant="info" className="w-50 mb-2">Add Menu</Button>
          <Button variant="warning" className="w-50 mb-2">Add Ingredients</Button>
        </div>
      </Col>
    </>
  );
}
