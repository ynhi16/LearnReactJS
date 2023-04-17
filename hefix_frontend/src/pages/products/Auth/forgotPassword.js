
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Form, Card, Button, Container, InputGroup } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "../../../routes";
import { useForm } from 'react-hook-form'
import authService from "../../../services/auth.service";
import { useState } from "react";
import { NotificationManager } from 'react-notifications';

export default () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [errorForgot, setErrorForgot] = useState(null);

  const onSubmit = data => {
    authService.forgotPassword(data)
      .then(response => {
        console.log(response);
        setErrorForgot(null);
        NotificationManager.success('Check your email');

      })
      .catch(error => {
        if (error.response) {
          setErrorForgot(error.response.data);
          console.log(error.response.data);
        }
      })
  };
  return (
    <main>
      <section className="vh-lg-100 mt-4 mt-lg-0 bg-soft d-flex align-items-center">
        <Container>
          <Row className="justify-content-center">
            <p className="text-center">
              <Card.Link as={Link} to={Routes.SigninPage.path} className="text-gray-700">
                <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to sign in
              </Card.Link>
            </p>
            <Col xs={12} className="d-flex align-items-center justify-content-center">
              <div className="signin-inner my-3 my-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <h3>Forgot your password?</h3>
                <p className="mb-4">Don't fret! Just type in your email and we will send you a code to reset your password!</p>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-4">
                    <Form.Label htmlFor="email">Your Email</Form.Label>
                    <InputGroup id="email">
                      <Form.Control required autoFocus type="email" placeholder="john@company.com" {...register("email")} />
                    </InputGroup>
                  </div>
                  {
                    errorForgot && Object.entries(errorForgot).map(([key, value]) => (
                      <p className="text-danger fw-bold" key={key}>{value}</p>
                    ))}
                  <Button variant="primary" type="submit" className="w-100">
                    Recover password
                  </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};
