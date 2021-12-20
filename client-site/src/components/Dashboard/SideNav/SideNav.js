import React from 'react';
import {Col} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCog, faGlobe, faHome, faPlus} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import '../ManagedProduct/ManagedProduct.css'
const SideNav = () => {
    return (
        <Col lg={2} className="admin_navbar p-0">
            <Col lg={12}><h1>Fresh Valley</h1></Col>
            <ul className="list-unstyled">
                <Link to={"/dashboard"}><li><FontAwesomeIcon icon={faHome}/>Home</li></Link>
                <Link to={"/dashboard/manageProduct"}><li><FontAwesomeIcon icon={faCog}/>Manage Product</li></Link>
                <Link to={"/dashboard/addProduct"}><li><FontAwesomeIcon icon={faPlus}/>Add Product</li></Link>
                <Link target={"_blank"} to={"/"}><li><FontAwesomeIcon icon={faGlobe}/>Main Website</li></Link>
            </ul>
        </Col>
    );
};

export default SideNav;