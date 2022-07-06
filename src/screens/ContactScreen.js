import React from 'react'
import { Form, Button } from 'react-bootstrap'
import contimg from '../screenimgs/Contact_us-1.jpg'

const ContactScreen = () => {
  return (
    <>
    <h1>Contact Us</h1>
    {<img class = "contimg" src={contimg}></img>}
      <div class="lg-6">
        <div class="lg-6">
        Enter yor name
          <input class="form-control" type="text" placeholder="Name"/>
        </div>
      </div>
      <div class="lg-6">
        <div class="lg-6">
        Enter yor location
          <input class="form-control" type="text" placeholder="Location"/>
        </div>
      </div>
      <Form>
        <Form.Group className="lg-6 lg-r" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
          
          </Form.Text>
        </Form.Group>
        

        <div class="lg-6 lg-r">
          Enter your number
          <input class="form-control" type="number" placeholder="phone"/>
        </div>
        
      <div class="lg-60">
        <div class="lg-60">
          write you message
          <textarea class="form-control f-c-m" type="text" placeholder="message"/>
        </div>
      </div>
      <Button variant="primary" type="submit">
        Sent message
      </Button>
    </Form>
    </>
  )
}
export default ContactScreen;