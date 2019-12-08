import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Toast from 'react-bootstrap/Toast'
const Unit = () => (
  <div>
    <Toast>
    <Toast.Header>
      <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
      <strong className="mr-auto">Order1</strong>
      <small>1 hour ago</small>
    </Toast.Header>
    <Toast.Body>Order 1 details</Toast.Body>
  </Toast>
  <Toast>
    <Toast.Header>
      <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
      <strong className="mr-auto">Order2</strong>
      <small>2 seconds ago</small>
    </Toast.Header>
    <Toast.Body>Order2 details</Toast.Body>
  </Toast>
  </div>
);


export default Unit;
