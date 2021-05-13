import React, { useEffect, useState } from "react";
import { Col, Row } from "reactstrap";
import ListNotes from '../NotebookTask/Components/ListNotes';

export interface Inotes {
  id: string;
  title: string;
  description: string;
  category: string;
}

function Notes() {
  const [notes, setNotes] = useState<Array<Inotes>>([]);
  const [open,setOpen] = useState<boolean>(false);

  const localstorageNoteRemover = (id:string) =>
  {
    //Function to remove note from local storage
  }

  const deleteHandler = (id:string) => {
      setNotes(notes.filter(note => note.id !== id));
  }

  const editHandler = (id:string) => {
      setOpen(true);
      //Jinesh Edit note by id in the form
  }

  useEffect(() => {
    let notes = localStorage.getItem("notes");
    if (notes) setNotes(JSON.parse(notes));
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
        <div>
        <ListNotes notes={notes} editHandler={editHandler} deleteHandler={deleteHandler}/>
        </div>
      </div>
    </>
  );
}

export default Notes;