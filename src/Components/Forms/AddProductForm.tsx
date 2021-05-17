import {Form, FormGroup, Label, Input,  Button} from 'reactstrap'
import axios from 'axios'

const AddProduct = () => {

    function onSubmit (event: any): void {
        event.preventDefault();
        let userId = localStorage.getItem("ProductHuntUserId");
        let productData = {
            userID: userId,
            productTitle: (document.getElementById("title") as HTMLInputElement).value,
            categoryID: (document.getElementById("category") as HTMLInputElement).value,
            description: (document.getElementById("description") as HTMLInputElement).value,
            reviews: []
        }
        axios.post("https://609cc6bd04bffa001792d455.mockapi.io/products", 
        productData
         ).then((response) => {
            console.log(response)
         } )
         .catch((error) => {
            console.log(error)
         })
        
    }

    return (
        <Form onSubmit={onSubmit} >
            <FormGroup>
                <Label>
                    Title
                </Label>
                <Input type="text" id="title" placeholder="enter title" />
            </FormGroup>
            <br />
            <FormGroup>
                <Label>
                    Category
                </Label>
                <Input type="select" id="category" defaultValue="All" >
                <option value="Category 1" >Category 1</option>
                <option value="Category 2" >Category 2</option>
                <option value="Category 3" >Category 3</option>
                <option value="Category 4" >Category 4</option>
                <option value="Category 5" >Category 5</option>
                </Input>
            </FormGroup>
            <br />
            <FormGroup>
                <Label>
                    Description
                </Label>
                <Input type="textarea" id="description" placeholder="enter description" />
            </FormGroup>
            <br />
            <FormGroup>
                <Button color="primary" type="submit">Add Product</Button>
            </FormGroup>
        </Form>
    )
}

export default AddProduct;