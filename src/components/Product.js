import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import {
  Container,
  Button,
  Form,
  NavDropdown,
} from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";

const Product = ({product}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    
    <Card className='my-3 p-3 rounded'>
      <a to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
    </a> <Card.Body>
        <a  href={`/product/${product._id}`}>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </a>

        <Card.Text as='div'>
        <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text class = 'pr' as='h3'>${product.price}</Card.Text>
        
        <a href="/Panier">
      <button class='btn1'>
      <i className="fas fa-shopping-cart add-card"></i>
        Add to Card
        
      </button>
      </a>
        
      </Card.Body>
    </Card>
                  

                  <Offcanvas show={show} onHide={handleClose}>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Sign in</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
      
                  </Offcanvas.Body>
                </Offcanvas>
                </>
    
  )
}


export default Product
