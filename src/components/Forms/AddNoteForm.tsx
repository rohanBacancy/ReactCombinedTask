import { FunctionComponent, useEffect, useState } from "react";
import { Label, Button } from "reactstrap";
import { Inotes } from "../../Container/notes";
import SelectField from "../Select/select";
import { Icategory } from "../category";
import CustomInput from "../customInput";
import { checkValidation } from "../../helper";

interface Iprops {
  setNotes: React.Dispatch<React.SetStateAction<Inotes[]>>;
  toggle: () => void;
  note: Inotes | undefined;
}

const notesCategory = [
  { value: "education", label: "Education" },
  { value: "entertainment", label: "Entertainment" },
  { value: "productivity", label: "Productivity" },
];

interface IinitialFormFields {
  title: string;
  description: string;
  category: Icategory;
}

const initialFormFields = {
  title: "",
  description: "",
  category: { value: "education", label: "Education" },
};

const AddNoteForm: FunctionComponent<Iprops> = ({ setNotes, toggle, note }) => {
  const [formData, setFormData] =
    useState<IinitialFormFields>(initialFormFields);

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (note !== undefined) {
      setFormData({
        title: note.title,
        description: note.description,
        category: note.category,
      });
    }
  }, []);

  const onChangeHandler = (name: string, value: string | boolean): void => {
    setFormData({ ...formData, [name]: value });
  };

  const validationHandler = (name: string, error: string): void => {
    setErrors({
      ...errors,
      [name]: error,
    });
  };

  const onSubmit = (): void => {
    const { title, description } = formData;
    const validationError = checkValidation(errors, {
      title,
      description,
    });
    if (Object.keys(validationError).length !== 0) {
      setErrors(validationError);
    } else {
      if (note !== undefined) {
        let data = {
          id: note.id,
          title: formData.title,
          description: formData.description,
          category: formData.category,
        };
        let allData: Inotes[];

        let localData = localStorage.getItem("notes");
        let localDataObj = JSON.parse(localData as string);
        let index = localDataObj.findIndex((el: Inotes) => el.id === note.id);
        localDataObj[index] = data;
        localStorage.setItem("notes", JSON.stringify(localDataObj));
        setNotes(localDataObj);
        toggle();
      } else {
        let data = {
          id: Math.floor(Math.random() * 100).toString(),
          title: formData.title,
          description: formData.description,
          category: formData.category,
        };
        let allData: Inotes[];
        if (localStorage.getItem("notes")) {
          let localData = localStorage.getItem("notes");
          allData = [...JSON.parse(localData as string), data];
        } else {
          allData = [data];
        }
        localStorage.setItem("notes", JSON.stringify(allData));
        setNotes(allData);
        toggle();
      }
    }
  };

  return (
    <>
      <CustomInput
        type={"text"}
        name="title"
        value={formData.title}
        label="Title"
        placeholder={"Enter title"}
        isRequired={true}
        onChange={onChangeHandler}
        validationHandler={validationHandler}
        error={errors.title}
      />
      <CustomInput
        type={"textarea"}
        name="description"
        value={formData.description}
        label="Description"
        placeholder={"Enter Description"}
        isRequired={true}
        onChange={onChangeHandler}
        validationHandler={validationHandler}
        error={errors.description}
      />
      <Label className="my-2">Category</Label>
      <SelectField
        name="category"
        id="category"
        onChangeCategory={(selectedField: Icategory) =>
          setFormData({ ...formData, category: selectedField })
        }
        value={formData.category}
        options={notesCategory}
        disabled={false}
      />
      <Button color="primary my-3" onClick={onSubmit}>
        {note ? "Save Changes" : "Add Note"}
      </Button>
    </>
  );
};

export default AddNoteForm;
