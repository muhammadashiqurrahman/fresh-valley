import React, {useEffect, useState} from 'react';
import ProductDetails from "../ProductDetails/ProductDetails";
import {Container, Row} from "react-bootstrap";

const Product = () => {
    const [product, setProduct] = useState([])
    const [cart, setCart] = useState([])
    const [firstCartUpdate, SetFirstCartUpdate] = useState(false)

    useEffect(()=>{
        fetch('http://localhost:8080/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    useEffect(() => {
        if (firstCartUpdate){
            localStorage.setItem("cart", JSON.stringify(cart));
        }
        else {
            if(!cart.length){
                let local_cart = JSON.parse(localStorage.getItem('cart'))
                if(local_cart && local_cart.length){
                    setCart(local_cart);
                }
            }
            SetFirstCartUpdate(true)
        }
    }, [cart,firstCartUpdate])


    // handle add product
    const handleAddProduct = (products) =>{
        console.log("product added", products);
        setCart(prevState =>[...prevState, products]);
    }

    return (
        <Container>
            <Row>
                {
                    product.map(pd => <ProductDetails pd={pd} key={pd._id} handleAddProduct={handleAddProduct}></ProductDetails>)
                }
            </Row>
        </Container>
    );
}

export default Product;