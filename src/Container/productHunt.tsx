import React from "react";
import { Button, Col, Row } from "reactstrap";
import { useAuth } from "../Hooks/useAuth";
import { removeItemFromStorage } from "../helper";

function ProductHunt() {
  const auth = useAuth();
  const logoutHandler = () => {
    removeItemFromStorage("productHuntUserId");
    auth.logout();
  };
  return (
    <>
      <div className="container pt-3">
        <div className="d-flex justify-content-between">
          <h1>Product Hunt</h1>
          <h2>Add a Product</h2>
          <Button color="danger" onClick={logoutHandler}>
            Log Out
          </Button>
        </div>
        <hr />
        <Row>
          <Col>
            <h5>Search</h5>
          </Col>
          <Col sm={2}>
            <h5>Category</h5>
          </Col>
          <Col sm={3}>dropdown</Col>
        </Row>
      </div>
    </>
  );
}

export default ProductHunt;
