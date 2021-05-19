import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const editNoteFrom = (props: any) => {
  function onSubmit() {
    let allData = [];
    let data = {
      id: Math.random(),
      title: (document.getElementById("title") as HTMLInputElement).value,
      description: (document.getElementById("description") as HTMLInputElement)
        .value,
      category: (document.getElementById("category") as HTMLInputElement).value,
    };
    let localData = localStorage.getItem("data");
    allData = JSON.parse(localData as string);
    allData[props.id] = data;
  }

  let title: string;
  let description: string;
  let category: string;

  let allData = [];
  let localData = localStorage.getItem("data");
  allData = JSON.parse(localData as string);
  title = props[props.id].title;
  description = props[props.id].description;
  category = props[props.id].category;

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Title</Label>
        <Input
          type="text"
          id="title"
          placeholder="enter title"
          value={title}
        ></Input>
      </FormGroup>
      <br />
      <FormGroup>
        <Label>Description</Label>
        <Input
          type="textarea"
          id="description"
          placeholder="enter description"
          value={description}
        ></Input>
      </FormGroup>
      <br />
      <FormGroup>
        <Label>Category</Label>
        <Input type="select" id="category" value={category}>
          <option value="All">All</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Education">Education</option>
          <option value="Productivity">Productivity</option>
        </Input>
      </FormGroup>
      <br />
      <FormGroup>
        <Button color="primary" type="submit">
          Edit Note
        </Button>
      </FormGroup>
    </Form>
  );
};

export default editNoteFrom;
