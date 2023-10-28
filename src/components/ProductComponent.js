import React from 'react'
import { Card,Col} from 'react-bootstrap'
import {numberWithCommas} from '../utils/utils'
const ProductComponent = ({menu, yourCart}) => {
  return (
    <Col md={4} xs={6} className='mb-4'>
     <Card className='shadow' onClick={()=>yourCart(menu)}>
      <Card.Img variant="top" src={"assets/"+menu.category.nama.toLowerCase()+"/"+menu.gambar} />
      <Card.Body>
        <Card.Title>{menu.nama}</Card.Title>
        <Card.Text>
          Rp. {numberWithCommas(menu.harga)}
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
  )
}

export default ProductComponent