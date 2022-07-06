import React from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import products from "../products";
import ImageCarousel from "../components/carousel";

const HomeScreen = () => {
  return (
    <>
      <ImageCarousel></ImageCarousel>

      <section>
        <h1 class="heading">
          <span class = "sp">l</span>
          <span class = "sp">a</span>
          <span class = "sp">t</span>
          <span class = "sp">e</span>
          <span class = "sp">s</span>
          <span class = "sp">t</span>
          <span class="space"></span>
          <span class = "sp">p</span>
          <span class = "sp">r</span>
          <span class = "sp">o</span>
          <span class = "sp">d</span>
          <span class = "sp">u</span>
          <span class = "sp">c</span>
          <span class = "sp">t</span>
          <span class = "sp">s</span>
        </h1>
      </section>
      <a href="/addproduct">
      <button class='btn btn-outline-success'>
        Add product
      </button>
      </a>

      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
          
        ))}
        <iframe class = "lp" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.8733594119867!2d80.98655031504344!3d26.843979983157276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd2c724bffd9%3A0xe570d9084c571d5f!2sDevelop+India+Online!5e0!3m2!1sen!2sin!4v1552565558035"></iframe>
      </Row>
    </>
  );
};

export default HomeScreen;
