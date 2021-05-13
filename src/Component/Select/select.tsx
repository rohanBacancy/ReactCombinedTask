import React from "react";
import { FunctionComponent } from "react";
import { Col, Row } from "reactstrap";
import Select from "react-select";
import { Icategory } from "../category";

interface Iprops {
  name: string;
  id: string;
  onChangeCategory: Function;
  value: Icategory;
  options: Icategory[];
  label: string;
  disabled: boolean;
  placeholder: string;
}

const SelectField: FunctionComponent<Iprops> = ({
  name,
  id,
  onChangeCategory,
  value,
  options,
  disabled,
  placeholder,
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
