import React, { useEffect, useState } from "react";
import { Input } from "reactstrap";
import { Inotes } from "../Container/notes";

interface Props {
  setNotes: React.Dispatch<React.SetStateAction<Inotes[]>>;
}

const Search: React.FC<Props> = ({ setNotes }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  let notes = localStorage.getItem("notes");
  let notesObj: Inotes[] = [];
  if (notes) notesObj = JSON.parse(notes);

  useEffect(() => {
    const results = notesObj.filter((note) =>
      note.title.toLowerCase().includes(searchTerm)
    );
    setNotes([...results]);
  }, [searchTerm]);

  return (
    <>
        <Input
          className="w-25"
          type="text"
          placeholder="Search notes"
          name="search"
          value={searchTerm}
          onChange={handleChange}
        />
    </>
  );
};

export default Search;

