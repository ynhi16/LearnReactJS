
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faEnvelope, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Form, Card, Button, Container, InputGroup } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import { Routes } from "../../../routes";
import { useForm } from "react-hook-form";
import authService from "../../../services/auth.service";
import { useParams } from "react-router-dom";
import { NotificationManager } from 'react-notifications';

export default () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { token } = useParams();
    const onSubmit = data => {
        data.token = token;
        //console.log(data.token);
        authService.resetPassword(data)
            .then(response => {
                console.log(response);
                NotificationManager.success('Change password success');

            })
            .catch(error => {
                if (error.response) {
                    console.log(error.response.data);
                }
            });
    };
    return (
        <main>
            <section className="bg-soft d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
                <Container>
                    <Row className="justify-content-center">
                        <p className="text-center">
                            <Card.Link as={Link} to={Routes.SigninPage.path} className="text-gray-700">
                                <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to sign in
                            </Card.Link>
                        </p>
                        <Col xs={12} className="d-flex align-items-center justify-content-center">
                            <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                                <h3 className="mb-4">Reset password</h3>
                                <Form onSubmit={handleSubmit(onSubmit)} >
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
                                    <Button variant="primary" type="submit" className="w-100">
                                        Reset password
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
