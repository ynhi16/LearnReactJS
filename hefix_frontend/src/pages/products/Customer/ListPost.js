import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCog, faFile, faSearch, faWrench } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Form, Button, ButtonGroup, Breadcrumb, InputGroup, Dropdown, Card } from '@themesberg/react-bootstrap';
import { Routes } from "../../../routes";
import { Link } from 'react-router-dom';
import authService from "../../../services/auth.service";
import { useState, useEffect } from "react";

export default () => {
    const [data, setData] = useState({});
    authService.showPosts()
        .then(response => {
            //console.log(typeof response.data);
            console.log(response.data);
            console.log(response);
            setData(response.data);
        })
        .catch(error => {
            if (error.response) {
                console.log(error.response.data);
            }
        });
    return (
        <>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-3">
                <div className="d-block mb-2 mb-md-0">
                    {/* <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
                        <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
                        <Breadcrumb.Item>Volt</Breadcrumb.Item>
                        <Breadcrumb.Item active>Transactions</Breadcrumb.Item>
                    </Breadcrumb> */}
                    <h4>Danh sách bài đăng</h4>
                </div>
            </div>
            <Button as={Link} variant="secondary" className="mb-3" to={Routes.AddPost.path}>
                <FontAwesomeIcon icon={faFile} className="me-2" /> Thêm bài đăng
            </Button>
            <div className="table-settings mb-4">
                <Row className="justify-content-between align-items-center">
                    <Col xs={8} md={6} lg={3} xl={4}>
                        <InputGroup>
                            <InputGroup.Text>
                                <FontAwesomeIcon icon={faSearch} />
                            </InputGroup.Text>
                            <Form.Control type="text" placeholder="Search" />
                        </InputGroup>
                    </Col>
                    <Col xs={4} md={2} xl={1} className="ps-md-0 text-end">
                        <Dropdown as={ButtonGroup}>
                            <Dropdown.Toggle split as={Button} variant="link" className="text-dark m-0 p-0">
                                <span className="icon icon-sm icon-gray">
                                    <FontAwesomeIcon icon={faCog} />
                                </span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu-xs dropdown-menu-right">
                                <Dropdown.Item className="fw-bold text-dark">Show</Dropdown.Item>
                                <Dropdown.Item className="d-flex fw-bold">
                                    10 <span className="icon icon-small ms-auto"><FontAwesomeIcon icon={faCheck} /></span>
                                </Dropdown.Item>
                                <Dropdown.Item className="fw-bold">20</Dropdown.Item>
                                <Dropdown.Item className="fw-bold">30</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>
            </div>
            <div>
                {Object.entries(data).map((key, value) => {
                    console.log(Object.entries(data));
                    return (
                        //value.map((i) => (<p className="text-danger fw-bold" key={i}>{i}</p>))
                        'aaa'
                    )
                })
                }

                <Card border="light" className="mb-4" >
                    <Card.Body className="pb-3">
                        <div className="d-flex justify-content-between">
                            <Card.Title>Neil Sims</Card.Title>
                            <Button variant="outline-tertiary" size="sm" className="me-2">
                                <FontAwesomeIcon icon={faWrench} className="me-1" /> Connect
                            </Button>
                        </div>
                        <Card.Subtitle className="fw-normal">Senior Software Engineer</Card.Subtitle>
                        <Card.Text className="text-gray mb-4">New York, USA</Card.Text>
                        <span className="fs-7 text-gray-600 d-block">20/10/2023</span>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
};
