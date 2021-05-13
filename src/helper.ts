import axios from 'axios';
const productURL:string = process.env.REACT_APP_PRODUCT_URI || ""

interface IProduct{
    id:string,
    userID:string,
    categoryID:string,
    productTitle:string,
    reviews:IReview[],
    description:string,
}

interface IReview{
    userID:string,
    date:string,
    review:string,
}

export const addProduct = (product:IProduct) => {
    axios.post(productURL,product)
    .then(res => alert("Product added successfully"))
    .catch(err => alert("There was an error while adding the product"))
}

