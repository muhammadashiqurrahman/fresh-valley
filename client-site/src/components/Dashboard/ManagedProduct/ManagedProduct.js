import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import './ManagedProduct.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPen, faTrash} from "@fortawesome/free-solid-svg-icons";
import SideNav from "../SideNav/SideNav";

const ManagedProduct = () => {
    return (
        <Container fluid>
            <Row>
                <SideNav/>
                <Col lg={10} className="admin_details p-0">
                    <Col lg={12} className="admin_t_header px-4"><h2>Managed Product</h2></Col>
                    <Col lg={12} className="border-radius-15 bg-white m-4 w-auto p-4">
                        <table className="product_list">
                            <tr>
                                <td>
                                    <table className="product_list_header mb-3">
                                        <tr>
                                            <th className="product_header">Product name</th>
                                            <th className="product_header">Weight</th>
                                            <th className="product_header">Price</th>
                                            <th className="product_header">Action</th>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="product_list_info_area">
                                        <table className="product_list_info">
                                            <tr>
                                                <td>Moushum Bay Leaves</td>
                                                <td>200gm</td>
                                                <td>$234</td>
                                                <td>
                                                    <Button className="edit"><FontAwesomeIcon icon={faPen}/></Button>
                                                    <Button className="delete"><FontAwesomeIcon icon={faTrash}/></Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Moushum Bay Leaves</td>
                                                <td>200gm</td>
                                                <td>$234</td>
                                                <td>
                                                    <Button className="edit"><FontAwesomeIcon icon={faPen}/></Button>
                                                    <Button className="delete"><FontAwesomeIcon icon={faTrash}/></Button>
                                                </td>
                                            </tr>

                                        </table>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </Col>
                </Col>
            </Row>
        </Container>
    );
};

export default ManagedProduct;