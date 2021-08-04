//script for rendering the Homescreen
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productActions_list } from '../actions/productActions';
import { Row, Col } from 'react-bootstrap';
import Message from '../components/message';
import Loader from '../components/loader';
import Product from '../components/Product';
//list of all products
//state levels- component(menu,forms) and global(products, users)

const HomeScreen = () => {
  const dispatch = useDispatch();

  //extracting 'productList' part of state, defined in store
  const productList = useSelector((state) => state.productList);
  //extracting info from 'productList' part of state into an Obj
  const { loading, error, products } = productList;

  //dispatching 'list products' action using useEffect
  useEffect(() => {
    dispatch(productActions_list());
  }, [dispatch]);

  return (
    <>
      <h1>
        <span className='underlineCustom'>Latest Products</span>
      </h1>
      {/*if loading then show loading, else show error, else show actual data*/}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {/*loop through all products and render Product component for each product, while
                    passing array element as a prop*/}
          {products.map((currProduct) => (
            <Col xs={5} sm={5} md={4} lg={3}>
              <Product product={currProduct} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
