import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faEnvelope, faUnlockAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup } from '@themesberg/react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useState } from "react";
import { Routes } from "../../../routes";
import BgImage from "../../../assets/img/illustrations/signin.svg";
import { useForm } from 'react-hook-form'
import authService from "../../../services/auth.service";
import { NotificationManager } from 'react-notifications';

function Signin() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [errorSignin, setErrorSignin] = useState(null);
  const history = useHistory();

  const onSubmit = data => {
    authService.signin(data)
      .then(response => {
        console.log(response.data.access_token);
        setErrorSignin(null);
        localStorage.setItem('access_token', response.data.access_token);
        NotificationManager.success('Login success');
        if (localStorage.getItem('access_token') && response.data.user.id === 2) {
          history.push('/customer/overview');
        }
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response.data);
          setErrorSignin(error.response.data);
        }
      })
  };
  return (
    <main>
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          <p className="text-center">
            <Card.Link as={Link} to={Routes.DashboardOverview.path} className="text-gray-700">
              <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to homepage
            </Card.Link>
          </p>
          <Row className="justify-content-center form-bg-image" style={{ backgroundImage: `url(${BgImage})` }}>
            <Col xs={12} className="d-flex align-items-center justify-content-center">
              <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">Sign in to our platform</h3>
                </div>
                <Form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group id="username" className="mb-4">
                    <Form.Label>User Name</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUser} />
                      </InputGroup.Text>
                      <Form.Control autoFocus required type="text" placeholder="Username" name="username" {...register("username")} />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group>
                    <Form.Group id="password" className="mb-4">
                      <Form.Label>Your Password</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <FontAwesomeIcon icon={faUnlockAlt} />
                        </InputGroup.Text>
                        <Form.Control required type="password" placeholder="Password" name="password" {...register("password")} />
                      </InputGroup>
                    </Form.Group>
                    <div className="mb-4 text-end">
                      <Card.Link as={Link} to={Routes.ForgotPasswordPage.path} className="small">Lost password?</Card.Link>
                    </div>
                  </Form.Group>
                  {/* {errorSignup && Object.entries(errorSignup).map(([key, value]) => {
                    return (
                      value.map((i) => (<p key={i}>{i}</p>))
                    )
                  })} */}
                  {
                    errorSignin && Object.entries(errorSignin).map(([key, value]) => (
                      <p className="text-danger fw-bold" key={key}>{value}</p>
                    ))}
                  <Button variant="primary" type="submit" className="w-100">
                    Sign in
                  </Button>
                </Form>
                <div className="d-flex justify-content-center align-items-center mt-4">
                  <span className="fw-normal">
                    Not registered?
                    <Card.Link as={Link} to={Routes.SignupPage.path} className="fw-bold">
                      {` Create account `}
                    </Card.Link>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}
export default Signin;
