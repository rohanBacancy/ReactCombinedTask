import React from 'react'
import { Col, Row } from "reactstrap";

function productHunt() {
    return (
        <>
      <div className="container pt-3" style={{backgroundColor:'#f2f5f9'}}>
        <div className="d-flex justify-content-between">
          <h1>Product Hunt</h1>
          <h2>Add a Product</h2>
        </div>
        <hr />
        <Row>
          <Col>
            <h5>Search</h5>
          </Col>
          <Col sm={2}>
            <h5>Category</h5>
          </Col>
          <Col sm={3}>
            dropdown
          </Col>
        </Row>
        {/* <div> */}
        {/* <ListNotes notes={notes} editHandler={editHandler} deleteHandler={deleteHandler}/> */}
        {/* </div> */}
      </div>
    </>
    )
}

export default productHunt
