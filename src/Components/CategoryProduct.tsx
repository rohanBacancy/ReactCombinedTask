import React, { useEffect, useState } from "react";
import SelectField from "./Select/select";
import { IProduct } from "../helper";
import axios from "axios";

const pCategories = [
  { id: "0", value: "All", label: "All" },
  { id: "1", value: "electronics", label: "Electronics" },
  { id: "2", value: "clothing", label: "Clothing" },
  { id: "3", value: "sports", label: "Sports" },
  { id: "4", value: "utility", label: "Utility" },
];
interface Icategory {
  id: string;
  value: string;
  label: string;
}
interface Props {
  setProductData: React.Dispatch<React.SetStateAction<IProduct[]>>;
}

const CategoryProduct: React.FC<Props> = ({ setProductData }) => {
  const [category, setCategory] = useState<Icategory>(pCategories[0]);
  let productList: IProduct[] = [];
  const onchangeHandler = (selectedOption: Icategory) => {
    let filteredProduct = productList;
    console.log("productList", productList);
    console.log("sO", selectedOption);
    if (selectedOption.value !== "All") {
      filteredProduct = productList.filter(
        (product: IProduct) => product.categoryID === selectedOption.id
      );
    }
    console.log("filterP", filteredProduct);
    setProductData(filteredProduct);
    setCategory(selectedOption);
  };
  useEffect(() => {
    axios
      .get("https://609cc6bd04bffa001792d455.mockapi.io/products")
      .then((res) => {
        productList = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  }, [onchangeHandler]);

  return (
    <div>
      <SelectField
        name="notesCategory"
        id="notesCategory"
        onChangeCategory={onchangeHandler}
        value={category}
        options={pCategories}
        disabled={false}
        placeholder="Category"
      />
    </div>
  );
};

export default CategoryProduct;
