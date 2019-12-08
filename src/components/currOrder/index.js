import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
import Unit from '../unit'


const currOrder = () => (
    <div>
<Card border="secondary" style={{ width: '18rem' }}>
    <Card.Header>Current orders</Card.Header>
    <Card.Body>
       <Unit />
    </Card.Body>
  </Card>
  </div>
  );

export default currOrder;