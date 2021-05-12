import { Card, CardText, CardBody,CardTitle, CardSubtitle, Button } from 'reactstrap';

export interface INote{
  id:string,
  title:string,
  description:string,
  category:string,
}

interface IProps{
  note:INote,
  editHandler: (id:string) => void,
  deleteHandler: (id:string) => void,
}

const NoteCard:React.FC<IProps> = ({note,editHandler,deleteHandler}) => {
    return (
    <div className="d-flex justify-content-center align-items-center">
      <Card>
        <CardBody>
          <CardTitle tag="h5">{note.title}<CardSubtitle tag="h6" className="text-muted d-inline">{note.category}</CardSubtitle> </CardTitle>          
          <CardText>{note.description}</CardText>
          <Button className="d-inline" color="primary" onClick={() => editHandler(note.id)}>Edit Note</Button>
          <Button color="danger ms-1" onClick={() => deleteHandler(note.id)}>Delete Note</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default NoteCard
