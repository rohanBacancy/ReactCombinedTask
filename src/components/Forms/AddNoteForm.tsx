import {Form, FormGroup, Label, Input,  Button} from 'reactstrap'

const AddNoteForm = () => {

    function onSubmit (): void {
        let allData = [];
        let data = {
            id: Math.random(),
            title: (document.getElementById("title") as HTMLInputElement).value,
            description: (document.getElementById("description") as HTMLInputElement).value,
            category: (document.getElementById("category") as HTMLInputElement).value
        }
        if(localStorage.getItem("data")){
            let localData = localStorage.getItem("data");
            localData = JSON.parse(localData as string);
            allData = [localData, data];
            localStorage.setItem("data", JSON.stringify(allData));
        }
        else{
            allData = [data];
            localStorage.setItem("data", JSON.stringify(allData));
        }
        
    }
    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>Title</Label>
                <Input type="text" id="title" placeholder="enter title"></Input>
            </FormGroup>
            <br />
            <FormGroup>
                <Label>Description</Label>
                <Input type="textarea" id="description" placeholder="enter description"></Input>
            </FormGroup>
            <br />
            <FormGroup>
                <Label>Category</Label>
                <Input type="select" id="category" defaultValue="All">
                    <option value="All">All</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Education">Education</option>
                    <option value="Productivity">Productivity</option>
                </Input>
            </FormGroup>
            <br />
            <FormGroup>
                <Button color="primary" type="submit">Add Note</Button>
            </FormGroup>
        </Form>
    )
}

export default AddNoteForm;
