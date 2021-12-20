import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import SideNav from "../SideNav/SideNav";

const Dashboard = () => {
    const style ={
        margin: '300px',
        fontSize: '45px',
        fontFamily:'Roboto',
        textTransform: 'uppercase'
    }
    return (
        <Container fluid>
            <Row>
                <SideNav/>
                <Col lg={10}>
                    <h5 style={style}>WellCome to the dashboard</h5>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;