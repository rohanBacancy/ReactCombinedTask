import React, { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";

export interface Inotes {
  id: string;
  title: string;
  description: string;
  category: string;
}

function Notes() {
  const [notes, setNotes] = useState<Array<Inotes>>([]);

  useEffect(() => {
    let notes = localStorage.getItem("notes");
    if (notes !== null) setNotes(JSON.parse(notes));
  }, []);

  return (
    <>
      <div className="container pt-3">
        <div className="d-flex justify-content-between">
          <span>Search</span>
          <h1>Your Notes</h1>
          <div>Add a Note</div>
        </div>
        <hr />
        <Row>
          <Col>
            <h2>Notes List</h2>
          </Col>
          <Col sm={2}>
            <h5>Category</h5>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Notes;
