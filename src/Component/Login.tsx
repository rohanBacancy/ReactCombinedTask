import axios from "axios";
import React, { useState, FC } from "react";
import { useHistory } from "react-router";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";
import CustomInput from "./customInput";
import { checkValidation, setItemInStorage } from "../helper";
import { useAuth } from "../Hooks/useAuth";
import { Link } from "react-router-dom";

const initailValue = {
  email: "",
  password: "",
};

const fitContent = {
  width: "fit-content",
};

const Login: FC = () => {
  const history = useHistory();
  const auth = useAuth();

  const [formData, setFormData] = useState(initailValue);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  interface user {
    id: string;
    userName: string;
    email: string;
    password: string;
  }

  const onSubmit = (): void => {
    const { email, password } = formData;
    const validationError = checkValidation(errors, {
      email,
      password,
    });
    if (Object.keys(validationError).length !== 0) {
      setErrors(validationError);
    } else {
      axios
        .get("https://609cc6bd04bffa001792d455.mockapi.io/users")
        .then((res) => {
          res.data.forEach((user: user) => {
            if (user.email === email && user.password === password) {
              auth.login();
              setItemInStorage("productHuntUserId", user.id);
              history.push("/");
            }
          });
        })
        .catch((err) => alert(err));
    }
  };

  const onChange = (name: string, value: string | boolean): void => {
    setFormData({ ...formData, [name]: value });
  };

  const validationHandler = (name: string, error: string): void => {
    setErrors({
      ...errors,
      [name]: error,
    });
  };

  const { email, password } = formData;
  return (
    <Container className="pt-5">
      <Row className="h-100vh align-items-center">
        <Col xs={12} sm={{ size: 6, offset: 3 }}>
          <Card>
            <CardBody>
              <CardTitle
                tag="h4"
                className="text-primary mx-auto"
                style={fitContent}
              >
                Login
              </CardTitle>
              <CustomInput
                type={"email"}
                name="email"
                value={email}
                label="Email"
                placeholder={"Enter email"}
                isRequired={true}
                reqType={"email"}
                onChange={onChange}
                validationHandler={validationHandler}
                error={errors.email}
              />

              <CustomInput
                type={"password"}
                name="password"
                value={password}
                label="Password"
                placeholder={"Enter password"}
                isRequired={true}
                onChange={onChange}
                error={errors.password}
              />

              <Button color="primary my-3" onClick={onSubmit}>
                Submit
              </Button>
              <Link
                className="d-block mx-auto"
                style={fitContent}
                to="/register"
              >
                Don't have an account ? Register
              </Link>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
