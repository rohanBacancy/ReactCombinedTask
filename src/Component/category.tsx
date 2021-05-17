import React, { useState } from "react";
import SelectField from "./Select/select";
import { Inotes } from "../Container/notes";
import { FunctionComponent } from "react";

export const notesCategory = [
  { value: "all", label: "All" },
  { value: "education", label: "Education" },
  { value: "entertainment", label: "Entertainment" },
];

export interface Icategory {
  value: string;
  label: string;
}

interface Iprops {
  setNotes: React.Dispatch<React.SetStateAction<Inotes[]>>;
}

const Category: FunctionComponent<Iprops> = ({ setNotes }) => {
  const [category, setCategory] = useState<Icategory>(notesCategory[0]);
  const onchangeHandler = (selectedOption: Icategory) => {
    let notes = localStorage.getItem("notes");
    let notesObj : Inotes[] = [];
    if (notes) notesObj = JSON.parse(notes);

    let filteredNotes = notesObj;
    if (selectedOption.value !== "all") {
      filteredNotes = notesObj.filter(
        (note: Inotes) => note.category === selectedOption.value
      );
    }
    setNotes(filteredNotes);
    setCategory(selectedOption);
  };
  return (
    <SelectField
      name="notesCategory"
      id="notesCategory"
      onChangeCategory={onchangeHandler}
      value={category}
      options={notesCategory}
      disabled={false}
      placeholder="Category"
    />
  );
};

export default Category;
