import "./App.css";
import Notes from "./Container/notes";
import ModalComponent from "./components/modal/Modal"
import FormComponent from "./components/Forms/AddNoteForm"

function App() {
  // return <Notes />;
  return <ModalComponent label="Add Note" form={<FormComponent />}/>
}
export default App;
