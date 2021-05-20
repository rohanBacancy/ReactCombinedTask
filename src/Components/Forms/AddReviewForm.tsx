import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import axios from "axios";

interface Props {
  userId: string;
  productId: string;
}

interface productData {
  userID: string | null;
  productTitle: string | null;
  categoryID: string | null;
  description: string | null;
  reviews: Array<string>;
}

const AddReview: React.FC<Props> = (props: any) => {
  function onSubmit(event: any): void {
    let productData: productData;
    let reviews: Array<string> = [];
    let newReview: string = (
      document.getElementById("review") as HTMLInputElement
    ).value;
    axios
      .get(
        "https://609cc6bd04bffa001792d455.mockapi.io/products/" +
          props.productId
      )
      .then((response) => {
        reviews = [response.data.reviews, newReview];
        productData = {
          userID: props.userId,
          productTitle: response.data.title,
          categoryID: response.data.category,
          description: response.data.description,
          reviews: reviews,
        };
        axios.put(
          "https://609cc6bd04bffa001792d455.mockapi.io/products" +
            props.productId,
          productData
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label>Review</Label>
        <Input type="textarea" id="review" placeholder="enter review" />
      </FormGroup>
      <br />
      <FormGroup>
        <Button type="submit" color="danger">
          Add Review
        </Button>
      </FormGroup>
    </Form>
  );
};

export default AddReview;
