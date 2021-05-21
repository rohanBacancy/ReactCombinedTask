import { useState } from "react";
import { checkValidation, setItemInStorage } from "../helper";
import axios from "axios";
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
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";

const initailValue = {
  userName: "",
  email: "",
  password: "",
};

const fitContent = {
  width: "fit-content",
};

const Registration = () => {
  const history = useHistory();
  const auth = useAuth();

  const [formData, setFormData] = useState(initailValue);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const onSubmit = (): void => {
    const { userName, email, password } = formData;
    const validationError = checkValidation(errors, {
      userName,
      email,
      password,
    });
    if (Object.keys(validationError).length !== 0) {
      setErrors(validationError);
    } else {
      axios
        .post("https://609cc6bd04bffa001792d455.mockapi.io/users", {
          userName: formData.userName,
          email: formData.email,
          password: formData.password,
        })
        .then((res) => {
          auth.login();
          setItemInStorage("productHuntUserId", res.data.id);
          history.push("/");
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
  const { userName, email, password } = formData;
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
                Registration
              </CardTitle>

              <CustomInput
                type={"text"}
                name="userName"
                value={userName}
                label="First Name"
                placeholder={"Enter First Name"}
                isRequired={true}
                onChange={onChange}
                error={errors.userName}
              />

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
              <Link className="d-block mx-auto" style={fitContent} to="/">
                Already Have An Account ? Login
              </Link>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Registration;
