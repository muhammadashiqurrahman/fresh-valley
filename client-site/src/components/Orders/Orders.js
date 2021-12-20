import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Row, Table} from "react-bootstrap";
import Navber from "../Navber/Navber";
import OrderProduct from "../OrderProduct/OrderProduct";

const Orders = () => {
    const ordBtn={
        marginTop: '5px',
    }
    const cartProduct = JSON.parse(window.localStorage.getItem("cart"))
    const [orders, setOrders] = useState(cartProduct)
    return (
        <>
            <Navber/>
            <Container>
                <Row>
                    <Col log={12}>
                        <p><b>Your Total Orders {orders.length}</b></p>
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    orders.map(ord => <OrderProduct ord={ord}></OrderProduct>)
                                }
                            </tbody>
                                <Button style={ordBtn}>Submit</Button>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>

    );
};

export default Orders;