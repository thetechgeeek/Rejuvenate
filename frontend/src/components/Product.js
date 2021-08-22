//script for rendering the Product component
//takes the actual product as json obj and renders a react component

import React from 'react';
//using react router for enabling seamless routing/navigation between
//react components
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

// product prop being received from HomeScreen file
const Product = ({ product }) => {
  return (
    //card for a single product
    <Card className='my-3 shadow bg-white'>
      {/* image (<Link> render actual <a> bts)*/}
      <Link to={`/product/${product._id}`}>
        <Card.Img src={`/${product.image}`} variant='top' />
      </Link>
      {/* body */}
      <Card.Body>
        {/* title */}
        <Link to={`/product/${product._id}`} className='ttle'>
          <Card.Title>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        {/* rating */}
        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>
        {/* skinConcern */}
        <Card.Text className='h6'>{product.concern}</Card.Text>
        {/* price */}
        <Card.Text as='h5'>₹{product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
