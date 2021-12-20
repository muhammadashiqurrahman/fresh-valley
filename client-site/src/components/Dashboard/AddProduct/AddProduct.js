import React from 'react';
import SideNav from "../SideNav/SideNav";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCloudUploadAlt} from "@fortawesome/free-solid-svg-icons";
import '../ManagedProduct/ManagedProduct.css'

const AddProduct = () => {
    return (
        <Container fluid>
            <Row>
                <SideNav/>
                <Col lg={10} className="admin_details p-0">
                    <Col lg={12} className="admin_t_header px-4"><h2>Add Product</h2></Col>
                    <Col lg={12} className="border-radius-15 bg-white m-4 w-auto p-4">
                        <Form>
                            <Row>
                                <Form.Group className="mb-3 col-lg-6" controlId="formProductName">
                                    <Form.Label>Product Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Name"/>
                                </Form.Group>
                                <Form.Group className="mb-3 col-lg-6" controlId="formWeight">
                                    <Form.Label>Weight</Form.Label>
                                    <Form.Control type="number" placeholder="Enter Weight"/>
                                </Form.Group>
                                <Form.Group className="mb-3 col-lg-6" controlId="formAddPrice">
                                    <Form.Label>Add Price</Form.Label>
                                    <Form.Control type="number" placeholder="Enter Price"/>
                                </Form.Group>
                                <Form.Group className="mb-3 col-lg-6" controlId="formAddProduct">
                                    <Form.Label>Add Product</Form.Label>
                                    <Form.Label className="upload_button"><FontAwesomeIcon icon={faCloudUploadAlt}/>Upload
                                        Product</Form.Label>
                                    <Form.Control type="file" placeholder="Upload Photo" name="Upload Photo"/>
                                </Form.Group>
                                <div className="text-end"><Button variant="" type="submit" className="col-lg-1">Save</Button></div>
                            </Row>
                        </Form>
                    </Col>
                </Col>
            </Row>
        </Container>
    );
};

export default AddProduct;