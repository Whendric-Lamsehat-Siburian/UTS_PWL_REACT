import React, { Component } from 'react'
import {API_URL} from "../utils/constants"
import axios from 'axios';
import { Col,ListGroup } from 'react-bootstrap'; 
import '../index'

export default class CategoryComponent extends Component{

  constructor(props) {
    super(props)

    this.state = {
      categories: []
    }
  }

  componentDidMount(){
    axios
    .get(API_URL+"categories")
    .then(res=>{
      const categories = res.data;
      this.setState({ categories });
    })
    .catch(error =>{
      console.log(error);
    })
  }


  render(){
    const {categories} = this.state
    const {changeCategory,categoryChoosen}= this.props
  return (
    <Col md={2} mt="2">Category Product
    <hr/>
    <ListGroup >
      {categories && categories.map((category) => (
          <ListGroup.Item
          key={category.id} 
          onClick={()=> changeCategory(category.nama)}
          className={ categoryChoosen === category.nama && "category-active" }
          style={{ cursor:'pointer' }}
          >
            <h4>{category.nama}</h4>  
            </ListGroup.Item>
      ))}

    </ListGroup>
    </Col>
  )
  }
}
