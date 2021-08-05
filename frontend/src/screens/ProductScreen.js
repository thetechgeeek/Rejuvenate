//script for rendering the Product screen

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
  Form,
} from 'react-bootstrap';
import Rating from '../components/Rating';
import { productActions_details } from '../actions/productActions';
import Loader from '../components/loader';
import Message from '../components/message';

// <Route/> renders ProductScreen component by passing
// props (match, location, history)
// here, we're extracting history & match for use
const ProductScreen = ({ history, match }) => {
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productActions_details(match.params.id));
  }, [dispatch, match]);

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  //handles add to cart button presses
  const addToCartHandler = () => {
    history.push(`\cart\${match.params.id}?qty=${qty}`);
  };
  return (
    <>
      <Link className='btn btn-outline-primary my-3' to='/'>
        Go back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger' />
      ) : (
        <Row>
          <Col md={6}>
            <Image src={`.${product.image}`} width='100%' fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroupItem>
                <h2 className='py-2'>{product.name}</h2>
                <h6>{product.concern}</h6>
              </ListGroupItem>

              <ListGroupItem className='my-2'>
                <Rating value={product.rating} text={`${product.numReviews}`} />
              </ListGroupItem>

              <ListGroupItem>Price: ${product.price}</ListGroupItem>

              <ListGroupItem className='my-2'>
                Description: {product.description}
              </ListGroupItem>

              <ListGroupItem>
                <strong>Beneficial for</strong> {product.concern}
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup varients='flush'>
                <ListGroupItem>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroupItem>

                <ListGroupItem>
                  <Row>
                    <Col>Status: </Col>
                    <Col>
                      {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                    </Col>
                  </Row>
                </ListGroupItem>

                {product.countInStock > 0 && (
                  <ListGroupItem>
                    <Row>
                      <Col>Qty:</Col>
                      <Col>
                        {/*  */}
                        <Form.Control
                          as='select'
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroupItem>
                )}

                <ListGroupItem>
                  <Button
                    className='btn btn-primary w-100'
                    type='button'
                    disabled={product.countInStock === 0}
                    onClick={addToCartHandler}
                  >
                    Add to cart
                  </Button>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductScreen;
