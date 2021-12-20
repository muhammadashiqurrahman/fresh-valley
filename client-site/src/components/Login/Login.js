import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import Navber from "../Navber/Navber";
import "./Login.css"
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGoogle} from "@fortawesome/free-brands-svg-icons";

const Login = () => {
    return (
    <>
    <Navber></Navber>
       <Container>
           <Row>
               <Col lg={3}></Col>
               <Col lg={6}>
                       <Form>
                           <Form.Group className="mb-3" controlId="formBasicEmail">
                               <Form.Control className={"input"} type="email" placeholder="Enter email" />
                           </Form.Group>
                           <Form.Group className="mb-3" controlId="formBasicPassword">
                               <Form.Control className={"input"} type="password" placeholder="Password" />
                           </Form.Group>
                           <Container className={"p-0"}>
                               <Row>
                                   <Col lg={6}>
                                       <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                       <Form.Check inline type="checkbox" label="Remember Me" />
                                   </Form.Group>
                                   </Col>
                                   <Col lg={6} className={"text-end"}>
                                       <Link style={{color:"#71BA58"}} className to={"/forget-password"}> <u>Forget Password</u> </Link>
                                   </Col>
                               </Row>
                           </Container>
                           <Button variant="primary" type="submit">
                               Login
                           </Button>
                           <div style={{textAlign: "center"}}>
                               <span>Don't have an account?</span><Link to={"/create-account"}> Create an Account</Link>
                           </div>
                       </Form>

                   <div className={"signIn"}>
                       <button className={"btn btn-primary"}><FontAwesomeIcon className={"text-start"} icon={faFacebook}/> Continue with Facebook</button>
                       <br/>
                       <Button className={"gbtn"} variant={"primary"}><FontAwesomeIcon icon={faGoogle}/> Continue with Google</Button>
                   </div>

               </Col>
               <Col lg={3}></Col>
           </Row>
       </Container>
    </>
    );
};

export default Login;