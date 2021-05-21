import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "reactstrap";
import Category from "../Components/category";
import ListNotes from "../Components/ListNotes";
import Search from "../Components/Search";
import AddNote from "../Components/Forms/AddNoteForm";
import Modal from "../Components/modal/Modal";
import { setItemInStorage } from "../helper";
import { Icategory } from "../Components/category";

export interface Inotes {
  id: string;
  title: string;
  description: string;
  category: Icategory;
}

function Notes() {
  const [notes, setNotes] = useState<Array<Inotes>>([]);
  const [open, setOpen] = useState(false);
  const [note, setNote] = useState<Inotes | undefined>();

  const toggle = (): void => {
    setOpen(!open);
    setNote(undefined);
  };


  const deleteHandler = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
    setItemInStorage(
      "notes",
      JSON.stringify(notes.filter((note) => note.id !== id))
    );
  };


  const fetchData = () => {
    let notes = localStorage.getItem("notes");
    if (notes) setNotes(JSON.parse(notes));
  }

  const editHandler = (id: string) => {
    setOpen(true);
    let note = notes.find((note) => note.id === id);
    setNote(note);
  };


  useEffect(() => {
    let notes = localStorage.getItem("notes");
    if (notes) setNotes(JSON.parse(notes));
  }, []);

  return (
    <>
      <Modal
        modal={open}
        toggle={toggle}
        buttonTitle="Add Note"
        label="Add a Note"
        form={<AddNote note={note} setNotes={setNotes} toggle={toggle} />}
      />
      <div className="container pt-3" style={{ backgroundColor: "#f2f5f9" }}>
        <div className="d-flex justify-content-between">
          <h1>Your Notes</h1>
          <div>
            <Button color="primary" onClick={toggle}>
              Add Note
            </Button>
          </div>
        </div>
        <hr />
        <Row>
          <Col>
            <Search setNotes={setNotes} />
          </Col>
          <Col sm={3}>
            <Category setNotes={setNotes} />
          </Col>
        </Row>
        <div>
          <ListNotes
            notes={notes}
            editHandler={editHandler}
            deleteHandler={deleteHandler}
          />
        </div>
      </div>
    </>
  );
}

export default Notes;
