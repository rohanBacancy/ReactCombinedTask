import { useState } from "react";
import ListNotes from "./NotebookTask/Components/ListNotes";
import { INote } from "./NotebookTask/Components/NoteCard";

function App() {

  const [notes,setNotes] = useState<INote[]>([]);
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

  return (
    <div>
      <ListNotes notes={notes} editHandler={editHandler} deleteHandler={deleteHandler}/>
    </div>
  );
}

export default App;
