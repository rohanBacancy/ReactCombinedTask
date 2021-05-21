import React from "react";
import { FunctionComponent } from "react";
import { Col, Row } from "reactstrap";
import Select from "react-select";
import { Icategory } from "../category";

interface Iprops {

  disabled: boolean;
  id: string;
  name: string;
  onChangeCategory: Function;
  options: Icategory[];
  placeholder?: string;
  value: Icategory;
}

const SelectField: FunctionComponent<Iprops> = ({
  disabled,
  id,
  name,
  onChangeCategory,
  options,
  placeholder,
  value,
}) => {
  return (
    <Row>
      <Col>
        <Select
          id={id}
          value={value}
          onChange={(selectedOption) => onChangeCategory(selectedOption)}
          name={name}
          options={options}
          isDisabled={disabled}
          placeholder={placeholder}
        />
      </Col>
    </Row>
  );
};

export default SelectField;
