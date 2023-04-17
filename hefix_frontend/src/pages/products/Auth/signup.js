
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faEnvelope, faUnlockAlt, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import { faEvernote, faFacebookF, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "../../../routes";
import BgImage from "../../../assets/img/illustrations/signin.svg";
import { useForm } from 'react-hook-form'
import authService from "../../../services/auth.service";
import { NotificationManager } from 'react-notifications';

export default () => {
  const [errorSignup, setErrorSignup] = useState(null);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {

    authService.register(data)
      .then(response => {
        console.log(response);
        setErrorSignup(null);
        NotificationManager.success('Created User');
      })
      .catch(error => {
        if (error.response) {
          console.log(typeof error.response.data);
          // if (typeof error.response.data === 'string') {

          //   console.log(JSON.parse(error.response.data));
          //   setErrorSignup(JSON.parse(error.response.data));
          //   setTypeData(false);
          // }
          // else if (typeof error.response.data === 'object') {
          //   NotificationManager.error(error.response.data.message);
          //   setErrorSignup(null);
          // }
          setErrorSignup(error.response.data);

        }

        // NotificationManager.info('Info message');
      });
    console.log(data);
  }
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
              <div className="mb-4 mb-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">Create an account</h3>
                </div>
                <Form className="mt-4" onSubmit={handleSubmit(onSubmit)}>

                  <Form.Group id="username" className="mb-4">
                    <Form.Label>User Name</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUser} />
                      </InputGroup.Text>
                      <Form.Control autoFocus required type="text" placeholder="Username" {...register("username")} />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group id="password" className="mb-4">
                    <Form.Label>Your Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Form.Control required type="password" placeholder="Password" {...register("password")} />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group id="confirmPassword" className="mb-4">
                    <Form.Label>Confirm Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Form.Control required type="password" placeholder="Confirm Password" {...register("confirmPassword")} />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group id="name" className="mb-4">
                    <Form.Label>Your Name</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUser} />
                      </InputGroup.Text>
                      <Form.Control required type="text" placeholder="Name" {...register("name")} />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group id="phonenumber" className="mb-4">
                    <Form.Label>Phone Number</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faPhone} />
                      </InputGroup.Text>
                      <Form.Control autoFocus required type="text" placeholder="Phone Number" {...register("phone_number")} />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group id="email" className="mb-4">
                    <Form.Label>Your Email</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </InputGroup.Text>
                      <Form.Control required autoFocus type="email" placeholder="john@company.com" {...register("email")} />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group id="rule" className="mb-4">
                    <Form.Label>Rule</Form.Label>
                    <Form.Select defaultValue="1" {...register("rule")}>
                      <option value="1">Customer</option>
                      <option value="2">Repairman</option>
                    </Form.Select>
                  </Form.Group>
                  <FormCheck type="checkbox" className="d-flex mb-4">
                    <FormCheck.Input required id="terms" className="me-2" />
                    <FormCheck.Label htmlFor="terms">
                      I agree to the <Card.Link>terms and conditions</Card.Link>
                    </FormCheck.Label>
                  </FormCheck>
                  {/* {errorSignup && Object.entries(errorSignup).map(([key, value]) => {
                    return (
                      value.map((i) => (<p className="text-danger fw-bold" key={i}>{i}</p>))
                    )
                  })
                  } */}
                  {
                    errorSignup && Object.entries(errorSignup).map(([key, value]) => (
                      <p className="text-danger fw-bold" key={key}>{value}</p>
                    ))}
                  <Button variant="primary" type="submit" className="w-100" >
                    Sign up
                  </Button>
                </Form>
                <div className="d-flex justify-content-center align-items-center mt-4">
                  <span className="fw-normal">
                    Already have an account?
                    <Card.Link as={Link} to={Routes.SigninPage.path} className="fw-bold">
                      {` Login here `}
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
};
