import React from 'react';
import {Button, Card, Col, Row} from "react-bootstrap";
import './ProductDetails.css'
const ProductDetails = (props) => {
        const {productName, price, img} = props.pd
    return (
            <Col lg={4}>
                <Card className="mx-auto mb-4 card-m">
                    <Card.Img className={"m-auto card-image"} variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className="card-t" style={{minHeight: '45px'}}>{productName}</Card.Title>
                        <Row>
                            <Col lg={6}><Card.Text className="card-p">${price}</Card.Text></Col>
                            <Col lg={6} className="text-end"><Button cart={props.cart}
                                onClick={()=>props.handleAddProduct(props.pd)} className="card-sz" variant="primary">Buy Now</Button></Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>
    );
}

export default ProductDetails;