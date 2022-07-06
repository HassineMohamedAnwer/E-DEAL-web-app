import Carousel from 'react-bootstrap/Carousel'
import sld_1 from '../screenimgs/ecommerce-product-images.webp'
import sld_2 from '../screenimgs/eprod.jpg'
import sld_3 from '../screenimgs/rar.jpg'

function ImageCarousel() {
  return (
    <Carousel variant="dark">
      <Carousel.Item class='cars'>
       <img
          className="d-block w-100"
          src={sld_1}
          alt="First slide"
  />   
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sld_2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sld_3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImageCarousel;