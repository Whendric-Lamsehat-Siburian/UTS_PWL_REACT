import React, { Component } from 'react'
import { Col, ListGroup ,Row,Badge} from 'react-bootstrap'
import { numberWithCommas } from '../utils/utils';


export default class ShoppingCart extends Component {
  render() {
    const {carts}=this.props;

    return(
      <Col md={3} mt-5>Your Cart
      <hr/>
      {carts.length !==0 &&(
      <ListGroup variant="flush">
        {carts.map((shopcart)=> 
          <ListGroup.Item>
            <Row>
              <Col xs={2}>
              <h5>{shopcart.product.nama}</h5>
              <p>Rp. {numberWithCommas(shopcart.product.harga)}</p>            
              </Col>
              <Col ><Badge bg="secondary">{shopcart.jumlah}</Badge> </Col>
              <Col>
              <h5><strong>Total Harga</strong></h5>
              <p>Rp. {numberWithCommas(shopcart.total_harga)}</p>
              </Col>
            </Row>
            
            
            </ListGroup.Item>
        )}

      </ListGroup>        

      )}

      </Col>
    )
}
}
