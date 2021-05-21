import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { Inotes } from "../Container/notes";

interface IProps {
  note: Inotes;
  editHandler: (id: string) => void;
  deleteHandler: (id: string) => void;
}

const NoteCard: React.FC<IProps> = ({ note, editHandler, deleteHandler }) => {
  return (
    <Card className="my-3">
      <CardBody>
        <CardTitle tag="h3" className='d-inline'>
          {note.title}
        </CardTitle>
        <CardSubtitle className="text-muted d-inline mx-3">
            {note.category.label}
          </CardSubtitle>
        <CardText className='my-2'>{note.description}</CardText>
        <Button
          className="d-inline"
          color="primary"
          onClick={() => editHandler(note.id)}
        >
          Edit Note
        </Button>
        <Button color="danger ms-1" onClick={() => deleteHandler(note.id)}>
          Delete Note
        </Button>
      </CardBody>
    </Card>
  );
};

export default NoteCard;
